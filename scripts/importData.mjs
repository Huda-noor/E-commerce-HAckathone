// import { createClient } from '@sanity/client';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path from 'path';

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: '2021-08-31',
// });

// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data);
//     const asset = await client.assets.upload('image', buffer, {
//       filename: imageUrl.split('/').pop(),
//     });
//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error.message);
//     return null;
//   }
// }

// async function importData() {
//   try {
//     console.log('Migrating data, please wait...');

//     // Fetch products from the API
//     const response = await axios.get('https://template-0-beta.vercel.app/api/product?limit=100',
//       'https://dummyjson.com/products/category/furniture?limit=50',
//       'https://fakestoreapi.com/products',
//     );
//     const products = response.data;

//     console.log('Products fetched:', products);

//     for (const product of products) {
//       let imageRef = null;

//       if (product.imagePath) {
//         imageRef = await uploadImageToSanity(product.imagePath);
//       }

//       const sanityProduct = {
//         _type: 'product',
//         id: product.id,
//         name: product.name,
//         category: product.category,
//         description: product.description,
//         discountPercentage: product.discountPercentage,
//         isFeaturedProduct: product.isFeaturedProduct,
//         stockLevel: product.stockLevel,
//         price: parseFloat(product.price),
//         image: imageRef
//           ? {
//               _type: 'image',
//               asset: {
//                 _type: 'reference',
//                 _ref: imageRef,
//               },
//             }
//           : undefined,
//         imagePath: product.imagePath,
        
//          // Store original image URL
//       };

//       await client.create(sanityProduct);
//       console.log(`Product created in Sanity: ${sanityProduct.id}`);
//     }

//     console.log('Data migrated successfully!');
//   } catch (error) {
//     console.error('Error in migrating data:', error.message);
//   }
// }

// importData();

import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`✅ Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('❌ Failed to upload image:', imageUrl, error.message);
    return null;
  }
}

async function importData() {
  try {
    console.log('🚀 Migrating data, please wait...');

    // Multiple APIs to fetch products
    const apiUrls = [
      'https://template-0-beta.vercel.app/api/product?limit=100',
      'https://dummyjson.com/products/category/furniture?limit=50',
      
    ];

    // Fetch data from all APIs in parallel
    const responses = await Promise.all(apiUrls.map(url => axios.get(url)));

    // Extract products from each API response and flatten them
    const allProducts = responses
      .map(response => response.data.products || response.data) // Handling different API structures
      .flat();

    console.log(`✅ Total Products Fetched: ${allProducts.length}`);

    // Remove duplicate products based on `id`
    const uniqueProducts = Array.from(new Map(allProducts.map(item => [item.id, item])).values());

    console.log(`🛒 Unique Products After Deduplication: ${uniqueProducts.length}`);

    for (const product of uniqueProducts) {
      let imageRef = null;

      if (product.imagePath || product.thumbnail || product.image) {
        imageRef = await uploadImageToSanity(product.imagePath || product.thumbnail || product.image);
      }

      const sanityProduct = {
        _type: 'product',
        id: product.id || product.sku, // Handle different product ID formats
        name: product.name || product.title,
        category: product.category || 'Uncategorized',
        description: product.description || 'No description available',
        discountPercentage: product.discountPercentage || 0,
        isFeaturedProduct: product.isFeaturedProduct || false,
        stockLevel: product.stockLevel || 10,
        price: parseFloat(product.price) || 0,
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
        imagePath: product.imagePath || product.thumbnail || product.image,
      };

      try {
        await client.create(sanityProduct);
        console.log(`✅ Product created in Sanity: ${sanityProduct.id}`);
      } catch (sanityError) {
        console.error(`❌ Failed to create product: ${product.id}`, sanityError.message);
      }
    }

    console.log('🎉 Data migration completed successfully!');
  } catch (error) {
    console.error('❌ Error in migrating data:', error.message);
  }
}

// Run the import function
importData();

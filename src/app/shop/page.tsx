
// import { client } from '@/sanity/lib/client';
// import ProductListing from '../components/ProductListing';
// import Link from 'next/link';
// import Image from 'next/image';
// import Header from '../components/Nav';
// import Pagination from '../ui/number';
// import Features from '../components/Feature';
// import ShopToolbar from '../ui/Shoptool';



// // Fetch products from Sanity
// async function fetchProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"]{
//     category,
//     "id": _id,
//     price,
//     description,
//     stockLevel,
//     imagePath,
//     discountPercentage,
//     isFeaturedProduct,
//     name,
//     "image":image.asset._ref
//   }`;
//   const products = await client.fetch(query);
//   console.log(products)
//   return products;

// }
// const handleFilterChange = (filters: any) => {
//   console.log("Filters applied:", filters);
// };



// const Shop = async () => {
//   const products = await fetchProducts();

//   return (
//   <div>
//     <Header />
//      <div className="relative text-black">
//           <Image
//             src="/shop.jpeg" // Replace with the correct image file path
//             alt="Shop Banner"
//             height={400}
//             width={1600}
//             className="w-full h-40 md:h-auto object-cover"
//           />
//           <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
//             Shop
//           </h1>
//           {/* Breadcrumb Section */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//             <p className="text-gray-700 text-xs md:text-xl flex items-center">
//               <Link href="/" className="font-bold hover:underline">
//                 Home
//               </Link>
//               <span className="font-bold mx-2">{'>'}</span>
//               <Link href="/shop" className="hover:underline">
//                 Shop
//               </Link>
//             </p>
//           </div>
//         </div>

//          {/* Shop Line Section */}
//                 <div className="my-6">
//                 <ShopToolbar onFilterChange={handleFilterChange} />
//                 </div>


//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//     {products.map((product:Product) =>(
//         <ProductListing product={product}  key={product.id}/>
//       ))}     
// </div>
//         <div className="justify-center mx-auto">
//                 <Pagination />
//               </div>
//               <Features />
//             </div>

//   );
// };

// export default Shop;

'use client';
import { useState, useEffect } from 'react';
import ProductListing from '../components/ProductListing';
import Pagination from '../ui/number'; // Your pagination component
import { client } from '@/sanity/lib/client';
import Header from '../components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import ShopToolbar from '../ui/Shoptool';



const fetchProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
    category,
    "id": _id,
    price,
    description,
    stockLevel,
    imagePath,
    discountPercentage,
    isFeaturedProduct,
    name,
    "image": image.asset._ref
  }`;

  return await client.fetch(query);
};
const handleFilterChange = (filters: any) => {
    console.log("Filters applied:", filters);
  };
const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Set how many products per page

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="wrapper">
      
     <Header />
     <div className="relative h-[316px] flex items-center justify-center bg-[#FAF4F4]">
        {/* Background Image */}
        <Image
          src="/shop-bg.jpg"
          layout="fill"
          objectFit="cover"
          className="opacity-[50%]"
          alt="Background"
        />
        {/* Centered Content */}
        <div className="absolute text-center font-poppins text-black">

          <div>
            <Image src="/bglogo.png" width={100} height={100} alt="Logo" className="ml-16" />
          </div>
          <h1 className="font-extrabold text-[50px] mb-4">Shop</h1>
          <Link href="/" legacyBehavior>
            <a className="flex ml-14">
              Home
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              Shop
            </a>

          </Link>
        </div>
      </div>
      <div className="my-6">
                <ShopToolbar onFilterChange={handleFilterChange} />
                </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginatedProducts.map((product) => (
          <ProductListing product={product} key={product.id} />
        ))}
      </div>
      {/* Pagination Component */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
    
  );
};

export default Shop;

import React from 'react';
import Image from 'next/image';
// Ensure this import is correct
import Link from 'next/link';
import { useCart, CartItem } from '../ui/CartContext'; // Import the useCart hook and CartItem type
import { urlFor } from '@/sanity/lib/image';

const ProductListing = ({ product }: { product: Product }) => {
  const { addToCart } = useCart(); // Get the addToCart function from the context

  // Ensure image exists before calling `urlFor`
  const imageUrl = product.image ? urlFor(product.image).url() : "/placeholder.jpg"; // Default image

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: Number(product.price), // Ensure price is a number
      quantity: 1, // Set initial quantity to 1
      image: product.image // Ensure this matches your CartItem structure
    };
    addToCart(cartItem); // Call addToCart with the CartItem
  };


  return (
    <div>
      {/* Product List */}
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <Link href={`/product/${product.id}`}>
          <Image
            src={imageUrl}
            alt={product.name}
            height={300}
            width={300}
            className="h-[250px] w-full object-cover"
          />
        </Link>
        {/* Product Details */}
        <div className="p-4 text-center">
          <p className="text-lg font-medium text-gray-800">{product.name}</p>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
          <button
            onClick={handleAddToCart} // Call handleAddToCart when clicked
            className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

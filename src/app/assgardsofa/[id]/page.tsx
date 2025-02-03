'use client'
import Header from '@/app/components/Nav';
import Top from '@/app/components/Top';
import UnderlineButton from '@/app/ui/underline-button';
import Image from 'next/image';
import React, { useState } from 'react';

import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';


function AssgardSofa() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const handleAddToCart = () => {
    alert(`Added to cart:
      Size: ${selectedSize}
      Color: ${selectedColor}
      Quantity: ${quantity}`);
  };

  return (
    <div className="wrapper">
      {/* Header */}
      <Header />

      {/* Product Page */}
      <div className="container mx-auto p-6">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-4">
          <span>Home</span> &gt; <span>Shop</span> &gt; <span>Asgaard Sofa</span>
        </div>

        <div className="flex flex-wrap">
          {/* Image Carousel */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center">
              <Image
                src="/8..png"
                alt="Asgaard Sofa"
                className="w-full h-auto mb-4"
              />
              <div className="flex space-x-2">
                <Image
                  src="/out.png"
                  alt="Thumbnail"
                  className="w-16 h-16 border rounded-md cursor-pointer"
                />
                <Image
                  src="/maya 2.png"
                  alt="Thumbnail"
                  className="w-16 h-16 border rounded-md cursor-pointer"
                />
                <Image
                  src="/maya3.png"
                  alt="Thumbnail"
                  className="w-16 h-16 border rounded-md cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <h1 className="text-3xl font-bold mb-2">Asgaard Sofa</h1>
            <p className="text-lg text-gray-700 mb-4">Rs. 250,000.00</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">
                &#9733; &#9733; &#9733; &#9733; &#9734;
              </span>
              <span className="text-sm text-gray-500 ml-2">(5 Customer Reviews)</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
              highs for a sound.
            </p>

            {/* Size Options */}
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Size</p>
              <div className="flex space-x-2">
                {['L', 'XL', 'XS'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Color</p>
              <div className="flex space-x-2">
                {['gold', 'black', 'purple'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color ? 'ring-2 ring-blue-500' : ''
                    }`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 border"
                >
                  -
                </button>
                <span className="px-4 py-2 border-t border-b">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 border"
                >
                  +
                </button></div>
                <UnderlineButton
              onClick={handleAddToCart}
              className="w-full  text-black py-3 border-black rounded-md"
            >
              Add To Cart
            </UnderlineButton>

              </div>
            </div>

            {/* Add to Cart */}
            
            {/* Additional Information */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>SKU:</span>
                <span>SS001</span>
              </div>
              <div className="flex justify-between">
                <span>Category:</span>
                <span>Sofas</span>
              </div>
              <div className="flex justify-between">
                <span>Tags:</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span>Share:</span>
                <div className="flex space-x-2">
                  <BsFacebook className="cursor-pointer" size={25} />
                  <FaLinkedin className="cursor-pointer" size={25} />
                  <FaTwitter className="cursor-pointer" size={25} />
                </div>
              </div>
            
        </div>
          </div>
        </div>

        {/* Tab Section */}
        <div className="mt-10">
          <div className="flex border-b">
            {['description', 'additionalInfo', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-500'
                }`}
              >
                {tab === 'description' && 'Description'}
                {tab === 'additionalInfo' && 'Additional Information'}
                {tab === 'reviews' && `Reviews [5]`}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700">
                  Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn portable active stereo speaker takes
                  the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Image src="/sofaset.jpeg" alt="Sofa Description 1" className="rounded-md" />
                  <Image src="/sofaset2.jpeg" alt="Sofa Description 2" className="rounded-md" />
                </div>
              </div>
            )}

            {activeTab === 'additionalInfo' && (
              <div>
                <p className="text-gray-700">
                  Additional Information: This sofa comes with multiple configurations and fabrics to match your home
                  decor.
                </p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <p className="text-gray-700">Customer Reviews: This sofa is amazing, super comfortable, and durable!</p>
              </div>
            )}
          </div>
        </div>
        <Top />
      </div>
    </div>
  );
}

export default AssgardSofa;

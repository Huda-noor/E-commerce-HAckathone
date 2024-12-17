'use client'
import React, { useState } from "react";

// Define TypeScript Types
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartItem: React.FC = () => {
  // Cart Items State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "/8..png", // Replace with the correct image path
    },
  ]);

  // Function to Remove Item
  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // Function to Update Quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  // Calculate Total Price
  const calculateTotal = (): number => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Cart Table */}
        <div className="w-full md:w-2/3">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-100 text-gray-700">
                <th className="py-3 px-4 text-left">Product</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Subtotal</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                    <span className="text-gray-700">{item.name}</span>
                  </td>
                  <td className="py-3 px-4">
                    Rs. {item.price.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                      className="w-16 text-center border border-gray-300 rounded"
                    />
                  </td>
                  <td className="py-3 px-4">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="w-full md:w-1/3 bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Cart Totals</h2>
          <div className="flex justify-between py-2 border-b">
            <span>Subtotal:</span>
            <span>Rs. {calculateTotal().toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-2 font-bold text-yellow-600">
            <span>Total:</span>
            <span>Rs. {calculateTotal().toLocaleString()}</span>
          </div>
          <button className="w-full mt-4 py-2 px-4 text-white bg-black hover:bg-gray-800 rounded">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

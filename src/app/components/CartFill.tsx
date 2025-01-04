'use client';

import React from "react";
import { useCart } from "../ui/CartContext";

const CartItem: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-100">
                <th className="border p-2">Product</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Subtotal</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">Rs. {item.price.toLocaleString()}</td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value, 10))
                      }
                      className="w-16 text-center border"
                    />
                  </td>
                  <td className="border p-2">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </td>
                  <td className="border p-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full md:w-1/3 bg-yellow-50 p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">
            Total: Rs. {calculateTotal().toLocaleString()}
          </h2>
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

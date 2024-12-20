import React from "react";
import { useCart } from "../ui/CartContext";

const CartItem: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <table className="w-full">
            <thead>
              <tr className="bg-yellow-100">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>Rs. {item.price.toLocaleString()}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 text-center border"
                    />
                  </td>
                  <td>Rs. {(item.price * item.quantity).toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full md:w-1/3 bg-yellow-50 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Total: Rs. {calculateTotal().toLocaleString()}</h2>
          <a href="/billing">
            <button className="w-full bg-black text-white py-2 rounded">
              Proceed to Checkout
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

"use client";
import React, { useState } from "react";

const BillingPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  // Order Summary
  const product = {
    name: "Asgaard Sofa",
    price: 250000.0,
    quantity: 1,
  };

  const subtotal = product.price * product.quantity;
  const total = subtotal; // Add logic for tax/shipping if needed.

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Submit (Simulate form submission)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Billing Details Submitted: ", formData);
    alert("Order Placed Successfully!");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Billing Details</h1>
      <div className="flex flex-wrap">
        {/* Left Side - Billing Form */}
        <form className="w-full md:w-2/3 pr-4" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>

          {/* Other Form Fields */}
          {[
            { label: "Company Name", name: "companyName", placeholder: "Company Name (Optional)" },
            { label: "Country / Region", name: "country", placeholder: "Select Country" },
            { label: "Street Address", name: "streetAddress", placeholder: "Street Address" },
            { label: "Town / City", name: "city", placeholder: "Town / City" },
            { label: "Province", name: "province", placeholder: "Province" },
            { label: "ZIP Code", name: "zipCode", placeholder: "ZIP Code" },
            { label: "Phone", name: "phone", placeholder: "Phone Number" },
            { label: "Email Address", name: "email", placeholder: "Email Address" },
          ].map((field) => (
            <div className="mb-4" key={field.name}>
              <label className="block font-medium mb-2">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={(formData as any)[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full border p-2 rounded"
                required={field.name !== "companyName"}
              />
            </div>
          ))}

          {/* Additional Information */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Additional Information</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Additional Information"
              rows={4}
              className="w-full border p-2 rounded"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Place Order
          </button>
        </form>

        {/* Right Side - Order Summary */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">Your Order</h2>
          <div className="flex justify-between mb-2">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>{product.name} x {product.quantity}</span>
            <span>Rs. {product.price.toFixed(2)}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 font-bold">
            <span>Total</span>
            <span className="text-yellow-600">Rs. {total.toFixed(2)}</span>
          </div>

          {/* Payment Options */}
          <h3 className="mt-4 font-bold">Payment Options</h3>
          <label className="block mt-2">
            <input type="radio" name="payment" value="bank" defaultChecked /> Direct Bank Transfer
          </label>
          <label className="block mt-2">
            <input type="radio" name="payment" value="cash" /> Cash on Delivery
          </label>
          <p className="text-sm text-gray-600 mt-4">
            Your personal data will be used for order processing and other purposes described in our{" "}
            <a href="#" className="text-blue-600 underline">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;

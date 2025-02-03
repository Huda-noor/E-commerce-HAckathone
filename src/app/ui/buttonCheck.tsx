'use client'
import product from '@/sanity/schemaTypes/product';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY');

export default function CheckoutButton({  }) {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      throw new Error('Stripe not initialized');
    }
    const response = await fetch('/components/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product }),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };


  return <button onClick={handleCheckout} className="w-full bg-white  text-black py-2 rounded hover:bg-gray-800">Checkout</button>;
}


"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import useCart from '@/hooks/useCart';
import AnimatedButton from '@/components/ui/AnimatedButton';

export default function CheckoutPage() {
  const { cartItems, totalAmount } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate a checkout process
    setTimeout(() => {
      alert('Checkout successful!');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <h1 className="text-2xl font-display text-ink mb-4">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between mb-2"
              >
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </motion.li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold">Total: ${totalAmount.toFixed(2)}</h2>
          <AnimatedButton onClick={handleCheckout} disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Checkout'}
          </AnimatedButton>
        </div>
      )}
    </div>
  );
}

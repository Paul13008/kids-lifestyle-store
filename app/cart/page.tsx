"use client";
import useCart from '@/hooks/useCart';
import CartSidebar from '@/components/ui/CartSidebar';
import { motion } from 'framer-motion';

export default function CartPage() {
  const { cartItems, totalAmount } = useCart();

  return (
    <div className="flex">
      <motion.div
        className="flex-1 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-display text-ink mb-4">Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="border-b py-2">
                <div className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <h2 className="text-xl font-display text-ink">Total: ${totalAmount.toFixed(2)}</h2>
        </div>
      </motion.div>
      <CartSidebar />
    </div>
  );
}

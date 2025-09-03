"use client";
import { motion } from 'framer-motion';
import useCart from '@/hooks/useCart';

const CartSidebar = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <motion.aside
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="fixed right-0 top-0 w-80 h-full bg-white border-l border-brand-100 shadow-soft p-4"
    >
      <h2 className="text-lg font-display text-ink mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-brand-600 hover:text-brand-700">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart} className="mt-4 bg-ink text-white py-2 px-4 rounded-full">
        Clear Cart
      </button>
    </motion.aside>
  );
};

export default CartSidebar;

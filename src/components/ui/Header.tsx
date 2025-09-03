"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-brand-100">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold font-display text-ink">
          <span className="align-middle">🌈</span> Kids Lifestyle
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href="/products"
            className="px-3 py-1 rounded-full bg-brand-50 text-ink hover:bg-brand-100 transition inline-flex items-center"
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="px-3 py-1 rounded-full bg-mint text-ink/90 hover:brightness-95 transition inline-flex items-center"
          >
            Cart
          </Link>
          <Link
            href="/checkout"
            className="px-3 py-1 rounded-full bg-sky text-ink/90 hover:brightness-95 transition inline-flex items-center"
          >
            Checkout
          </Link>
        </nav>
      </div>
      <motion.div
        className="h-1 bg-gradient-to-r from-brand-400 via-lemon to-lavender"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </header>
  );
};

export default Header;

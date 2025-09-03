"use client";
import { motion } from 'framer-motion';
import useCart from '@/hooks/useCart';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-soft bg-white border border-brand-100 hover:border-brand-200 transition will-change-transform"
      whileHover={{ rotate: -0.25, scale: 1.02 }}
    >
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-lemon text-ink text-xs font-bold shadow-sticker">
        New
      </div>
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover bg-brand-50" />
      <div className="p-4">
        <h2 className="text-lg font-display text-ink">{product.name}</h2>
        <p className="text-ink/70">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, imageUrl: product.imageUrl }, 1)}
          className="mt-3 inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white py-2 px-4 rounded-full shadow-soft transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;

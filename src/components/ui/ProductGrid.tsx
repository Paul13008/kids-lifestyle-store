"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
}

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;

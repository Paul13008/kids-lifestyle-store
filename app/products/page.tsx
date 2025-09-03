"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '@/components/ui/ProductGrid';
import { fetchProducts } from '@/lib/commerce';

const ProductsPage = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    loadProducts();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-display text-ink mb-4">Our Products</h1>
      <ProductGrid products={products} />
    </motion.div>
  );
};

export default ProductsPage;

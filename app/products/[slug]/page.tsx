"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { fetchProductBySlug } from '@/lib/commerce';
import { Product } from '@/types';
import useCart from '@/hooks/useCart';

const ProductPage = () => {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchProductBySlug(slug as string)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="product-page"
    >
      <h1 className="text-2xl font-display text-ink">{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 text-lg font-semibold">${product.price}</p>
      <button
        className="mt-4 bg-brand-500 hover:bg-brand-600 text-white py-2 px-4 rounded-full shadow-soft"
        onClick={() =>
          addToCart({ id: product.id, name: product.name, price: product.price, imageUrl: product.imageUrl }, 1)
        }
      >
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductPage;

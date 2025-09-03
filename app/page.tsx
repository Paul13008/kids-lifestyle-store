import ProductGrid from '@/components/ui/ProductGrid';
import { fetchProducts } from '@/lib/commerce';
import Hero from '@/components/sections/Hero';

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="min-h-screen">
      <Hero />
      <section className="container mx-auto px-4 py-10">
        <ProductGrid products={products} />
      </section>
    </main>
  );
}

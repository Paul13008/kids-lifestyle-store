export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  slug: string;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p-tee-rainbow',
    name: 'Rainbow Tee',
    description: 'Soft cotton tee with rainbow print.',
    price: 19.99,
    imageUrl: 'https://picsum.photos/seed/rainbow-tee/600/400',
    category: 'kids',
    slug: 'rainbow-tee',
  },
  {
    id: 'p-tote-happy',
    name: 'Happy Tote',
    description: 'Everyday canvas tote with smiley patch.',
    price: 24.0,
    imageUrl: 'https://picsum.photos/seed/happy-tote/600/400',
    category: 'accessories',
    slug: 'happy-tote',
  },
  {
    id: 'p-fannypack-fun',
    name: 'Fun Fanny Pack',
    description: 'Hands-free tiny pack for big adventures.',
    price: 29.5,
    imageUrl: 'https://picsum.photos/seed/fannypack/600/400',
    category: 'accessories',
    slug: 'fun-fanny-pack',
  },
  {
    id: 'p-hoodie-cloud',
    name: 'Cloud Hoodie',
    description: 'Cozy fleece hoodie, cloud-soft inside.',
    price: 39.0,
    imageUrl: 'https://picsum.photos/seed/cloud-hoodie/600/400',
    category: 'kids',
    slug: 'cloud-hoodie',
  },
];

export async function fetchProducts(): Promise<Product[]> {
  // Simulate latency
  await new Promise((r) => setTimeout(r, 120));
  return MOCK_PRODUCTS;
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  await new Promise((r) => setTimeout(r, 100));
  return MOCK_PRODUCTS.find((p) => p.slug === slug) ?? null;
}


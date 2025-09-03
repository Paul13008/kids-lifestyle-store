export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  slug: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalPrice: number;
  createdAt: string;
}
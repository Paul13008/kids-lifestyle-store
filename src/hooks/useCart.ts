import { useState, useEffect, useMemo } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  quantity: number;
}

type AddableItem = Pick<CartItem, 'id' | 'name' | 'price' | 'imageUrl'>;

const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? (JSON.parse(savedCart) as CartItem[]) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const addToCart = (item: AddableItem, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      const toAdd: CartItem = { ...item, quantity };
      return [...prevCart, toAdd];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );
  const totalQuantity = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  return {
    cartItems: cart,
    totalAmount,
    totalQuantity,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
};

export default useCart;

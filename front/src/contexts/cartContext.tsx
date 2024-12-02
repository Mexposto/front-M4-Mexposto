import { IProduct } from "@/interfaces/IProduct";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

interface ICartContext {
  cart: IProduct[];
  setCart: (cart: IProduct[]) => void;
  clearCart: () => void;
}
export const cartContext = createContext<ICartContext>({
  cart: [],
  setCart: () => {},
  clearCart: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    setCart(localCart ? JSON.parse(localCart) : []);
  }, []);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <cartContext.Provider value={{ cart, setCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;

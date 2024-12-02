"use client";

import CartProvider from "../contexts/cartContext";
import UserProvider from "../contexts/userContext";
import React from "react";

const Contexts = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <UserProvider>{children}</UserProvider>
    </CartProvider>
  );
};

export default Contexts;

import React from "react";
import { useState, useContext, createContext } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

// custom hoook
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };

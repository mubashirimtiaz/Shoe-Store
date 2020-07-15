import React, { createContext, useState, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cartReducer";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //   const [products, setProducts] = useState([]);
  const [products, dispatch] = useReducer(cartReducer, [], () => {
    return JSON.parse(localStorage.getItem("products") || "[]");
  });
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  return (
    <CartContext.Provider value={{ products, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Footer,
  Header,
  ProductsHome,
  Products,
  NotFound,
  ProductDetails,
  ProductCategory,
  Cart,
} from "./components";
import CartContextProvider from "./contexts/CartContext";
import GlobalContextProvider from "./contexts/GlobalContext";

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <CartContextProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="products" element={<Products />}>
              <Route path="/" element={<ProductsHome />}></Route>
              <Route
                path=":prodCategory/"
                element={<ProductCategory />}
              ></Route>
              <Route
                path=":prodCategory/:prodID"
                element={<ProductDetails />}
              ></Route>
            </Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </CartContextProvider>
      </GlobalContextProvider>
    </div>
  );
}

export default App;

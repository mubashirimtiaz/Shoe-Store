import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import cart from "../../images/shopping_cart.png";
import { CartContext } from "../../contexts/CartContext";

const Header = () => {
  const { products } = useContext(CartContext);

  const totalProducts = products.reduce((acc, curr) => (acc += curr.qty), 0);
  console.log(products);
  console.log("totalProducts", totalProducts);
  return (
    <ul className="nav bg-white shadow-sm  ">
      <li className="nav-item">
        <NavLink
          activeClassName="active-nav-link"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <h2 className="text-secondary">SHOE STORE</h2>
        </NavLink>
      </li>
      {/* <li class="nav-item">
        <NavLink
          activeClassName="active-nav-link"
          exact
          to="products"
          style={{ textDecoration: "none" }}
        >
          Products
        </NavLink>
      </li> */}
      <li className="nav-item">
        <NavLink
          activeClassName="active-nav-link"
          to="cart"
          style={{ textDecoration: "none" }}
        >
          <img src={cart} alt="cart" />
          <sup className="text-light font-weight-bold bg-dark p-1 rounded-pill">
            {totalProducts}
          </sup>
        </NavLink>
      </li>
    </ul>
  );
};
export default Header;

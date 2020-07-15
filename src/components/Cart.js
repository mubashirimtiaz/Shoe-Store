import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { products, dispatch } = useContext(CartContext);
  console.log(products);
  const addQuantity = (id) => {
    dispatch({ type: "Add_QUANTITY", id: id });
  };
  const SubsQuantity = (id) => {
    dispatch({ type: "SUBS_QUANTITY", id: id });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", id: id });
  };
  return products.length ? (
    <div>
      <button
        className="my-3 btn btn-light border border-dark px-3 btn-lg"
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        Clear Cart
      </button>
      {products.map((prod) => {
        return (
          <div key={prod.productID}>
            <img
              src={prod.imgSrc}
              alt={prod.productName}
              className="shadow-sm"
            />
            <h5 className="mt-2">{prod.productName}</h5>
            <h5>Quantity: {prod.qty}</h5>
            <p>Price: ${prod.price * prod.qty}</p>
            <div className="my-3">
              <button
                className="btn btn-light border border-dark px-3"
                onClick={() => addQuantity(prod.productID)}
              >
                Add
              </button>
              {" | "}
              <button
                className="btn btn-light border border-dark px-3"
                onClick={() => SubsQuantity(prod.productID)}
              >
                Minus
              </button>
              {" | "}
              <button
                className="btn btn-light border border-dark px-3"
                onClick={() => removeItem(prod.productID)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div
      className=" my-5 m-auto d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh", flexDirection: "column" }}
    >
      {" "}
      <p className="display-4">Cart is Empty</p>
      <p>You have not added anything yet</p>
      <Link to="/">
        <button className="btn btn-light border border-dark px-5">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default Cart;

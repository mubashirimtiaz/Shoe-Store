import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const [checkout, setCheckout] = useState(false);
  const { products, dispatch } = useContext(CartContext);
  console.log(products);
  const totalAmount = products.reduce((acc, curr) => (acc += curr.price), 0);
  const totalItem = products.reduce((acc, curr) => (acc += curr.qty), 0);
  const addQuantity = (id) => {
    dispatch({ type: "Add_QUANTITY", id: id });
  };
  const SubsQuantity = (id) => {
    dispatch({ type: "SUBS_QUANTITY", id: id });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", id: id });
  };
  const handleCartCheckout = () => {
    dispatch({ type: "CLEAR_CART" });
    setCheckout(true);
  };
  if (products.length && !checkout) {
    return (
      <div>
        <button
          className=" mt-3 btn btn-light border border-dark px-3 btn-lg"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear Cart
        </button>
        <hr />
        {products.map((prod) => {
          return (
            <div key={prod.productID}>
              <img
                src={prod.imgSrc}
                alt={prod.productName}
                className="shadow-sm"
              />
              <h4 className="mt-2">{prod.productName}</h4>
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
        <hr />
        <h5>
          Total Items = <span>{totalItem}</span>
        </h5>
        <h5>
          Total Amount = <span>${totalAmount * totalItem}</span>
        </h5>
        <button
          className=" mt-3 btn btn-light border border-dark px-3 btn-lg"
          onClick={handleCartCheckout}
        >
          Checkout
        </button>{" "}
        <Link to="/">
          <button className=" mt-3 btn btn-light border border-dark px-3 btn-lg">
            Go to Home
          </button>
        </Link>
      </div>
    );
  } else if (checkout) {
    return (
      <div
        className=" my-5 m-auto d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh", flexDirection: "column" }}
      >
        <h1 className=" text-success">Successfully Checkout</h1>
        {/* <p>You have not added anything yet</p> */}
        <Link to="/">
          <button className="btn btn-light border border-dark px-5">
            Go to Home
          </button>
        </Link>
      </div>
    );
  } else {
    return (
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
  }
};

export default Cart;

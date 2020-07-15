import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
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
      <button className="my-3" onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
      {products.map((prod) => {
        return (
          <div key={prod.productID}>
            <img src={prod.imgSrc} alt={prod.productName} />
            <h5>{prod.productName}</h5>
            <h5>Quantity: {prod.qty}</h5>
            <p>Price: ${prod.price * prod.qty}</p>
            <div className="my-3">
              <button onClick={() => addQuantity(prod.productID)}>Add</button>{" "}
              {" | "}
              <button onClick={() => SubsQuantity(prod.productID)}>
                Minus
              </button>{" "}
              {" | "}
              <button onClick={() => removeItem(prod.productID)}>
                Remove Product
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="display-3 my-5 m-auto"> Cart is Empty</div>
  );
};

export default Cart;

import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { GlobalContext } from "../contexts/GlobalContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const [check, setCheck] = useState(false);
  const { prodID } = useParams();
  const { dispatch } = useContext(CartContext);

  const { products } = useContext(GlobalContext);

  let product = products.map((prod) => prod.products);
  // .find((...prod) => prod.productID === prodID);
  let allProduct = [].concat(...product);
  // console.log(product[0].concat(product[1].concat(product[2])));
  const filteredProd = allProduct.find((pro) => pro.productID === prodID);

  const addToCart = (prod) => {
    setCheck(true);
    dispatch({
      type: "ADD_PRODUCT",
      product: {
        id: prod.productID,
        name: prod.productName,
        imgSrc: prod.imgSrc,
        price: prod.price,
      },
    });
  };
  const addQuantity = (id) => {
    dispatch({ type: "Add_QUANTITY", id: id });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5 m-auto">
          <div className="card shadow-sm">
            <div className="card-header p-0">
              <img
                src={filteredProd.imgSrc}
                alt={filteredProd.productName}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
        <div className="col-md-7 m-auto">
          <div className="card-body">
            <h2>{filteredProd.productName}</h2>
            <p>price : ${filteredProd.price}</p>
            <p>stock : {filteredProd.stock}</p>
          </div>
          <h3 className="text-secondary">
            <u>Details</u>
          </h3>
          <p className="text-justify">{filteredProd.details}</p>
          <div>
            {check ? (
              <button
                className="btn btn-light border border-dark"
                onClick={() => addQuantity(filteredProd.productID)}
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="btn btn-light border border-dark"
                onClick={() => addToCart(filteredProd)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { CartContext } from "../contexts/CartContext";

const ProductCategory = () => {
  const [check, setCheck] = useState(false);
  const { prodCategory } = useParams();
  const { products } = useContext(GlobalContext);
  const { dispatch } = useContext(CartContext);
  const productCategory = products.filter(
    (prod) => prodCategory === prod.category
  );

  const categoryProduct = productCategory.map((pro) => pro.products);

  const addToCart = (prod) => {
    setCheck(!check);
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
    <div className="my-3">
      <h1>{prodCategory.toUpperCase()} Items</h1>
      <h1>
        {categoryProduct[0].map((prod) => (
          <div key={prod.productID} className="container">
            <div className="row">
              <div className="col-md-4 m-auto">
                <div className="card shadow-sm">
                  <img src={prod.imgSrc} alt={prod.productName} />
                </div>
                <h3 className="my-2">{prod.productName}</h3>
                <p>In Stock {prod.stock}</p>
                <div className="mt-3 mb-5">
                  <Link to={`${prod.productID}`}>
                    <button className="btn btn-light border border-dark">
                      View Details
                    </button>
                  </Link>
                  {"|"}
                  {check ? (
                    <button
                      className="btn btn-light border border-dark"
                      onClick={() => addQuantity(prod.productID)}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-light border border-dark"
                      onClick={() => addToCart(prod)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default ProductCategory;

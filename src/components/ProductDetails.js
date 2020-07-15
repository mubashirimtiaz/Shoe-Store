import React, { useContext } from "react";
import { useParams } from "react-router";
import { GlobalContext } from "../contexts/GlobalContext";

const ProductDetails = () => {
  // const { kidProducts } = useContext(KidsProductsContext);
  const { prodID } = useParams();
  const { products } = useContext(GlobalContext);

  let product = products.map((prod) => prod.products);
  // .find((...prod) => prod.productID === prodID);
  let allProduct = [].concat(...product);
  // console.log(product[0].concat(product[1].concat(product[2])));
  const filteredProd = allProduct.find((pro) => pro.productID === prodID);
  return (
    <div className="container">
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

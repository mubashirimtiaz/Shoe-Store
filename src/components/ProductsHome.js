import React, { useContext } from "react";
import { Link } from "react-router-dom";

const ProductsHome = () => {
  // const { kidProducts } = useContext(KidsProductsContext);
  return (
    <div>
      {/* {kidProducts.map((prod) => {
        return (
          <div key={prod.id}>
            <Link to={prod.id}>
              <h3>{prod.name}</h3>
            </Link>
            <img src={prod.imgSrc} alt={prod.name} />
          </div>
        );
      })} */}
    </div>
  );
};

export default ProductsHome;

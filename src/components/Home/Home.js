import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import kids from "../../images/kids-banner.jpg";
import men from "../../images/men-banner.jpg";
import women from "../../images/women-banner.jpg";
const Home = () => {
  const categories = [
    {
      category: "kids",
      imgSrc: { kids },
      id: 1,
    },
    {
      category: "men",
      imgSrc: { men },
      id: 2,
    },
    {
      category: "women",
      imgSrc: { women },
      id: 3,
    },
  ];
  return (
    <div>
      <div className="container-fluid banner mb-5 mt-0 p-0">
        <div className="left p-4 w-25 "></div>
        <div className="center w-50 text-center">
          <p className="display-4 text-light">SHOES FOR EVERYONE</p>
        </div>
        <div className="right p-4 w-25"></div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {categories.map((category) => {
            return (
              <div key={category.id} className="row ">
                <Link
                  to={`/products/${category.category}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={women}
                    alt={category.category}
                    className="img-fluid category-img shadow-sm"
                  />
                  <h3 className="text-dark category">
                    {category.category.toUpperCase()}
                  </h3>
                </Link>
              </div>
            );
          })}
        </div>
        <h2 className="my-3 mt-5 ">SHOES FOR EVERYONE</h2>
        <p>
          Our store has been your companion in happiness, both big and small,
          for over 50 years. Our roots are firmly grounded in Pakistan and with
          its people.
        </p>
      </div>
    </div>
  );
};

export default Home;

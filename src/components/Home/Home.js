import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const categories = [
    {
      category: "kids",
      imgSrc:
        "http://www.servis.com/wp-content/uploads/2017/09/servis-shoes-kids-shoes-banner-back.jpg",
      id: 1,
    },
    {
      category: "men",
      imgSrc:
        "http://www.servis.com/wp-content/uploads/2017/09/servis-shoes-men-shoes-banner-back.jpg",
      id: 2,
    },
    {
      category: "women",
      imgSrc:
        "http://www.servis.com/wp-content/uploads/2017/09/servis-shoes-women-shoes-banner-back.jpg",
      id: 3,
    },
  ];
  return (
    <div>
      <div className="container-fluid banner mb-5 mt-0 p-0">
        <div className="left p-4 w-25 "></div>
        <div className="center w-50">
          <p className="display-4 text-light">SHOES FOR EVERYONE</p>
        </div>
        <div className="right p-4 w-25"></div>
      </div>
      <div className="container">
        <div className="d-flex">
          {categories.map((category) => {
            return (
              <div key={category.id} className="row ">
                <Link
                  to={`/products/${category.category}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={category.imgSrc}
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

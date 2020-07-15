import React, { createContext, useState } from "react";
const allProducts = [
  {
    category: "kids",
    products: [
      {
        productID: "1",
        productName: "Weinbrenner",
        imgSrc:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/461-6022-b_360x.jpg?v=1588929868",
        stock: 5,
        price: 25,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi provident adipisci architecto commodi? Nihil placeat architecto tempora dolore, totam a eligendi hic quasi nemo ex? Fugiat repellat deserunt tempore.",
      },
      {
        productID: "2",
        productName: "Bubble Gummers",
        imgSrc:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/361-9014-b_360x.jpg?v=1588677273",
        stock: 8,
        price: 22,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi provident adipisci architecto commodi? Nihil placeat architecto tempora dolore, totam a eligendi hic quasi nemo ex? Fugiat repellat deserunt tempore.",
      },
    ],
  },
  {
    category: "men",
    products: [
      {
        productID: "3",
        productName: "Peshawari Goost",
        imgSrc:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/861-4212-b_360x.jpg?v=1589389847",
        stock: 3,
        price: 30,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi provident adipisci architecto commodi? Nihil placeat architecto tempora dolore, totam a eligendi hic quasi nemo ex? Fugiat repellat deserunt tempore.",
      },
      {
        productID: "4",
        productName: "Soft Zone",
        imgSrc:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/861-4558-b_360x.jpg?v=1586554499",
        stock: 7,
        price: 35,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi provident adipisci architecto commodi? Nihil placeat architecto tempora dolore, totam a eligendi hic quasi nemo ex? Fugiat repellat deserunt tempore.",
      },
    ],
  },
  {
    category: "women",
    products: [
      {
        productID: "5",
        productName: "Island",
        imgSrc:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/541-5009-b_360x.jpg?v=1588671704",
        stock: 9,
        price: 20,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi provident adipisci architecto commodi? Nihil placeat architecto tempora dolore, totam a eligendi hic quasi nemo ex? Fugiat repellat deserunt tempore.",
      },
      {
        productID: "6",
        productName: "Marie Claire",
        imgSrc:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/504-2009-b_360x.jpg?v=1587903246",
        stock: 6,
        price: 45,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi provident adipisci architecto commodi? Nihil placeat architecto tempora dolore, totam a eligendi hic quasi nemo ex? Fugiat repellat deserunt tempore.",
      },
    ],
  },
];
export const GlobalContext = createContext();
const GlobalContextProvider = ({ children }) => {
  const [products] = useState(allProducts);
  return (
    <GlobalContext.Provider value={{ products }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

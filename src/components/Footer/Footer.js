import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-white mt-5">
      <div>
        <span>
          {" "}
          Copyright © Mubashir Ali,{" "}
          <a href="mailto:mubashir.imtiaz123@gmial.com">
            mubashir.imtiaz123@gmial.com
          </a>{" "}
          - 2020
        </span>
      </div>
      <div>
        <span>Github Repo:</span>{" "}
        <a href="https://github.com/mubashirimtiaz/Shoe-Store">
          https://github.com/mubashirimtiaz
        </a>
      </div>
    </footer>
  );
};

export default Footer;

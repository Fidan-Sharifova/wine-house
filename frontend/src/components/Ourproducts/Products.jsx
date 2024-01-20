import React from "react";
import "./Products.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import Cards from "../Cards/Cards";

const Products = () => {
  return (
    <div className="productSection">
     
      <div className="textArea">
        <h1>OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
          perspiciatis!
        </p>
        <ul>
          <li>
            View All Products
            <FaLongArrowAltRight />
          </li>
        </ul>
      </div>
      <Cards />
    </div>
  );
};

export default Products;

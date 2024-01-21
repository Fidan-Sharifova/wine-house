import React, { useContext } from "react";
import "./Products.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import Cards from "../Cards/Cards";
import dataContext from "../../context/dataContext";

const Products = () => {
  const {handleSearch}=useContext(dataContext)
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
      <input type="text"onChange={handleSearch} />
      
      
      <select name="" id="">
        <option value="df">Default</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
        <option value="09">0-9</option>
        <option value="90">9-0</option>
      </select>
      <Cards />
    </div>
  );
};

export default Products;

import React, { useContext } from "react";
import "./Cards.scss";
import dataContext from "../../context/dataContext";
import { Link } from 'react-router-dom'

const Cards = () => {
  const { data, setData } = useContext(dataContext);
  
  return (
    <div className="container">
      <div className="row">
          {data.map((item, index) => (
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={item.image} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">${item.price}</p>
                <button className="detailBtn" ><Link style={{"textDecoration":'none', "color":"white"}} to={`/${item._id}`} >View Detail</Link></button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cards;

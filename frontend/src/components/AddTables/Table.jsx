import React, { useContext } from "react";
import "./Table.scss";
import dataContext from "../../context/dataContext";
import axios from "axios";

const Table = () => {
  const { data, handleDelete} = useContext(dataContext);


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Wine</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>

              <td><img style={{"width":"90px"}} src={item.image} alt="" /></td>
              <td>{item.name}</td>
              <td>{item.price}$</td>
              <td><button className="deleteBtn" onClick={()=>handleDelete(item._id)} >Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;



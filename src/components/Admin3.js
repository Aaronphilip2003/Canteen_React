import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Admin1.css";

const Admin3 = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin3")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const itemList = items.map((item) => (
    <tr key={item.index}>
      <td>{item.item}</td>
      <td>{item.price}</td>
    </tr>
  ));

  return (
    <div className="admin1-container">
      <h1>Canteen 3 Items</h1>
      <table>
        <thead>
          <tr>
            <th>Ordered Items</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{itemList}</tbody>
      </table>
    </div>
  );
};

export default Admin3;

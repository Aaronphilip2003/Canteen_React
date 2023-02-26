import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Admin1.css";

const Admin1 = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin1")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = () => {
    const checkedItems = items.filter((item) => item.checked === true);
    const indices = checkedItems.map((item) => item.index);
    axios
      .delete(`http://localhost:8080/canteen/${indices}`)
      .then((res) => {
        console.log(res.data);
        setItems(items.filter((item) => !indices.includes(item.index)));
      })
      .catch((err) => console.error(err));
  };

  const handleCheck = (index) => {
    const updatedItems = items.map((item) =>
      item.index === index ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const itemList = items.map((item) => (
    <tr key={item.index}>
      <td>{item.item}</td>
      <td>{item.price}</td>
      <td>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.index)}
          />
          <span className="checkmark"></span>
        </label>
      </td>
    </tr>
  ));

  return (
    <div className="admin1-container">
      <h1>Canteen 1 Items</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{itemList}</tbody>
      </table>
      <button className="delete-btn" onClick={handleDelete}>
        Delete Selected Items
      </button>
    </div>
  );
};

export default Admin1;

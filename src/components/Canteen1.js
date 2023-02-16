import React, { useState, useEffect } from "react";
import axios from "axios";

function Canteen1() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:8080/canteen1").then((response) => {
        setItems(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleCheckboxChange = (event, index) => {
    const updatedItems = [...items];
    updatedItems[index].selected = event.target.checked;
    setItems(updatedItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedItems = items.filter((item) => item.selected);
    const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);
    const canteenItems = selectedItems.map((item) => ({
      item: item.item,
      price: item.price,
    }));
    const data = { items: canteenItems, totalPrice: totalPrice };

    axios
      .post("http://localhost:8080/canteen", data)
      .then((response) => {
        console.log(response);
        setItems(items.map((item) => ({ ...item, selected: false })));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Canteen 1 Items:</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => handleCheckboxChange(event, index)}
                  checked={item.selected}
                />
                {item.item} - {item.price}
              </label>
            </li>
          ))}
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Canteen1;

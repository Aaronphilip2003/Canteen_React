import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Canteen.css";

function Canteen1() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

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
    const Canteen_Number = "Canteen 1";
    event.preventDefault();
    const selectedItems = items.filter((item) => item.selected);
    setSelectedItems(selectedItems);
    const canteenItems = selectedItems.map((item) => ({
      canteen_number: Canteen_Number,
      item: item.item,
      price: item.price,
    }));
    const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);
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
    <div className="canteen-container">
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
        <button type="submit">Proceed to order</button>
      </form>
      {selectedItems.length > 0 && (
        <div>
          <h3>Ordered Items:</h3>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>
                {item.item} - {item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Canteen1;

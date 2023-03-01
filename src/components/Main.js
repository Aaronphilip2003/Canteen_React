import React from "react";
import "../styles/Main.css";

const Main = () => {
  return (
    <div className="main-div">
      <h1 className="main-heading">Canteen Selection</h1>
      <a className="canteen-link" href="/canteen1">
        Canteen 1
      </a>
      <a className="canteen-link" href="/canteen2">
        Canteen 2
      </a>
      <a className="canteen-link" href="/canteen3">
        Canteen 3
      </a>
    </div>
  );
};

export default Main;

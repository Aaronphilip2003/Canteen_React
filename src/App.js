import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Canteen1 from "./components/Canteen1";
import Canteen2 from "./components/Canteen2";
import Canteen3 from "./components/Canteen3";
import Admin1 from "./components/Admin1";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route path="/canteen1" element={<Canteen1 />} />
          <Route path="/canteen2" element={<Canteen2 />} />
          <Route path="/canteen3" element={<Canteen3 />} />
          <Route path="/admin1" element={<Admin1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

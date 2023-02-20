import React from "react";
import axios from "axios";

const Admin1 = () => {
  axios.get("http://localhost:8080/admin1").then((res) => {
    console.log(res.data);
  });

  return <div>Admin1</div>;
};

export default Admin1;

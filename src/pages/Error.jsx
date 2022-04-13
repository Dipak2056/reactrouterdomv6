import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  let navigate = useNavigate();
  return (
    <div>
      Error this page is not found
      <hr />
      {/* this button click will navigate the user to the homepage again */}
      <button onClick={() => navigate("/")}>to go to home page</button>
    </div>
  );
};

export default Error;

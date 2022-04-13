import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  let navigate = useNavigate();
  return (
    <div>
      Contact
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        change to about page
      </button>
    </div>
  );
};

export default Contact;

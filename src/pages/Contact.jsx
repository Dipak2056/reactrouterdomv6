import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const Contact = () => {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      Contact for
      <button onClick={() => navigate("/about")}>
        change to about page {username}
      </button>
    </div>
  );
};

export default Contact;

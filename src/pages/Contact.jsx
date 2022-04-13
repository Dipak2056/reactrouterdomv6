import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const Contact = () => {
  let navigate = useNavigate();
  let { username } = useParams();
  return <div>contact</div>;
};

export default Contact;

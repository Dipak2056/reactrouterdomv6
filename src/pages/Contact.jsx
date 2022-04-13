import React from "react";
import { useParams } from "react-router-dom";
// in this page i am tryin to show the username that we get from the url defined in app.js
const Contact = () => {
  let { username } = useParams();
  return <div>contact of {username}</div>;
};

export default Contact;

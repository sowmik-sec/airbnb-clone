import React from "react";
import img2 from "./images/phone-icon.png";
import img3 from "./images/mail-icon.png";
import "./Contact.css";

const Contact = ({ img, name, phone, email }) => {
  return (
    <div className="contact-card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={img2} alt="" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={img3} alt="" />
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Contact;

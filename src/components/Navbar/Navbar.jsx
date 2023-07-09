import React from "react";
import Image from "./airbnb-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={Image} alt="" height={25} />
    </nav>
  );
};

export default Navbar;

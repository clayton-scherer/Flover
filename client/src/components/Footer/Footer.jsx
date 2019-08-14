import React from "react";
import "../../stylesheets/Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <small className="copy">&copy; {date.getFullYear()}</small>
    </footer>
  );
};

export default Footer;

import React from "react";
import classes from "../Layout/Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>&#169; 2023-2024 Nikki Pinzon</div>
    </footer>
  );
};

export default Footer;

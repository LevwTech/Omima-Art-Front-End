import React from "react";
import classes from "./Footer.module.css";
import FBIcon from "../../Assets/facebook.png";
import mailIcon from "../../Assets/email.png";
import instaIcon from "../../Assets/instagram.png";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <div className={classes.section}>
          <h1>Menu</h1>
          <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
            <div>Home</div>
          </Link>

          <Link
            to="/gallery"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <div>Gallery</div>
          </Link>
          <Link
            to="/exhibitions"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <div>Exhibitions</div>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <div>Contact</div>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <div>About</div>
          </Link>
        </div>
        <div className={classes.section}>
          <h1>Follow Us!</h1>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={FBIcon} alt="facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={instaIcon} alt="instagram" />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <img src={mailIcon} alt="email" />
          </a>
        </div>
      </footer>

      <div className={classes.rights}> @ {currentYear} Omima Art Gallery</div>
    </div>
  );
}
export default Footer;

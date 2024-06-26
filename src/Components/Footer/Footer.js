import React from "react";
import classes from "./Footer.module.css";
import FBIcon from "../../Assets/facebook.png";
import instaIcon from "../../Assets/instagram.png";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <div className={classes.section}>
          <h1>Menu</h1>

          <Link
            to="/"
            style={{ textDecoration: "none", color: "rgb(73, 72, 72)" }}
          >
            <div>Gallery</div>
          </Link>
          <Link
            to="/exhibitions"
            style={{ textDecoration: "none", color: "rgb(73, 72, 72)" }}
          >
            <div>Exhibitions</div>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "rgb(73, 72, 72)" }}
          >
            <div>Contact</div>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "rgb(73, 72, 72)" }}
          >
            <div>About</div>
          </Link>
        </div>
        <div className={classes.section}>
          <h1>Follow me!</h1>
          <a
            href="https://www.facebook.com/OA-Art-Gallery-1475989659102601"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FBIcon} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/omima_aboelnasr_art/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instaIcon} alt="instagram" />
          </a>
        </div>
      </footer>

      <div className={classes.rights}> @ {currentYear} Omima Art Gallery</div>
      <div className={classes.developed}>
        developed by&nbsp;
        <a
          href="https://www.linkedin.com/in/levw"
          target="_blank"
          rel="noreferrer"
        >
          Abdelrahman Mostafa
        </a>
      </div>
    </React.Fragment>
  );
}
export default Footer;

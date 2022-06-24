import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import FBIcon from "../../Assets/contact/facebook.png";
import InstaIcon from "../../Assets/contact/instagram.png";
import classes from "./Contact.module.css";
import React from "react";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <React.Fragment>
      <HeaderTitle title="Contact me!" sub="I would love to hear from you" />
      <div className={classes.contact}>
        <div>You can email me directly at</div>
        <a href="mailto:omimaaboelnasr@hotmail.com">
          Omimaaboelnasr@hotmail.com
        </a>
        <div>or send me a message at</div>
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
          <img src={InstaIcon} alt="instagram" />
        </a>
      </div>

      <div className={classes.container}>
        <div className={classes.send}>Send us a quick message!</div>
        <form method="post" action="https://formspree.io/f/myyowykv">
          <label htmlFor="fname">First Name</label>
          <input
            required
            type="text"
            id="fname"
            name="first"
            placeholder="Your name.."
          />
          <label htmlFor="lname">Last Name</label>
          <input
            required
            type="text"
            id="lname"
            name="last"
            placeholder="Your last name.."
          />
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            id="email"
            name="from"
            placeholder="Your email.."
          />
          <label htmlFor="subject">Subject</label>
          <textarea
            required
            id="subject"
            name="text"
            placeholder="Write something.."
            style={{ height: "200px" }}
          ></textarea>
          <Button
            variant="contained"
            type="submit"
            value="Submit"
            size="large"
            style={{ textDecoration: "none", color: '#494848', backgroundColor:"#dcecf3", fontWeight:"bold"}}
          >
            Submit
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default Contact;

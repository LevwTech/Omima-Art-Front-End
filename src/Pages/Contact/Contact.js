import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import FBIcon from "../../Assets/contact/facebook.png";
import InstaIcon from "../../Assets/contact/instagram.png";
import classes from "./Contact.module.css";
import React from "react";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <React.Fragment>
      <HeaderTitle title="Contact us!" sub="We would love to hear from you" />
      <div className={classes.contact}>
        <div>You can email us directly at</div>
        <a href="mailto:omima@gmail.com"> omima@gmail.com</a>
        <div>or send us a message at</div>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src={FBIcon} alt="facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src={InstaIcon} alt="instagram" />
        </a>
      </div>

      <div className={classes.container}>
        <div className={classes.send}>Send us a quick message!</div>
        <form action="action_page.php">
          <label htmlFor="fname">First Name</label>
          <input
            required
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            required
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="email">Email</label>

          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          />

          <label htmlFor="subject">Subject</label>
          <textarea
            required
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
          ></textarea>
          <Button variant="contained" color="success" className="Submit">
            Submit
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default Contact;

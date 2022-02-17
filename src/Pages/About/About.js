import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import React from "react";
import classes from "./About.module.css";
import img1 from "../../Assets/aboutpainting1.jpg";
import img2 from "../../Assets/aboutpainting2.jpg";
function About() {
  return (
    <React.Fragment>
      <HeaderTitle title="About the Artist" />
      <div
        className={classes.parent}
        style={{
          backgroundColor: "#EDEADE",
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        <img src={img2} alt="painting" />
        <div className={classes.about}>
          <span>Omima Aboelnasr</span> is a fine artist from Egypt who recieved
          masters in chemistry and is now a full-time artist who has been
          passionate about drawing ever since childhood. <br /> <br /> Her
          ambition is to achieve balance between color, luminosity and
          mathematical distance, but also to break it to create that beautiful
          contrast between harmony and chaos. She started by drawing portraits,
          natural views and still life artworks using oil and water colors.
        </div>
      </div>

      <div
        className={classes.parent}
        style={{ backgroundColor: "#E9DCC9", marginBottom: "30px  " }}
      >
        <div className={classes.about}>
          She carried on to develop her talent by drawing every chance she gets
          and reading about fine art. She has made and attended many solo and
          group art exhibitions. <br /> <br />
          She loves colors and her paintings mix between many art schools which
          results in a unique style. In this online shop, you can buy original
          signed unique paintings by Omima, All her paintings are on high
          quality canvas using high quality colors with varnish to preserve the
          colors.
        </div>
        <img src={img1} alt="painting" />
      </div>
    </React.Fragment>
  );
}
export default About;

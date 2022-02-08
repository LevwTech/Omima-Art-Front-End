import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import React from "react";
import classes from "./About.module.css";
import img1 from "../../Assets/aboutpainting1.jpg";
import img2 from "../../Assets/aboutpainting2.jpg";
function About() {
  return (
    <React.Fragment>
      <HeaderTitle title="About the Artist" />
      <div className={classes.parent}>
        <img src={img2} alt="painting" />
        <div className={classes.about}>
          <span> Omima </span> is an abstract and figurative painter from Egypt
          who finds inspiration throughout the daily random encounters and the
          own voice and expression of the creation process. <br /> <br /> Her
          ambition is to achieve balance between color, luminosity and
          mathematical distance, but also to break it to create that beautiful
          contrast between harmony and chaos. Omima has exhibited both in Egypt
          and Europe and her work has been sold to more than 20 different
          countries around the world.
        </div>
      </div>

      <div className={classes.parent}>
        <div className={classes.about}>
          I’ve been drawing every chance I can get (even all over the attic
          staircase). I already knew I wanted to do something creative. After I
          got my masters in Chemistry and settled down, I went right back to the
          one thing I really loved: painting. In 2010, I created my first blog
          to share my passion. <br /> <br />
          Later on - in 2015 - I decided to offer services, like murals,
          customized paintings, and illustrations. I regularly exhibit at art
          markets and manage my own social media. In my online shop, you can buy
          original signed unique paintings.
        </div>
        <img src={img1} alt="painting" />
      </div>
    </React.Fragment>
  );
}
export default About;

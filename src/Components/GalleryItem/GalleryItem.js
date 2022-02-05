// import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import React from "react";
import classes from "./GalleryItem.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

import Painting5 from "../../Assets/test/painting5.jpeg";
import Painting6 from "../../Assets/test/painting6.jpeg";

function GalleryItem() {
  // const { id } = useParams(); // use to fetch
  const test = {
    imgs: [{ url: Painting6 }, { url: Painting5 }],

    pName: "painting1",
    description: "50 cm x 70 cm Nature Oil Painting",
    price: "199",
    id: "1",
  };

  return (
    <div className={classes.galleryItem}>
      <HeaderTitle title={test.pName} sub={test.description} />
      <div className={classes.buyInfo}>
        <div className={classes.price}>{`$${test.price}`}</div>
        <button className={classes.buyBtn}>BUY IT NOW</button>
      </div>
      <div className={classes.slider}>
        {Number(window.screen.width) < 900 ? (
          <SimpleImageSlider
            style={{
              margin: "auto",
              boxShadow: `0px 1px 10px 1px #07030541`,
            }}
            width={"100%"}
            height={"500px"}
            images={test.imgs}
            showBullets={true}
            showNavs={true}
          />
        ) : (
          <SimpleImageSlider
            style={{
              margin: "auto",
              boxShadow: `0px 1px 10px 1px #07030541`,
            }}
            width={"50%"}
            height={"600px"}
            images={test.imgs}
            showBullets={true}
            showNavs={true}
          />
        )}
      </div>

      <div className={classes.backBtn}>
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large">
            back to gallery
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default GalleryItem;

import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import classes from "./GalleryItem.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Skeleton from "@mui/material/Skeleton";

function GalleryItem() {
  const { id } = useParams();
  const [painting, setPainting] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/painting/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPainting(data);
        setShow(true);
      });
  }, []);

  if (!show)
    return (
      <Skeleton sx={{ height: 600 }} animation="wave" variant="rectangular" />
    );
  return (
    <React.Fragment>
      <HeaderTitle title={painting.title} sub={painting.desc} />
      <div className={classes.buyInfo}>
        <div className={classes.price}>{`$${painting.price}`}</div>
        <button className={classes.buyBtn}>BUY IT NOW</button>
      </div>

      {Number(window.screen.width) < 900 && (
        <SimpleImageSlider
          style={{
            margin: "auto",
            boxShadow: `0px 1px 10px 1px #07030541`,
          }}
          width={"100%"}
          height={"500px"}
          images={painting.images}
          showBullets={true}
          showNavs={true}
        />
      )}
      {Number(window.screen.width) > 900 && (
        <SimpleImageSlider
          style={{
            margin: "auto",
            boxShadow: `0px 1px 10px 1px #07030541`,
          }}
          width={"50%"}
          height={"600px"}
          images={painting.images}
          showBullets={true}
          showNavs={true}
        />
      )}

      <div className={classes.backBtn}>
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large">
            back to gallery
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
}
export default GalleryItem;

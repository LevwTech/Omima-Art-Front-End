import { useParams } from "react-router-dom";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import SimpleImageSlider from "react-simple-image-slider";
import classes from "./ExhibitionEvent.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ExhibitionEvent() {
  const { id } = useParams();
  const [exhibition, setExhibition] = useState({});
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/exhibition/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setExhibition(data);
        setShow(true);
      });
  }, []);

  if (!show)
    return (
      <Skeleton sx={{ height: 600 }} animation="wave" variant="rectangular" />
    );
  return (
    <div>
      <HeaderTitle title={exhibition.title} />
      <div className={`${classes.desc} ${classes.tv}`}>{exhibition.desc}</div>
      {Number(window.screen.width) < 900 ? (
        <Carousel
          infiniteLoop={true}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={30}
        >
          {exhibition.images.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={exhibition.title} />
            </div>
          ))}
        </Carousel>
      ) : (
        <SimpleImageSlider
          style={{
            margin: "auto",
            boxShadow: `0px 1px 10px 1px #07030541`,
          }}
          width={"50%"}
          height={"600px"}
          images={exhibition.images}
          showBullets={true}
          showNavs={true}
        />
      )}
      <div className={classes.backBtn}>
        <Link to="/exhibitions" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large">
            back to exhibitions
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default ExhibitionEvent;

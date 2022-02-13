import React, { useState, useEffect } from "react";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import classes from "./Gallery.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

function Gallery() {
  const [paintings, setPaintings] = useState([]);
  const [skip, setSkip] = useState(0);
  const [show, setShow] = useState(false);
  function loadPaintings() {
    fetch(`https://omimaart.herokuapp.com/paintings?skip=${skip}`)
      .then((response) => response.json())
      .then((data) => {
        setPaintings((paintings) => [...paintings, ...data]);
        setShow(true);
      });
    setSkip((skip) => skip + 10);
  }

  useEffect(() => {
    loadPaintings();
  }, []);
  if (!show)
    return (
      <Skeleton sx={{ height: 600 }} animation="wave" variant="rectangular" />
    );
  return (
    <div className={classes.gallery}>
      <HeaderTitle title="Gallery" sub="Singed and unique original paintings" />
      <div className={classes.parent}>
        {paintings.map((painting, index) => (
          <Link
            key={index}
            to={`/gallery/${painting._id}`}
            style={{ textDecoration: "inherit", color: "inherit" }}
            className={classes.child}
          >
            <img
              src={`https://omimaart.herokuapp.com/${painting.images[0]
                .split("/")
                .pop()}`}
              alt={painting.title}
            />
            <div className={classes.pName}>{painting.title}</div>
            <div className={classes.price}>
              {painting.price === 0 ? `SOLD` : `$${painting.price}`}
            </div>
          </Link>
        ))}
      </div>
      <div className={classes.seeMoreBtn}>
        <Button size="large" variant="contained" onClick={loadPaintings}>
          Load More
        </Button>
      </div>
    </div>
  );
}
export default Gallery;

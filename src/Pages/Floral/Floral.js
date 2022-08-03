import React, { useState, useEffect } from "react";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import classes from "./Floral.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

function Floral() {
  const [paintings, setPaintings] = useState([]);
  const [skip, setSkip] = useState(0);
  const [show, setShow] = useState(false);
  function loadPaintings() {
    fetch(`${process.env.REACT_APP_SERVER_URL}/floral?skip=${skip}`)
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
      <div className={classes.gallery}>
        <HeaderTitle title="Floral" sub="" />
        <div className={classes.parent}>
          <div
            style={{ textDecoration: "inherit", color: "inherit" }}
            className={classes.child}
          >
            <Skeleton
              className={classes.child}
              sx={{ height: 260, width: 260 }}
              animation="wave"
              variant="rectangular"
            />
            {/* <div style={{ marginTop: "30px" }}></div> */}
            <Skeleton
              className={classes.child}
              sx={{ height: 260, width: 260 }}
              animation="wave"
              variant="rectangular"
            />
            {/* <div style={{ marginTop: "30px" }}></div> */}
            <Skeleton
              className={classes.child}
              sx={{ height: 260, width: 260 }}
              animation="wave"
              variant="rectangular"
            />
          </div>
        </div>
      </div>
    );
  return (
    <div className={classes.gallery}>
      <HeaderTitle title="Floral" sub="" />
      <div className={classes.parent}>
        {paintings.map((painting, index) => (
          <Link
            key={index}
            to={`/gallery/${painting._id}`}
            style={{ textDecoration: "inherit", color: "inherit" }}
            className={classes.child}
          >
            <img src={painting.images[0]} alt={painting.title} />
            <div className={classes.pName}>{painting.title}</div>
            {/* <div className={classes.price}>
              {painting.price === 0 ? `SOLD` : `$${painting.price}`}
            </div> */}
          </Link>
        ))}
      </div>
      <div className={classes.seeMoreBtn}>
        <Button
          size="large"
          variant="contained"
          onClick={loadPaintings}
          style={{
            background: "#dcecf3",
            color: "#494848",
            fontWeight: "bold",
          }}
        >
          Load More
        </Button>
      </div>
    </div>
  );
}
export default Floral;

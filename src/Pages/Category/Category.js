import React, { useState, useEffect } from "react";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import { animateScroll } from "react-scroll";
function Category({ category }) {
  const [paintings, setPaintings] = useState(
    JSON.parse(sessionStorage.getItem("savedPaintings")) || []
  );
  const [skip, setSkip] = useState(
    Number(sessionStorage.getItem("savedSkip")) ?? 0
  );
  const [show, setShow] = useState(false);
  function loadPaintings() {
    const savedSkip = sessionStorage.getItem("savedSkip");
    const savedPaintings = sessionStorage.getItem("savedPaintings");
    if (savedSkip && savedPaintings) {
      setSkip(Number(savedSkip));
      setPaintings(JSON.parse(savedPaintings));
      sessionStorage.removeItem("savedSkip");
      sessionStorage.removeItem("savedPaintings");
      setShow(true);
      return;
    }

    fetch(
      `${process.env.REACT_APP_SERVER_URL}/category/${category}?skip=${skip}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPaintings((paintings) => [...paintings, ...data]);
        setShow(true);
      });
    setSkip((skip) => skip + 10);
  }

  useEffect(() => {
    loadPaintings();
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      animateScroll.scrollTo(Number(scrollPosition), {
        duration: 1,
      });
      sessionStorage.removeItem("scrollPosition");
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!show)
    return (
      <div className={classes.gallery}>
        <HeaderTitle title={capitalizeFirstLetter(category)} sub="" />
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
      <HeaderTitle title={capitalizeFirstLetter(category)} sub="" />
      <div className={classes.parent}>
        {paintings.map((painting, index) => (
          <Link
            key={index}
            to={`/gallery/${painting._id}`}
            style={{ textDecoration: "inherit", color: "inherit" }}
            className={classes.child}
            onClick={() => {
              sessionStorage.setItem("scrollPosition", window.pageYOffset);
              sessionStorage.setItem("savedSkip", skip);
              sessionStorage.setItem(
                "savedPaintings",
                JSON.stringify(paintings)
              );
            }}
          >
            <div
              style={{
                backgroundImage: `url(${painting.images[0]})`,
                width: "270px",
                height: "270px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            {/* <img src={painting.images[0]} alt={painting.title} /> */}
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
export default Category;

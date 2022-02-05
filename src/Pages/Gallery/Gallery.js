import React from "react";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import classes from "./Gallery.module.css";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Painting1 from "../../Assets/test/painting1.jpg";
import Painting2 from "../../Assets/test/painting2.jpg";
import Painting3 from "../../Assets/test/painting3.jpg";
import Painting4 from "../../Assets/test/painting4.jpg";

function Gallery() {
  const testPaintings = [
    { image: Painting1, pName: "painting1", price: "59", id: "1" },
    { image: Painting2, pName: "painting2", price: "4900", id: "2" },
    { image: Painting3, pName: "painting3", price: "690", id: "3" },
    { image: Painting4, pName: "painting4", price: "321", id: "4" },
    { image: Painting1, pName: "painting5", price: "355", id: "5" },
    { image: Painting2, pName: "painting6", price: "345", id: "6" },
    { image: Painting3, pName: "painting7", price: "299", id: "7" },
    { image: Painting4, pName: "painting8", price: "100", id: "8" },
  ];
  return (
    <div className={classes.gallery}>
      <HeaderTitle title="Gallery" sub="Singed and unique original paintings" />
      <div className={classes.parent}>
        {testPaintings.map((test) => (
          <Link
            to={`/gallery/${test.id}`}
            style={{ textDecoration: "inherit", color: "inherit" }}
            className={classes.child}
          >
            <img src={test.image} alt={test.pName} />
            <div className={classes.pName}>{test.pName}</div>
            <div className={classes.price}>{`$${test.price}`}</div>
          </Link>
        ))}
      </div>
      <div className={classes.seeMoreBtn}>
        <Button size="large" variant="contained">
          Load More
        </Button>
      </div>
    </div>
  );
}
export default Gallery;

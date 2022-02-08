import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import React from "react";
import classes from "./Collection.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import Painting1 from "../../Assets/test/painting1.jpg";
import Painting2 from "../../Assets/test/painting2.jpg";
import Painting3 from "../../Assets/test/painting3.jpg";
import Painting4 from "../../Assets/test/painting4.jpg";

function Collection() {
  const bought = false;
  const testPaintings = [
    { image: Painting1, pName: "painting1", price: "59", id: "1" },
    { image: Painting2, pName: "painting2", price: "4900", id: "2" },
    { image: Painting3, pName: "painting3", price: "690", id: "3" },
    { image: Painting4, pName: "painting4", price: "321", id: "4" },
  ];
  return (
    <React.Fragment>
      {bought ? (
        <div className={classes.collection}>
          <HeaderTitle title="My Collection"></HeaderTitle>
          <div className={classes.parent}>
            {testPaintings.map((test, index) => (
              <Link
                key={index}
                to={`/gallery/${test.id}`}
                style={{ textDecoration: "inherit", color: "inherit" }}
                className={classes.child}
              >
                <img src={test.image} alt={test.pName} />
                <div className={classes.pName}>{test.pName}</div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className={classes.noitems}>
            <HeaderTitle title="You have no items :("></HeaderTitle>
          </div>
          <div className={classes.buybtn}>
            <Link to="/gallery" style={{ textDecoration: "none" }}>
              <Button variant="contained" size="large">
                Start Buying
              </Button>
            </Link>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
export default Collection;

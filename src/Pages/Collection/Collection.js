import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import React, { useState, useEffect } from "react";
import classes from "./Collection.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
import Skeleton from "@mui/material/Skeleton";

function Collection() {
  const [collection, setCollection] = useState([]);
  const [show, setShow] = useState(false);
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      return loginWithRedirect();
    }
    loadCollection();
  }, []);

  function loadCollection() {
    fetch(`${process.env.REACT_APP_SERVER_URL}/collection?owner=${user.sub}`)
      .then((response) => response.json())
      .then((data) => {
        setCollection([...data]);
        setShow(true);
      });
  }

  if (!show)
    return (
      <Skeleton sx={{ height: 600 }} animation="wave" variant="rectangular" />
    );

  return (
    <React.Fragment>
      {collection.length !== 0 ? (
        <div className={classes.collection}>
          <HeaderTitle title="My Collection"></HeaderTitle>
          <div className={classes.parent}>
            {collection.map((test, index) => (
              <Link
                key={index}
                to={`/gallery/${test._id}`}
                style={{ textDecoration: "inherit", color: "inherit" }}
                className={classes.child}
              >
                <img src={test.images[0]} alt={test.title} />
                <div className={classes.pName}>{test.title}</div>
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
              <Button variant="contained" size="large" style= {{color: '#494848', backgroundColor:"#dcecf3", fontWeight:"bold"}}>
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

import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import classes from "./GalleryItem.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Skeleton from "@mui/material/Skeleton";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useAuth0 } from "@auth0/auth0-react";

import Shipping from "../../Pages/Shipping/Shipping";

function GalleryItem() {
  const [showShipping, setShowShipping] = useState(false);
  const { user } = useAuth0();
  const [isAdmin, setIsAdmin] = useState(false);
  const { id } = useParams();
  const [painting, setPainting] = useState({});
  const [show, setShow] = useState(false);
  const [copy, setCopy] = useState(false);

  const allowedSubs = [
    "google-oauth2|106716483523184248288",
    "auth0|620ea784e08c3d006a486b84",
  ];
  setTimeout(checkAdmin, 1000);
  function checkAdmin() {
    if (allowedSubs.includes(user?.sub)) setIsAdmin(true);
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/painting/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPainting(data);
        setShow(true);
      });
  }, []);

  function onClickHandler() {
    setShowShipping(true);
  }
  if (!show)
    return (
      <Skeleton sx={{ height: 600 }} animation="wave" variant="rectangular" />
    );
  return (
    <React.Fragment>
      {showShipping ? (
        <Shipping items={[painting]} />
      ) : (
        <div>
          <HeaderTitle title={painting.title} sub={painting.desc} />
          <div className={classes.buyInfo}>
            <div className={classes.price} style={painting.price===0? {width:"100%"} : {}} >
              {painting.price === 0 ? `SOLD` : `$${painting.price}`}
            </div>
            {painting.price !== 0 && (
              <button onClick={onClickHandler} className={classes.buyBtn}>
                BUY IT NOW
              </button>
            )}
            {isAdmin && (
              <CopyToClipboard text={id} onCopy={() => setCopy(true)}>
                {copy ? (
                  <Button variant="contained" size="small" style={{ textDecoration: "none", color: '#494848', backgroundColor:"#42f5a4", fontWeight:"bold"}} >
                    Copied
                  </Button>
                ) : (
                  <Button variant="contained" size="small"  style={{ textDecoration: "none", color: '#494848', backgroundColor:"#dcecf3", fontWeight:"bold"}}>
                    Copy
                  </Button>
                )}
              </CopyToClipboard>
            )}
          </div>
          {Number(window.screen.width) < 900 && (
            <Carousel
              infiniteLoop={true}
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={30}
            >
              {painting.images.map((image, index) => (
                <div key={index} className={classes.fix}>
                  <img src={image.url} alt={painting.title} />
                </div>
              ))}
            </Carousel>
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
              <Button variant="contained" size="large"  style={{ textDecoration: "none", color: '#494848', backgroundColor:"#dcecf3", fontWeight:"bold"}}>
                back to gallery
              </Button>
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default GalleryItem;

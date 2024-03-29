import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./Exhibitions.module.css";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import ShareModal from "../../Components/ShareModal/ShareModal";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { animateScroll } from "react-scroll";
function Exhibitions() {
  const [exhibitions, setExhibitions] = useState(
    JSON.parse(sessionStorage.getItem("savedExhibitions")) || []
  );
  const [skip, setSkip] = useState(
    Number(sessionStorage.getItem("savedSkip")) ?? 0
  );
  const [show, setShow] = useState(false);

  function loadExhibitions() {
    const savedSkip = sessionStorage.getItem("savedSkip");
    const savedExhibitions = sessionStorage.getItem("savedExhibitions");
    if (savedSkip && savedExhibitions) {
      setSkip(Number(savedSkip));
      setExhibitions(JSON.parse(savedExhibitions));
      sessionStorage.removeItem("savedSkip");
      sessionStorage.removeItem("savedExhibitions");
      setShow(true);
      return;
    }

    fetch(`${process.env.REACT_APP_SERVER_URL}/exhibitions?skip=${skip}`)
      .then((response) => response.json())
      .then((data) => {
        setExhibitions([...exhibitions, ...data]);
        setShow(true);
      });
    setSkip((skip) => skip + 10);
  }

  useEffect(() => {
    loadExhibitions();
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
  if (!show)
    return (
      <Skeleton sx={{ height: 600 }} animation="wave" variant="rectangular" />
    );
  return (
    <div>
      <HeaderTitle
        title="Exhibitons"
        sub=" Art exhibitons in many different places that Omima took part in"
      />
      <div className={classes.parent}>
        {exhibitions.map((exh, index) => (
          <Card className={classes.child} key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={exh.title}
              height="140"
              image={exh.images[0]}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {exh.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exh.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <ShareModal
                url={`${process.env.REACT_APP_CLIENT_URL}/#/exhibitions/${exh._id}`}
              />
              <Link
                to={`/exhibitions/${exh._id}`}
                style={{ textDecoration: "none", color: "#494848" }}
                onClick={() => {
                  sessionStorage.setItem("scrollPosition", window.pageYOffset);
                  sessionStorage.setItem("savedSkip", skip);
                  sessionStorage.setItem(
                    "savedExhibitions",
                    JSON.stringify(exhibitions)
                  );
                }}
              >
                <Button size="small" style={{ color: "#494848" }}>
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
      <div className={classes.seeMoreBtn}>
        <Button
          size="large"
          variant="contained"
          onClick={loadExhibitions}
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
export default Exhibitions;

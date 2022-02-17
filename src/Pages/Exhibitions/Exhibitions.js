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

function Exhibitions() {
  const url = "https://omimaart.netlify.app";
  const [exhibitions, setExhibitions] = useState([]);
  const [show, setShow] = useState(false);

  function loadExhibitions() {
    fetch(`https://omimaart.herokuapp.com/exhibitions`)
      .then((response) => response.json())
      .then((data) => {
        setExhibitions([...data]);
        setShow(true);
      });
  }

  useEffect(() => {
    loadExhibitions();
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
              image={`https://omimaart.herokuapp.com/${exh.images[0]
                .split("/")
                .pop()}`}
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
              <ShareModal url={`${url}/#/exhibitions/${exh._id}`} />
              <Link
                to={`/exhibitions/${exh._id}`}
                style={{ textDecoration: "none" }}
              >
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default Exhibitions;

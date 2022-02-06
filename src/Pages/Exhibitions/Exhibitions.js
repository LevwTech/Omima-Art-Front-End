import * as React from "react";
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

const test = [
  {
    id: 1,
    title: "Sharm Exhibition",
    image: "https://i.ibb.co/9sWGb1f/download.jpg",
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    id: 2,
    title: "Sharm Exhibition2",
    image: "https://i.ibb.co/m5HBhYH/download-1.jpg",
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    id: 3,
    title: "Cairo Exhibition",
    image: "https://i.ibb.co/9WCFKbL/exhibition-design-scenography-0.jpg",
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    id: 4,
    title: "Cairo Exhibition2",
    image: "https://i.ibb.co/m5HBhYH/download-1.jpg",
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    id: 5,
    title: "Baghdad Exhibition",
    image: "https://i.ibb.co/9sWGb1f/download.jpg",
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

function Exhibitions() {
  const url = "http://127.0.0.1:3000/";
  return (
    <div>
      <HeaderTitle
        title="Exhibitons"
        sub=" Art exhibitons in many different places that Omima took part in"
      />
      <div className={classes.parent}>
        {test.map((exh, index) => (
          <Card className={classes.child} key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={exh.title}
              height="140"
              image={exh.image}
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
              <ShareModal url={`${url}/exhibitions/${exh.id}`} />
              <Link
                to={`/exhibitions/${exh.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
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
export default Exhibitions;

// import { useParams } from "react-router-dom";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import SimpleImageSlider from "react-simple-image-slider";
import classes from "./ExhibitionEvent.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function ExhibitionEvent() {
  const test = {
    id: "1",
    imgs: [
      { url: "https://i.ibb.co/9WCFKbL/exhibition-design-scenography-0.jpg" },
      { url: "https://i.ibb.co/9sWGb1f/download.jpg" },
      { url: "https://i.ibb.co/m5HBhYH/download-1.jpg" },
    ],
    title: "Sharm Exhibition",
    description:
      "On 29/9/2019 the annual art exhibition took place in cairo which i happily took part in and my painting which is included below took the first place Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  };

  // const { id } = useParams(); // use for fetch
  return (
    <div>
      <HeaderTitle title={test.title} />
      <div className={classes.desc}>{test.description}</div>
      {Number(window.screen.width) < 900 ? (
        <SimpleImageSlider
          style={{
            margin: "auto",
            boxShadow: `0px 1px 10px 1px #07030541`,
          }}
          width={"100%"}
          height={"500px"}
          images={test.imgs}
          showBullets={true}
          showNavs={true}
        />
      ) : (
        <SimpleImageSlider
          style={{
            margin: "auto",
            boxShadow: `0px 1px 10px 1px #07030541`,
          }}
          width={"50%"}
          height={"600px"}
          images={test.imgs}
          showBullets={true}
          showNavs={true}
        />
      )}
      <div className={classes.backBtn}>
        <Link to="/exhibitions" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large">
            back to exhibitions
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default ExhibitionEvent;

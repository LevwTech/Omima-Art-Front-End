import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import classes from "./Gallery.module.css";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className={classes.gallery}>
      <HeaderTitle
        title="Categories"
        sub="Signed and Unique Original Paintings Gallery"
      />

      <div className={classes.parent} style={{ marginTop: "10px" }}>
        <Link
          to="/floral"
          style={{
            textDecoration: "inherit",
            color: "inherit",
            width: "260px",
            height: "260px",
          }}
          className={`${classes.child} ${classes.img1}`}
        >
          <div>Floral</div>
        </Link>

        <Link
          to="/landscape"
          style={{
            textDecoration: "inherit",
            color: "inherit",
            width: "260px",
            height: "260px",
          }}
          className={`${classes.child} ${classes.img2}`}
        >
          <div>Landscape</div>
        </Link>

        <Link
          to="/abstract"
          style={{
            textDecoration: "inherit",
            color: "inherit",
            width: "260px",
            height: "260px",
          }}
          className={`${classes.child} ${classes.img3}`}
        >
          <div>Abstract</div>
        </Link>

        <Link
          to="/paper"
          style={{
            textDecoration: "inherit",
            color: "inherit",
            width: "260px",
            height: "260px",
          }}
          className={`${classes.child} ${classes.img4}`}
        >
          <div>Paper</div>
        </Link>
      </div>
      <div style={{ marginBottom: "100px" }}></div>
    </div>
  );
}
export default Gallery;

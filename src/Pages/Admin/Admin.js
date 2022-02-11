import React from "react";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import classes from "./Admin.module.css";

function Admin() {
  return (
    <React.Fragment>
      <HeaderTitle title="Create Painting" />

      <form
        className={classes.form}
        encType="multipart/form-data"
        method="post"
        action="http://localhost:3000/painting"
      >
        <label htmlFor="title">Title</label>
        <input id="title" required type="text" name="title"></input>

        <label htmlFor="desc">Description</label>
        <input id="desc" required type="text" name="desc"></input>

        <label htmlFor="price">Price</label>
        <input id="price" required type="number" name="price"></input>

        <label htmlFor="images">Images</label>
        <input id="images" required type="file" multiple name="images"></input>

        <input type="submit" value="submit"></input>
      </form>

      <hr style={{ borderBottom: "2px black solid", marginTop: "30px" }}></hr>
      <HeaderTitle title="Create Exhibition" />
      <form
        className={classes.form}
        encType="multipart/form-data"
        method="post"
        action="http://localhost:3000/exhibition"
      >
        <label htmlFor="title">Title</label>
        <input id="title" required type="text" name="title"></input>

        <label htmlFor="desc">Description</label>
        <input id="desc" required type="text" name="desc"></input>

        <label htmlFor="images">Images</label>
        <input
          id="images"
          required
          type="file"
          multiple
          name="exhibitions"
        ></input>

        <input type="submit" value="submit"></input>
      </form>
    </React.Fragment>
  );
}
export default Admin;

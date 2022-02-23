import React, { useEffect, useState } from "react";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import classes from "./Admin.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Admin() {
  let navigate = useNavigate();
  const { user } = useAuth0();
  useEffect(() => {
    const allowedSubs = [
      "google-oauth2|106716483523184248288",
      "auth0|620ea784e08c3d006a486b84",
    ];

    if (!allowedSubs.includes(user.sub)) return navigate(`/404`);
  }, []);
  const [id, setId] = useState("");
  const [id2, setId2] = useState("");
  const [id3, setId3] = useState("");
  const [price, setPrice] = useState("");
  function onChangeHandler(e) {
    setId(e.target.value);
  }
  function onChangeHandler2(e) {
    setId2(e.target.value);
  }
  function onChangeHandler3(e) {
    setId3(e.target.value);
  }
  function onChangeHandler4(e) {
    setPrice(e.target.value);
  }
  function onClickHandler(e) {
    e.preventDefault();
    fetch(`https://omimaart.herokuapp.com/delete/${id}`).then((data) => {
      console.log(data);
    });
  }
  function onClickHandler2(e) {
    e.preventDefault();
    fetch(`https://omimaart.herokuapp.com/Edelete/${id2}`).then((data) => {
      console.log(data);
    });
  }
  function onClickHandler3(e) {
    e.preventDefault();
    fetch(`https://omimaart.herokuapp.com/price/${id3}&:${price}`).then(
      (data) => {
        console.log(data);
      }
    );
  }

  return (
    <React.Fragment>
      <HeaderTitle title="Create Painting" />

      <form
        className={classes.form}
        encType="multipart/form-data"
        method="post"
        action="https://omimaart.herokuapp.com/painting"
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
        action="https://omimaart.herokuapp.com/exhibition"
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
      <hr style={{ borderBottom: "2px black solid", marginTop: "30px" }}></hr>
      <HeaderTitle title="Change Painting Price" />
      <form className={classes.form}>
        <label htmlFor="id">Id of Painting</label>
        <input
          id="id"
          required
          type="text"
          name="id"
          onChange={onChangeHandler3}
        ></input>
        <label htmlFor="price">New Price</label>
        <input
          id="price"
          required
          type="number"
          name="price"
          onChange={onChangeHandler4}
        ></input>
        <input type="submit" value="submit" onClick={onClickHandler3}></input>
      </form>
      <HeaderTitle title="Delete Painting" />
      <form className={classes.form}>
        <label htmlFor="id">Id of Painting</label>
        <input
          id="id"
          required
          type="text"
          name="id"
          onChange={onChangeHandler}
        ></input>
        <input type="submit" value="submit" onClick={onClickHandler}></input>
      </form>
      <HeaderTitle title="Delete Exhibition" />
      <form className={classes.form}>
        <label htmlFor="id">Id of Exhibition</label>
        <input
          id="id"
          required
          type="text"
          name="id"
          onChange={onChangeHandler2}
        ></input>
        <input type="submit" value="submit" onClick={onClickHandler2}></input>
      </form>
    </React.Fragment>
  );
}
export default Admin;

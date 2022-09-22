import React, { useEffect, useState } from "react";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import classes from "./Admin.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Orders from "../../Components/Orders/Orders";
import PrevOrders from "../../Components/PrevOrders/PrevOrders";

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
  const [id5, setId5] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [showOrders, setShowOrders] = useState(false);
  const [showPrevOrders, setShowPrevOrders] = useState(false);
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
    setNewPrice(e.target.value);
  }
  function onChangeHandler5(e) {
    setId5(e.target.value);
  }

  function onClickHandler(e) {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_SERVER_URL}/delete/${id}&${process.env.REACT_APP_ADMIN_PW}`
    ).then((data) => {
      console.log(data);
    });
  }
  function onClickHandler2(e) {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_SERVER_URL}/Edelete/${id2}&${process.env.REACT_APP_ADMIN_PW}`
    ).then((data) => {
      console.log(data);
    });
  }
  function onClickHandler3(e) {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_SERVER_URL}/price/${id3}&${newPrice}&${process.env.REACT_APP_ADMIN_PW}`
    ).then((data) => {
      console.log(data);
    });
  }
  function onClickHandler5(e) {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_SERVER_URL}/sold/${id5}&${process.env.REACT_APP_ADMIN_PW}`
    ).then((data) => {
      console.log(data);
    });
  }
  function onClickOrderBtnHandler() {
    setShowOrders((showOrders) => !showOrders);
  }
  function onClickPrevOrderBtnHandler() {
    setShowPrevOrders((showPrevOrders) => !showPrevOrders);
  }
  return (
    <React.Fragment>
      {!showPrevOrders && (
        <div className={classes.ordersBtn}>
          <Button
            variant="contained"
            size="large"
            onClick={onClickOrderBtnHandler}
            color="success"
          >
            {showOrders ? "Back to Admin" : "New Orders"}
          </Button>
        </div>
      )}
      {!showOrders && (
        <div className={classes.ordersBtn}>
          <Button
            variant="contained"
            size="large"
            onClick={onClickPrevOrderBtnHandler}
            color="secondary"
          >
            {showPrevOrders ? "Back to Admin" : "Previous Orders"}
          </Button>
        </div>
      )}
      {!showOrders && !showPrevOrders && (
        <div>
          <HeaderTitle title="Create Painting" />
          <form
            className={classes.form}
            encType="multipart/form-data"
            method="post"
            action={`${process.env.REACT_APP_SERVER_URL}/painting`}
          >
            <input
              type="hidden"
              name="password"
              value={process.env.REACT_APP_ADMIN_PW}
            ></input>
            <label htmlFor="title">Title</label>
            <input id="title" required type="text" name="title"></input>

            <label htmlFor="desc">Description</label>
            <input id="desc" required type="text" name="desc"></input>

            <label htmlFor="price">Price</label>
            <input id="price" required type="number" name="price"></input>

            <label htmlFor="category">Category</label>
            <select id="category" required name="category">
              <option value=""></option>
              <option value="floral" name="category">
                Floral
              </option>
              <option value="landscape" name="category">
                Landscape
              </option>
              <option value="abstract" name="category">
                Abstract
              </option>
              <option value="paper" name="category">
                Paper
              </option>
            </select>

            <label htmlFor="images">Images</label>
            <input
              id="images"
              required
              type="file"
              multiple
              name="images"
            ></input>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Button
                variant="contained"
                type="submit"
                value="Submit"
                size="medium"
                style={{
                  textDecoration: "none",
                  color: "#494848",
                  backgroundColor: "#42f5a4",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
          <hr
            style={{ borderBottom: "2px black solid", marginTop: "30px" }}
          ></hr>
          <HeaderTitle title="Create Exhibition" />
          <form
            className={classes.form}
            encType="multipart/form-data"
            method="post"
            action={`${process.env.REACT_APP_SERVER_URL}/exhibition`}
          >
            <input
              type="hidden"
              name="password"
              value={process.env.REACT_APP_ADMIN_PW}
            ></input>
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
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Button
                variant="contained"
                type="submit"
                value="Submit"
                size="medium"
                style={{
                  textDecoration: "none",
                  color: "#494848",
                  backgroundColor: "#42f5a4",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
          <hr
            style={{ borderBottom: "2px black solid", marginTop: "30px" }}
          ></hr>
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
              id="newPrice"
              required
              type="number"
              name="newPrice"
              onChange={onChangeHandler4}
            ></input>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Button
                variant="contained"
                type="submit"
                value="Submit"
                size="medium"
                onClick={onClickHandler3}
                style={{
                  textDecoration: "none",
                  color: "#494848",
                  backgroundColor: "#42f5a4",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
          <hr
            style={{ borderBottom: "2px black solid", marginTop: "30px" }}
          ></hr>

          <HeaderTitle title="Make Sold" />
          <form className={classes.form}>
            <label htmlFor="id">Id of Painting</label>
            <input
              id="id"
              required
              type="text"
              name="id"
              onChange={onChangeHandler5}
            ></input>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Button
                variant="contained"
                type="submit"
                value="Submit"
                size="medium"
                onClick={onClickHandler5}
                style={{
                  textDecoration: "none",
                  color: "#494848",
                  backgroundColor: "#42f5a4",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
          <hr
            style={{ borderBottom: "2px black solid", marginTop: "30px" }}
          ></hr>

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
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Button
                variant="contained"
                type="submit"
                value="Submit"
                size="medium"
                onClick={onClickHandler}
                style={{
                  textDecoration: "none",
                  color: "#494848",
                  backgroundColor: "#42f5a4",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
          <hr
            style={{ borderBottom: "2px black solid", marginTop: "30px" }}
          ></hr>
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
            <div
              style={{
                textAlign: "center",
                marginBottom: "100px",
                marginTop: "10px",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                value="Submit"
                size="medium"
                onClick={onClickHandler2}
                style={{
                  textDecoration: "none",
                  color: "#494848",
                  backgroundColor: "#42f5a4",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      )}
      {showOrders && <Orders />}
      {showPrevOrders && <PrevOrders />}
    </React.Fragment>
  );
}
export default Admin;

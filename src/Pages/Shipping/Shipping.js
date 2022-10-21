import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Skeleton from "@mui/material/Skeleton";
import classes from "./Shipping.module.css";
import Button from "@mui/material/Button";
import countriesData from "./countries.json";
const countries = countriesData.countries;
function Shipping(props) {
  const USD = 19;
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  const [newPrice, setNewPrice] = useState(props.items[0].price);
  const [fetched, setFetched] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [checkOutBtnType, setCheckOutBtnType] = useState({
    textDecoration: "none",
    color: "#494848",
    backgroundColor: "#42f5a4",
    fontWeight: "bold",
  });

  function onChangeCountryHandler(e) {
    setCountry(e.target.value);
    setFetched(false);
    fetch(
      `https://omimaart.herokuapp.com/shippingfees/${props.items[0].price}&${e.target.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNewPrice(data.newPrice);
        setFetched(true);
      });
  }
  function onChangeCityHandler(e) {
    setCity(e.target.value);
  }
  function onChangeAdressHandler(e) {
    setAdress(e.target.value);
  }
  function onChangePhoneHandler(e) {
    setPhone(e.target.value);
  }

  useEffect(() => {
    if (!isAuthenticated) {
      return loginWithRedirect();
    }
  }, []);

  function onClickPaymentHandler(e) {
    e.preventDefault();
    if (
      country.length === 0 ||
      city.length === 0 ||
      adress.length === 0 ||
      phone.length === 0
    ) {
      setCheckOutBtnType({
        textDecoration: "none",
        color: "#494848",
        backgroundColor: "#ed8585",
        fontWeight: "bold",
      });
      return;
    } else {
      setCheckOutBtnType({
        textDecoration: "none",
        color: "#494848",
        backgroundColor: "#42f5a4",
        fontWeight: "bold",
      });
    }

    fetch(`${process.env.REACT_APP_SERVER_URL}/payment`, {
      method: "POST",
      body: JSON.stringify({
        user,
        items: { ...props.items[0], price: newPrice },
        shipping: { country, city, adress, phone },
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(
        (data) =>
          (window.location.href = `https://accept.paymob.com/api/acceptance/iframes/340283?payment_token=${data.token}`)
      );
  }

  if (!isAuthenticated)
    return (
      <Skeleton sx={{ height: 600 }} animation="wave" variant="rectangular" />
    );
  return (
    <React.Fragment>
      <HeaderTitle title="Shipping" sub="Please enter your shipping details." />
      <form className={classes.form}>
        <label htmlFor="country">Country</label>
        <select id="country" required onChange={onChangeCountryHandler}>
          <option value=""></option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        <label htmlFor="city">City</label>
        <input
          required
          type="text"
          id="city"
          placeholder="Your city.."
          onChange={onChangeCityHandler}
        />
        <label htmlFor="adress">Adress</label>
        <input
          required
          type="text"
          id="adress"
          placeholder="Your adress.."
          onChange={onChangeAdressHandler}
        />
        <label htmlFor="phone">Phone (with Country Code)</label>
        <input
          required
          type="tel"
          id="phone"
          placeholder="Your phone.."
          style={{ marginBottom: "35px" }}
          onChange={onChangePhoneHandler}
        />

        <div className={classes.shipcontainer}>
          {fetched ? (
            <div className={classes.CheckOut}>
              <div>Total price with shipping</div>
              <div className={classes.finalPrice}>
                ${newPrice} <span>({newPrice * USD} EGP)</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  value="Submit"
                  onClick={onClickPaymentHandler}
                  style={checkOutBtnType}
                >
                  Checkout
                </Button>
              </div>
            </div>
          ) : (
            // <div style={{ height: "146px" }}></div>
            <div></div>
          )}
          <div className={classes.painting}>
            <img
              alt={props.items[0].title}
              src={props.items[0].images[0].url}
            />
            <label>{props.items[0].title}</label>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
export default Shipping;

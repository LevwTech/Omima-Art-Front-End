import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Skeleton from "@mui/material/Skeleton";
import classes from "./Shipping.module.css";
import Button from "@mui/material/Button";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre and Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts and; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
function Shipping(props) {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  const [newPrice, setNewPrice] = useState(props.items[0].price);
  const [fetched, setFetched] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [checkOutBtnType, setCheckOutBtnType] = useState("success");
  const [USD, setUSD] = useState(18);

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
    fetch(
      "https://openexchangerates.org/api/latest.json/?app_id=ecce751911ee41fa81a070ffab844866&base=USD"
    )
      .then((res) => res.json())
      .then((resdata) => setUSD(Number(resdata.data.rates.EGP)));
  }, []);

  function onClickPaymentHandler(e) {
    e.preventDefault();
    if (
      country.length === 0 ||
      city.length === 0 ||
      adress.length === 0 ||
      phone.length === 0
    ) {
      setCheckOutBtnType("error");
      return;
    } else {
      setCheckOutBtnType("success");
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
                ${newPrice} <span>({Math.round(newPrice * USD)} EGP)</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  color={checkOutBtnType}
                  size="medium"
                  type="submit"
                  value="Submit"
                  onClick={onClickPaymentHandler}
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

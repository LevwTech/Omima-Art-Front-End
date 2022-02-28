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
  const USD = 15.75;
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  const [newPrice, setNewPrice] = useState(props.items[0].price);
  const [fetched, setFetched] = useState(false);

  function onChangeCountryHandler(e) {
    setFetched(false);
    fetch(
      `https://omimaart.herokuapp.com/shippingfees/${props.items[0].price}&${e.target.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNewPrice(data.newPrice);
        setFetched(true);
      });
  }

  useEffect(() => {
    if (!isAuthenticated) {
      return loginWithRedirect();
    }
  }, []);

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
        <input required type="text" id="city" placeholder="Your city.." />
        <label htmlFor="adress">Adress</label>
        <input required type="text" id="adress" placeholder="Your adress.." />
        <label htmlFor="phone">Phone</label>
        <input
          required
          type="tel"
          id="phone"
          placeholder="Your phone.."
          style={{ marginBottom: "35px" }}
        />
        {fetched ? (
          <div className={classes.CheckOut}>
            <div>Total price with shipping</div>
            <div className={classes.finalPrice}>
              ${newPrice} <span>({newPrice * USD} EGP)</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button variant="contained" color="success" size="medium">
                Checkout
              </Button>
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: "200px" }}></div>
        )}
      </form>
    </React.Fragment>
  );
}
export default Shipping;

import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import paymentsuccessful from "../../Assets/paymentsuccessful.png";
import classes from "./PaymentSuccessful.module.css";
function PaymentSuccessful() {
  return (
    <div style={{ marginBottom: "700px" }}>
      <HeaderTitle
        title="Payment Successful"
        sub="Thank you for purchasing :) Your Painting Will Be Delivered To You"
      />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img
          alt="payment successful"
          src={paymentsuccessful}
          className={classes.paymentsuccessful}
        />
      </div>
      <HeaderTitle
        title=""
        sub=" An email that includes the tracking number and other details will be sent to you shortly."
      />
    </div>
  );
}
export default PaymentSuccessful;

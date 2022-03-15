import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import paymentfailed from "../../Assets/paymentfailed.png";
import classes from "./PaymentFailed.module.css";
function PaymentFailed() {
  return (
    <div style={{ marginBottom: "700px" }}>
      <HeaderTitle
        title="Payment Failed"
        sub="Something Went Wrong :( Please Try Again"
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img
          alt="payment failed"
          src={paymentfailed}
          className={classes.paymentfailed}
        />
      </div>
    </div>
  );
}
export default PaymentFailed;

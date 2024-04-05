import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import paymentfailed from "../../Assets/paymentfailed.png";
import FBIcon from "../../Assets/contact/facebook.png";
import InstaIcon from "../../Assets/contact/instagram.png";
import classes from "./PaymentFailed.module.css";
function PaymentFailed() {
  return (
    <div style={{ marginBottom: "700px" }}>
      <HeaderTitle
        title="Payment Failed"
        sub="Something Went Wrong, Please Contact Me"
      />
      <div className={classes.otherPaymentOptions}>
        Contact me at &nbsp;<a
          href="https://www.instagram.com/omimaaboelnasr_art/"
          target="_blank"
          rel="noreferrer"
        > Instagram 
        </a> &nbsp; to explore other payment options
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img
          alt="payment failed"
          src={paymentfailed}
          className={classes.paymentfailed}
        />
      </div>
      <div className={classes.contact}>
        <div>You can email me directly at</div>
        <a href="mailto:omimaaboelnasr@hotmail.com">
          Omimaaboelnasr@hotmail.com
        </a>
        <div>or send me a message at</div>
        <a
          href="https://www.facebook.com/OA-Art-Gallery-1475989659102601"
          target="_blank"
          rel="noreferrer"
        >
          <img src={FBIcon} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/omimaaboelnasr_art/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={InstaIcon} alt="instagram" />
        </a>
      </div>
    </div>
  );
}
export default PaymentFailed;

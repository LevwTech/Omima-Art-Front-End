import classes from "./HeaderTitle.module.css";
import React from "react";
function HeaderTitle(props) {
  return (
    <React.Fragment>
      <div className={classes.title}>{props.title}</div>
      {props.sub && <div className={classes.sub}>{props.sub}</div>}
    </React.Fragment>
  );
}
export default HeaderTitle;

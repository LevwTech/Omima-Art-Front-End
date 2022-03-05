import React, { useState, useEffect } from "react";
import classes from "./Orders.module.css";
import Skeleton from "@mui/material/Skeleton";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Button from "@mui/material/Button";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/orders`)
      .then((response) => response.json())
      .then((data) => {
        setOrders([...data]);
        setShow(true);
      });
  }, []);

  if (!show)
    return (
      <Skeleton sx={{ height: 600 }} animation="wave" variant="rectangular" />
    );

  return (
    <React.Fragment>
      {orders.length !== 0 ? (
        <React.Fragment>
          <HeaderTitle title="New Orders" />
          <div className={classes.orders}>
            {orders.map((order, index) => (
              <div className={classes.grandparent} key={index}>
                <div className={classes.parent1}>
                  <label>{order.title}</label>
                  <img alt={order.title} src={order.images[0]} />
                </div>
                <div className={classes.parent2}>
                  <div>{order.userInfo.name}</div>
                  <div>{order.userInfo.email}</div>
                  <div>{order.userInfo.phone}</div>
                  <div>{order.userInfo.country}</div>
                  <div>{order.userInfo.city}</div>
                  <div>{order.userInfo.adress}</div>
                </div>
                <div className={classes.parent3}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      fetch(
                        `${process.env.REACT_APP_SERVER_URL}/done/${order._id}`
                      ).then((res) => res.json());
                      setOrders((orders) => orders.filter((x) => x !== order));
                    }}
                  >
                    Done
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginBottom: "100px" }} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div style={{ marginBottom: "500px" }}>
            <HeaderTitle title="No New Orders" />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
export default Orders;

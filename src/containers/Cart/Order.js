import { Box, Grid, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DeliveryForm from "./DeliveryForm";
import PaymentForm from "./PaymentForm";
import ProductForm from "./ProductForm";
import { bindActionCreators } from "redux";
import { showToasterAction } from "../../redux/Toaster/ToasterAction";
import { createOrderReqAction } from "../../redux/Order/OrderAction";
import Auth from "../../utils/Auth";

export const Order = (props) => {
  const [payment, setPayment] = useState({});
  const [delivery, setDelivery] = useState({});
  const handlePaymentInput = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setPayment((e) => ({
      ...e,
      [name]: value,
    }));
  };
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setDelivery((e) => ({
      ...e,
      [name]: value,
    }));
  };
  const [totalAmount, settotalAmount] = useState(0);
  useEffect(() => {
    var total = 0;
    props.productList.forEach((element) => {
      total += element.price * element.quantity;
    });
    settotalAmount(total);
  }, [props.productList]);
  const handleConfirm = () => {
    if (payment.transactionId != undefined) {
      const temp = {
        userId: Auth.getData().userId,
        order: {
          deliveryInformation: delivery,
          payment: {
            ...payment,
            remaining:totalAmount-payment.amount,
            amount:totalAmount
          },
          productList: props.productList,
        },
      };
      props.orderReq(temp,()=>{props.toaster("Order Placed Succesfully", "success");})
      console.log(temp)
    } else {
      props.toaster("Verify The Payment", "error");
    }
  };
  return (
    <>
      <Grid container sx={{ display: "flex", flexDirection: "row" }}>
        <Grid item xs={12} md={8} lg={8} p={1} sx={{ overflow: "auto" }}>
          <Box sx={{ border: 1, borderRadius: 3, padding: 2, height: "59%" }}>
            <InputLabel
              sx={{
                color: "black",
                fontSize: "16px",
                marginBottom: 3,
                fontWeight: "bold",
              }}
            >
              Delivery Information
            </InputLabel>
            <DeliveryForm inputEvent={inputEvent} delivery={delivery} />
          </Box>
          <Box
            sx={{
              border: 1,
              borderRadius: 3,
              padding: 2,
              height: "40%",
              marginTop: 0.5,
            }}
          >
            <InputLabel
              sx={{
                color: "black",
                fontSize: "16px",
                marginBottom: 3,
                fontWeight: "bold",
              }}
            >
              Payment Information
            </InputLabel>
            <PaymentForm
              sx={{ backgroundColor: "black" }}
              payment={payment}
              inputEvent={handlePaymentInput}
              totalamt={totalAmount}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={4} p={1}>
          <Box sx={{ border: 1, borderRadius: 3, padding: 2 }}>
            <ProductForm onSubmit={handleConfirm} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

Order.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({
  productList: state.Cart.productList,
});

const mapDispatchToProps = (dispatch) => ({
  toaster: bindActionCreators(showToasterAction, dispatch),
  orderReq: bindActionCreators(createOrderReqAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);

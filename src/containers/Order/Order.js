import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Box, Button, Grid, InputLabel, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { getOrderReqAction, updateOrderReqAction } from "../../redux/Order/OrderAction";
import { getProductByIdReqAction } from "../../redux/Product/ProductAction";
import DeliveryForm from "./DeliveryForm";
import PaymentForm from "./PaymentForm";
import ProductForm from "./ProductForm";
import RowRadioButtonsGroup from "../../components/RadioButtons/RadioButtons";
import ReviewDialog from "../../components/Dialog/ReviewDialog";

export const Order = (props) => {
  const { state } = useLocation();
  const { row } = state;
  useEffect(() => {
    const temp = {
      orderId: row.orderId,
    };
    props.getOrder(temp, () => {});
  }, []);

  const radioList = [
    {
      value: "ACCEPTED",
      label: "Accept",
      disabled: false,
    },
    {
      value: "REJECTED",
      label: "Reject",
      disabled: false,
    },
    {
      value: "DISPATCHED",
      label: "Dispatched",
      disabled: false,
    },
  ];

  const [action, setAction] = useState(false);
  const [actionValue, setActionValue] = useState(row.status);
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);

  const handleAction = (e) => {
    setAction(!action);
    setActionValue(e.target.value);

    if (e.target.value === "REJECTED") {
      setReviewDialogOpen(true);
    } else {
      setReviewDialogOpen(false);
    }
  };

  const handleUpdateAction = () => {
    setAction(!action);
    props.order[0]["status"] = actionValue;
    props.updateOrderReq(props.order[0], () => {});
  };

  const handleReviewConfirm = (reviewText) => {
    props.order[0]["status"] = actionValue;
    props.order[0]["remark"] = reviewText;
    props.updateOrderReq(props.order[0], () => {});
    setReviewDialogOpen(false)
    setAction(!action)
  };

  return (
    <>
      <Grid container sx={{ display: "flex", flexDirection: "row" }}>
        <Grid item xs={12} md={8} lg={8} p={1} sx={{ overflow: "auto" }}>
          <Box sx={{ border: 1, borderRadius: 3, padding: 2 }}>
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
            <DeliveryForm orderId={row.orderId} />
          </Box>
          <Box sx={{ display: "flex", padding: 2, flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <InputLabel
                sx={{
                  color: "black",
                  fontSize: "16px",
                  marginBottom: 2,
                  fontWeight: "bold",
                  marginTop: 1,
                  marginInlineEnd: 2,
                }}
              >
                Action
              </InputLabel>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <RowRadioButtonsGroup
                handleAction={handleAction}
                defaultValue={actionValue}
                radioList={radioList}
              />
              {action && (
                <Grid item style={{ textAlign: "end", marginTop: 5, flexGrow: 1 }}>
                  <Button sx={{ color: "green" }} onClick={handleUpdateAction}>
                    Update
                  </Button>
                </Grid>
              )}
            </Box>
          </Box>

          <Box sx={{ border: 1, borderRadius: 3, padding: 2 }}>
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
            <PaymentForm sx={{ backgroundColor: "black" }} orderId={row.orderId} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={4} p={1}>
          <Box sx={{ border: 1, borderRadius: 3, padding: 2, minHeight: "100%" }}>
            <ProductForm orderId={row.orderId} setActionValue={setActionValue}/>
          </Box>
        </Grid>
      </Grid>

      <ReviewDialog
        open={reviewDialogOpen}
        onClose={() => setReviewDialogOpen(false)}
        onConfirm={handleReviewConfirm}
      />
    </>
  );
};

Order.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({
  order: state.Order.allOrder,
});

const mapDispatchToProps = (dispatch) => ({
  getOrder: bindActionCreators(getOrderReqAction, dispatch),
  getProductById: bindActionCreators(getProductByIdReqAction, dispatch),
  updateOrderReq: bindActionCreators(updateOrderReqAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);

import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { default as React, useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateOrderReqAction } from "../../redux/Order/OrderAction";

export const PaymentForm = (props) => {
  const order = props.order.find((element) => element.orderId === props.orderId);
  const [isFormDirty, setIsFormDirty] = useState(false);

  const formik = useFormik({
    initialValues: order.payment,
    enableReinitialize: true,
    onSubmit: (values) => {
      props.order[0]["payment"] = values;
      props.order[0].payment["remaining"] =
        props.order[0].payment.remaining - values.paid;
      props.updateOrderReq(props.order[0], () => {});
      props.order[0].payment["paid"]=''
      setIsFormDirty(false);
    },
  });

  useEffect(() => {
    if (
      JSON.stringify(formik.values) !== JSON.stringify(order.payment) &&
      !isFormDirty
    ) {
      setIsFormDirty(true);
    }
  }, [formik.values, isFormDirty, order.payment]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={6}>
          <TextField
            id="mode"
            name="mode"
            label="Mode"
            select
            value={formik.values.mode}
            onChange={formik.handleChange}
            fullWidth
            size="small"
          >
            <MenuItem value="cash">Cash</MenuItem>
            <MenuItem value="online">Online</MenuItem>
            <MenuItem value="cheque">Cheque</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="status"
            name="status"
            label="Status"
            value={formik.values.status}
            onChange={formik.handleChange}
            fullWidth
            select
            size="small"
          >
            <MenuItem value="PENDING">Pending</MenuItem>
            <MenuItem value="VERIFIED">Received</MenuItem>
            <MenuItem value="PARTIAL">Partial</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="amount"
            name="amount"
            label="Total Amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="remaining"
            name="remaining"
            label="Remaining Amount"
            value={formik.values.remaining}
            onChange={formik.handleChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="paid"
            name="paid"
            label="Paid Amount"
            value={formik.values.paid}
            onChange={formik.handleChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "end" }}>
          {isFormDirty && (
            <Button sx={{ color: "green" }} type="submit">
              Update
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
};

PaymentForm.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({
  order: state.Order.allOrder,
});

const mapDispatchToProps = (dispatch) => ({
  updateOrderReq: bindActionCreators(updateOrderReqAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);

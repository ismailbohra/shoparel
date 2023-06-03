import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { updateOrderReqAction } from "../../redux/Order/OrderAction";

export const DeliveryForm = (props) => {
  const order = props.order.find((element) => element.orderId === props.orderId);
  const [isFormDirty, setIsFormDirty] = useState(false);
  const formik = useFormik({
    initialValues: order.deliveryInformation,
    enableReinitialize:true, 
    onSubmit: (values) => {
      props.order[0]["deliveryInformation"] = values;
      props.updateOrderReq(props.order[0], () => {});
      setIsFormDirty(false);
    },
  });
  useEffect(() => {
    if (
      JSON.stringify(formik.values) !== JSON.stringify(order.deliveryInformation) &&
      !isFormDirty
    ) {
      setIsFormDirty(true);
    }
  }, [formik.values, isFormDirty, order.deliveryInformation]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="mobile"
            name="mobile"
            label="Mobile Number"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="state"
            name="state"
            label="State"
            value={formik.values.state}
            onChange={formik.handleChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="zipCode"
            name="zipCode"
            label="Zip Code"
            value={formik.values.zipCode}
            onChange={formik.handleChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
        {isFormDirty && (
            <Button sx={{ color: "green" }} type="submit">
              Update
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
}

DeliveryForm.propTypes = {
  second: PropTypes.func
}

const mapStateToProps = (state) => ({
  order:state.Order.allOrder
})

const mapDispatchToProps = (dispatch)=>({
  updateOrderReq:bindActionCreators(updateOrderReqAction,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryForm)
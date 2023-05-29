import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const DeliveryForm = (props) => {
  

  return (
    <form >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="name"
            name="name"
            label="Name"
            value={props.delivery.name}
            onChange={props.inputEvent}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="mobile"
            name="mobile"
            label="Mobile Number"
            value={props.delivery.mobile}
            onChange={props.inputEvent}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={props.delivery.email}
            onChange={props.inputEvent}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            value={props.delivery.city}
            onChange={props.inputEvent}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="state"
            name="state"
            label="State"
            value={props.delivery.state}
            onChange={props.inputEvent}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="zipCode"
            name="zipCode"
            label="Zip Code"
            value={props.delivery.zipCode}
            onChange={props.inputEvent}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
            value={props.delivery.address}
            onChange={props.inputEvent}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="remark"
            name="rem"
            label="Additional"
            value={props.delivery.remark}
            onChange={props.inputEvent}
            fullWidth
            size="small"
          />
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

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryForm)
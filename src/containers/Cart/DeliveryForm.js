import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const DeliveryForm = (props) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
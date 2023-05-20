import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";

const DeliveryForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "ismail",
      mobile: "9876543210",
      email: "cms@gmail.com",
      city: "Indore",
      state: "Madhya pradesh",
      zipCode: "574758",
      address: "IPS College Indore",
    },
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
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default DeliveryForm;

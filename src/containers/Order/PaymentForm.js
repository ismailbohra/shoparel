import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid, MenuItem } from "@mui/material";

const PaymentForm = () => {
  const formik = useFormik({
    initialValues: {
      mode: "online", // Set default value to "online"
      amount: "9876543210",
      status: "pending",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} style={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={6}>
          <TextField
            id="mode"
            name="mode"
            label="Mode"
            select
            value={formik.values.mode}
            onChange={formik.handleChange}
            fullWidth
          >
            <MenuItem value="cash">Cash</MenuItem>
            <MenuItem value="online">Online</MenuItem>
            <MenuItem value="cheque">Cheque</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="amount"
            name="amount"
            label="Amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            fullWidth
          />
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
          >
           <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="received">Received</MenuItem> 
          </TextField>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "end" }}>
          <Button size="small" variant="contained" color="primary" type="submit">
            Update
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PaymentForm;

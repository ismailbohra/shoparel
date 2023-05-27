import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import PropTypes from 'prop-types';
import { default as React } from "react";
import { connect } from 'react-redux';

export const PaymentForm = (props) => {
  
  const formik = useFormik({
    initialValues: {},
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
           <MenuItem value="PENDING">Pending</MenuItem>
            <MenuItem value="VERIFIED">Received</MenuItem> 
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
}

PaymentForm.propTypes = {
  second: PropTypes.func
}

const mapStateToProps = (state) => ({
  order:state.Order.allOrder
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm)
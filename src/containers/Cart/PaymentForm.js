import {
  Grid,
  InputLabel,
  Link,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { default as React, useState } from "react";
import { connect } from "react-redux";
import PaymentDialog from "../../components/Dialog/PaymentDialog";
import { Button } from "react-bootstrap";

export const PaymentForm = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>
              Please Pay the Amount of{" "}
              <span style={{ fontWeight: "bold" }}>
                ₹ {props.totalamt}
              </span>{" "}
              via online at +91 8741900521 orr By Account Transfer to Account
              No. 316401963112899 IFSC Code BARB0CHHOTI
            </Typography>
          </Grid>
          <Grid item xs={6} alignItems={"end"}>
            <Link
              style={{ textDecoration: "none" }}
              sx={{ color: "green" }}
              onClick={() => {
                setDialogOpen(true);
              }}
            >
              Click For Verification
            </Link>
          </Grid>
        </Grid>
      </form>
      <PaymentDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        payment={props.payment}
        inputEvent={props.inputEvent}
      />
    </>
  );
};

PaymentForm.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({
  order: state.Order.allOrder,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);

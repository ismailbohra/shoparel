import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";

const PaymentDialog = ({ open, onClose,payment,inputEvent }) => {

  const handleCancel = () => {
    onClose();
  };

  const handleSend = () => {

    onClose();
  };

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>Enter Payment Details</DialogTitle>
      <DialogContent sx={{ marginTop: 2 }}>
        <TextField
          sx={{ marginTop: 2 }}
          id="mode"
          name="mode"
          label="Mode"
          select
          value={payment.mode}
          onChange={inputEvent}
          fullWidth
        >
          <MenuItem value="cash">Cash</MenuItem>
          <MenuItem value="account">Account</MenuItem>
          <MenuItem value="online">Online</MenuItem>
          <MenuItem value="cheque">Cheque</MenuItem>
        </TextField>
        <TextField
          sx={{ marginTop: 2 }}
          margin="dense"
          label="Amount"
          name="amount"
          value={payment.amount}
          onChange={inputEvent}
          fullWidth
        />
        <TextField
          sx={{ marginTop: 2 }}
          margin="dense"
          name="transactionId"
          label="Transaction ID"
          value={payment.transactionId}
          onChange={inputEvent}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSend} color="primary">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentDialog;

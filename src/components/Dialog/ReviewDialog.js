import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import PropTypes from "prop-types";

const ReviewDialog = ({ open, onClose, onConfirm }) => {
  const [reviewText, setReviewText] = useState("");

  const handleReviewConfirm = () => {
    onConfirm(reviewText);
    setReviewText("");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Review</DialogTitle>
      <DialogContent>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleReviewConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

ReviewDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ReviewDialog;

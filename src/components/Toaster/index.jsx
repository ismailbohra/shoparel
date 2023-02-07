import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideToasterAction } from "../../redux/Toaster/ToasterAction";
import "./Toaster.scss";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarContent } from "@mui/material";

const Toaster = ({ toaster, hideToaster }) => {
  const { message, type, isOpen } = toaster;
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideToaster();
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isOpen}
        onClose={handleClose}
        message={message}
        autoHideDuration={2500}
        key={"vertical" + "horizontal"}
      >
        <SnackbarContent
          style={{
            backgroundColor: type === "error" ? "#dc3545" : "#198754",
          }}
          message={message}
        />
      </Snackbar>
    </>
  );
};

Toaster.propTypes = {
  toaster: PropTypes.object,
  hideToaster: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    toaster: state.Toaster,
  };
};

const mapDispatchToProps = (dispatch) => ({
  hideToaster: bindActionCreators(hideToasterAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);

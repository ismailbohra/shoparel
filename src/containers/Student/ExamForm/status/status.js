import React from "react";
import { connect } from "react-redux";

export const status = (props) => {
  return <div>status</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(status);

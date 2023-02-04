import React from "react";
import { connect } from "react-redux";

export const transaction = (props) => {
  return <div>transaction</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(transaction);

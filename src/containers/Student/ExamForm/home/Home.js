import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

const Home = (props) => {
  const navigate = useNavigate();
  const handleNavigation = (url) => {
    navigate(url);
  };
  return (
    <>
      <div>home</div>
      <button
        onClick={() => {
          handleNavigation("transaction");
        }}
      >
        transaction
      </button>
      <button
        onClick={() => {
          handleNavigation("status");
        }}
      >
        status
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

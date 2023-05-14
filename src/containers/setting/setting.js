import React from "react";
import { useSelector } from "react-redux";
import { connect } from 'react-redux';

const Setting=(props)=> {
  const searchvalue = useSelector((state) => state.SearchBox.searchValue);
  return (
    <>
    {searchvalue}
    <h3>setting</h3>
    </>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);

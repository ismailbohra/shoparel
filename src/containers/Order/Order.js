import { Box, Grid, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import DeliveryForm from "./DeliveryForm";
import { Label } from "@mui/icons-material";
import CustomSwitch from "../../components/Switch/Switch";
import PaymentForm from "./PaymentForm";
import ProductForm from "./ProductForm";


export const Order = (props) => {
  // const { state } = useLocation();
  // const { row } = state;
  return (
    <>
    
      <Grid container sx={{ display: 'flex' ,flexDirection:'row',}}>
        <Grid item xs={12} md={8} lg={8} p={1} sx={{overflow:'auto'}}>
          <Box sx={{border:1,borderRadius:3, padding: 2 }} >
              <InputLabel sx={{color: "black",fontSize:'16px',marginBottom:3,fontWeight:'bold'}}>Delivery Information</InputLabel>
              <DeliveryForm/>
          </Box>
          <Box sx={{display:'flex', padding: 2,flexDirection:'row' }} >
            <Box sx={{alignItems:'center',display:'flex',flexDirection:'column'}}>
              <InputLabel sx={{color: "black",fontSize:'16px',marginBottom:3,fontWeight:'bold',marginTop:1}}>Accept Order</InputLabel>
              </Box>
              <Box>  
          <CustomSwitch />
          </Box>
          </Box>
          <Box sx={{border:1,borderRadius:3, padding: 2 }} >
              <InputLabel sx={{color: "black",fontSize:'16px',marginBottom:3,fontWeight:'bold'}}>Payment Information</InputLabel>
              <PaymentForm sx={{backgroundColor:'black'}}/>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={4}  p={1}>
          <Box sx={{border:1,borderRadius:3, padding: 2,minHeight:'100%' }}>
            <ProductForm/>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

Order.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);

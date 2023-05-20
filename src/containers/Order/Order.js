import { Box, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import DeliveryForm from "./DeliveryForm";
import { Label } from "@mui/icons-material";
import CustomSwitch from "../../components/Switch/Switch";


export const Order = (props) => {
  const { state } = useLocation();
  const { row } = state;
  return (
    <>
    
      <Box sx={{ display: 'flex' ,flexDirection:'row',}}>
        <Box sx={{ width: "65%",margin:1}}>
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
              <InputLabel sx={{color: "black",fontSize:'16px',marginBottom:3,fontWeight:'bold'}}>Delivery Information</InputLabel>
              <DeliveryForm sx={{backgroundColor:'black'}}/>
          </Box>
        </Box>
        <Box sx={{ width: "35%", bgcolor: "pink", padding: 5 }}></Box>
      </Box>
    </>
  );
};

Order.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);

import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../components/Product Card/ProductCard'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import * as list from '../../assets/DemoData/product'
import { bindActionCreators } from 'redux';
import { getProductReqAction } from '../../redux/Product/ProductAction';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Product = (props) => {
  const navigate = useNavigate();

  const handleShowMoreClick = (product) => {
    navigate('../ProductDetails', { state: { element: product } });
  };
useEffect(() => {
  props.productReq()
}, [])
useEffect(() => {
  props.productReq({name:props.search})
}, [props.search])

  return (
    <Box sx={{ flexGrow: 1 ,marginTop:5,margin:3}}>
      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.productList.map((element, index) => (
          <Grid item xs={12} sm={4} md={12/4} key={index}>
            <Item sx={{ height: '100%' }}>
              <ProductCard
                handleShowMoreClick={handleShowMoreClick}
                element={element}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

Product.propTypes = {
  second: PropTypes.func
}

const mapStateToProps = (state) => ({
  productList:state.Product.products,
  search:state.SearchBox.searchValue
})

const mapDispatchToProps = (dispatch)=>({
  productReq:bindActionCreators(getProductReqAction,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)

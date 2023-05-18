import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../components/Product Card/ProductCard'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Product() {

  const handleShowMoreClick=()=>{
    
  }


  return (
    <Box sx={{ flexGrow: 1 ,marginTop:5,margin:3}}>
      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(10)).map((_, index) => (
          <Grid item xs={2} sm={2} md={3} key={index}>
            <Item onClick={handleShowMoreClick}><ProductCard/></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

Product.propTypes = {
  second: PropTypes.func
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
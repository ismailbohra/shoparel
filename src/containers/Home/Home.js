import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Image from '../../components/image/Image';
import img from '../../assets/images/orderpending.png'

function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Pending" icon={<Image url={img}  width={15}/>}/>
        <Tab label="Accepted" />
        <Tab label="Dispatched" />
        <Tab label="Delivered" />
      </Tabs>
    </Box>
  );
}

Home.propTypes = {
  second: PropTypes.func
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
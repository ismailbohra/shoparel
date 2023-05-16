import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Image from '../../components/image/Image';
import pending from '../../assets/images/orderpending.png'
import accepted from '../../assets/images/orderaccepted.png'
import dispatched from '../../assets/images/orderdispatched.png'
import img from '../../assets/images/orderpending.png'

function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Pending" icon={<Image url={pending}  width={15}/>} wrapped/>
        <Tab label="Accepted" icon={<Image url={accepted}  width={15}/>}/>
        <Tab label="Dispatched" icon={<Image url={dispatched}  width={15}/>}/>
        <Tab label="Delivered" icon={<Image url={img}  width={15}/>}/>
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
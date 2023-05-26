import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { BsClipboardCheck, BsClipboardData } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Accepted from "./Accepted/Accepted";
import All from "./All/All";
import Dispatched from "./Dispatched/Dispatched";
import Pending from "./Pending/Pending";
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



export const Home = (props) => {
  
  const [value, setValue] = React.useState(0);
  const isMobile = window.innerWidth <= 786;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const size = window.innerWidth <= 786 ? 20 : 40;
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
        variant={isMobile ? "scrollable" : "fullWidth"}
        scrollButtons="auto"
      >
        <Tab
          value={0}
          label="All"
          sx={{ fontSize: "15px", flexGrow: 1 }}
          icon={<BsClipboardData size={size} />}
        />
        <Tab
          value={1}
          label="pending"
          sx={{ fontSize: "15px", flexGrow: 1 }}
          icon={<MdPendingActions size={size} />}
        />
        <Tab
          value={2}
          label="accepted"
          sx={{ fontSize: "15px", flexGrow: 1 }}
          icon={<BsClipboardCheck size={size} />}
        />
        <Tabs
          value={3}
          label="dispatched"
          sx={{ fontSize: "15px", flexGrow: 1 }}
          icon={<TbTruckDelivery size={size} />}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <All />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Pending />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Accepted />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Dispatched />
      </TabPanel>
    </Box>
  );

}

Home.propTypes = {
  second: PropTypes.func
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

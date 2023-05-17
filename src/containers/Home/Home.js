import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Typography from '@mui/material/Typography';


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

export default function ColorTabs() {
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
        variant={isMobile ? "scrollable" : null}
        scrollButtons={isMobile ? "auto" : null}
      >
        <Tab
          value={0}
          label="pending"
          sx={{ fontSize: "15px", flexGrow: 1 }}
          icon={<MdPendingActions size={size} />}
        />
        <Tab
          value={1}
          label="accepted"
          sx={{ fontSize: "15px", flexGrow: 1 }}
          icon={<BsClipboardCheck size={size} />}
        />
        <Tab
          value={2}
          label="dispatched"
          sx={{ fontSize: "15px", flexGrow: 1 }}
          icon={<TbTruckDelivery size={size} />}
        />
        <Tab
          value={3}
          label="received"
          sx={{ fontSize: "15px", flexGrow: 1 }}
          icon={<AiOutlineCheckCircle size={size} />}
        />
      </Tabs>
      <TabPanel value={value} index={0} >
        pending
      </TabPanel>
      <TabPanel value={value} index={1} >
        accepted
      </TabPanel>
      <TabPanel value={value} index={2} >
        dispatched
      </TabPanel>
      <TabPanel value={value} index={3} >
        received
      </TabPanel>
    </Box>
  );
}

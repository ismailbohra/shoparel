import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
function Home() {
  const isMobile = window.innerWidth <= 768;
  const [drawer, setdrawer] = useState(!isMobile);
  const toggleDrawer = () => {
    setdrawer(!drawer);
  };

  return (
    <>
      <Navbar drawer={toggleDrawer} drawervalue={drawer} />
      <Box sx={{ marginLeft: drawer?{ xs: "0px", sm: "240px" }:null ,marginTop:'80px'}}>
        <Outlet />
      </Box>
    </>
  );
}

export default Home;

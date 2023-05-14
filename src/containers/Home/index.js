import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar/Navbar"
import { Outlet } from "react-router-dom";
function Home() {
  const [drawer, setdrawer] = useState(false)
  const toggleDrawer=()=>{
    setdrawer(!drawer)
  }
  return (
    <>
     <Navbar drawer={toggleDrawer}/>
     <Sidebar drawer={drawer} onDrawerChange={toggleDrawer}/>
     <Outlet/>
    </>
  );
}

export default Home;

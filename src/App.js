import React from "react";
import "./App.scss";
import Toaster from "./components/Toaster";
import Routes from "./routes/Route";
import { ThemeProvider, createTheme } from "@mui/material";

export const theme = createTheme({
  palette:{
    status: {
      danger: '#cf2020',
    },
    primary:{
      main:"#22367f",
      
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <Routes />
    </ThemeProvider>
  );
}

export default App;

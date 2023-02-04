import React from "react";
import "./App.scss";
import Toaster from "./components/Toaster";
import Routes from "./routes/Route";

function App() {
  return (
    <>
      <Toaster />
      <Routes />
    </>
  );
}

export default App;

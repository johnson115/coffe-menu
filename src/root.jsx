import React from "react";
import Drawerr from "./components/drawer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/header";
import { useState } from "react";
const Root = () => {
  const [Varient, setVarient] = useState("permanent");
  
  return (
    <>
      <Header setvarient={setVarient}  text="Our Menu" />
      <Drawerr
        
        setVarient={setVarient}
        Varient={Varient}
        
      />
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Root;

import React from "react";
import Drawerr from "./components/drawer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/header";
import { useState } from "react";
const Root = () => {
  const [Varient, setVarient] = useState("permanent");
  const [Showme, setShowme] = useState("none");
  return (
    <>
      <Header setvarient={setVarient} showme={setShowme} text="Our Menu" />
      <Drawerr
        Displays={Showme}
        setVarient={setVarient}
        Varient={Varient}
        setShowme={setShowme}
        
      />
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Root;

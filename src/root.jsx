import React from "react";
import Drawerr from "./components/drawer";
import { Outlet } from "react-router-dom";
import {Box} from "@mui/material";
const Root = () => {
  return (
    <>

      <Drawerr />
<Box>
      <Outlet />
      </Box>
    </>
  );
};

export default Root;

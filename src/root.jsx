import React from "react";
import Drawerr from "./components/drawer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>

      <Drawerr />

      <Outlet />
    </>
  );
};

export default Root;

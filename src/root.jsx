import React from "react";
import Drawerr from "./components/drawer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
    <div>
      <Drawerr />
    </div>
    <Outlet/>
    </>
  );
};

export default Root;

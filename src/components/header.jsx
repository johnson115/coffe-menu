import "./styles/head.css";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const Header = ({ text, setvarient ,showme}) => {
  const Thislocation = useLocation();

  return (
    <>
      <Box
        className="head-bar"
        sx={{ display: Thislocation.pathname === "/" || Thislocation.pathname === "/Contact-us" ? "none" : "flex" }}
      >
        <IconButton  
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 2 }}
          onClick={() => {
            setvarient("temporary");
            showme("block");
          }}
        >
          <MenuIcon sx={{ fontSize: "30px", fontWeight: 700, top: 0 }} />
        </IconButton>
        <div className="tooo animate__animated animate__rollIn">
          <div>
            <h1 className="animate__animated animate__flipInX">{text} </h1>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Header;

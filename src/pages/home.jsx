import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ".././index.css";

import "animate.css";
import SendIcon from '@mui/icons-material/Send';

const HomePage = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.light,
    },
  }));
  return (
    <div className="home">
      <div className="title ">
        <h1 className="animate__animated animate__swing">
          Welcome to our coffee
        </h1>
        <div className="button">
          <ColorButton variant="contained" endIcon={<SendIcon />}>
            {" "}
            Go to Our Menu
          </ColorButton>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

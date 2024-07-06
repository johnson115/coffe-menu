import "./contact.css";
import React from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  var myqr = require(".././components/media/My Portfolio.png");
  const Go=useNavigate();
  return (
    <>
      <div className="for-img">
      <IconButton size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ ml: 2  , top:0, }}
      onClick={() => {
        Go("/");
      }}>
      <ArrowCircleLeftIcon className="animate__animated animate__slideInRight" sx={{fontSize:"37px",fontWeight:"900"}}
      />
      </IconButton>
        <div className="">
          <h1 className="animate__animated animate__zoomInDownbox">Call us or Visit us Directly </h1>
          <p>
            <span>Phone : </span>{" "}
            <a href="tel:+21658401360">+216 58401360</a>
          </p>
          <p>
            <span>Adress:</span>
          </p>
          <iframe
            title="the seven days coffee"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.90910614116063!2d9.878065699999999!3d37.2649565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3514b3aa83a7%3A0xa901895fb51ea95!2s7%20days%20salon%20de%20the!5e0!3m2!1sar!2stn!4v1719337229221!5m2!1sar!2stn"
            
            allowfullscreen={true}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="animate__animated slideInUp"
          >
            The seven days coffee
          </iframe>
        </div>
        <div className="mybox   animate__animated animate__zoomInRight">
          <h1>Developer Contact</h1>
          <div>
            <a href="https://amennoomen.com/">
              <img src={myqr} alt="QR" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

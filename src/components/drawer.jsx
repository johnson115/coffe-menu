import { Divider, Drawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import CoffeeIcon from '@mui/icons-material/Coffee';
import WineBarIcon from '@mui/icons-material/WineBar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


import React from "react";
import { NavLink } from "react-router-dom";



const Theme = createTheme({
  palette:{
    mode:"dark",
    
      main:"#7e4000" ,
      dark:"#f2cf8c" ,
  
    
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "linear-gradient(to top , #f2cf8c,#7e4000)",
          
        }
      }
    }
  }
  

})
var loogo = require('./media/loogo.png');
const listStyle = {
  
  backgroundColor: '#f2cf8c'
}
const drawerWidth = 240;
const Drawerr = () => {
  const naving=[{text:"Home" , icon:<HomeIcon /> , path:"/"},{text:"Coffe" , icon:<CoffeeIcon />,path:"/Coffe"},
    {text:'Jus',icon:<WineBarIcon />,path:"/jus"},
    {text:"Contact", icon:<ContactPhoneIcon />,path:"/Contact-us"}, ]
    const Navigate=useNavigate();
    const currentLocation=useLocation();
  return (

    <ThemeProvider theme={Theme}>
      <CssBaseline />
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box'
      },
    }}
    style={listStyle }
    variant="permanent"
    anchor="left"
    
  >
    
    
      <img height="170px"  src={loogo} alt="logo"  />
    
    
    <Divider />
    <List>
      {naving.map((item) => {
        return(
<ListItem disablePadding
sx={{
  backgroundColor:currentLocation.pathname === item.path ? Theme.palette.main : null,
}}>
      <ListItemButton  onClick={() => {
        Navigate(item.path);
      }}>
      {item.icon}
      <ListItemText sx={{textAlign:"center"}} primary={item.text} />
      </ListItemButton>
      </ListItem>
        )
      })}
      

    </List>
  </Drawer>
  </ThemeProvider>
  );
};

export default Drawerr;

import { Divider, Drawer, Toolbar } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

import React from "react";
const Theme = createTheme({
  palette:{
    mode:"dark",
  }
})
const drawerWidth = 240;
const Drawerr = () => {
  const naving=[{text:"Coffe"},{text:'jus'},{text:"soda"}]
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
    variant="permanent"
    anchor="left"
    
  >
    <Toolbar />
    <Divider />
    <List>
      {naving.map((item) => {
        return(
<ListItem disablePadding>
      <ListItemButton>
      <ListItemText primary={item.text} />
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

import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';
import HouseIcon from '@mui/icons-material/House';
import PaymentIcon from '@mui/icons-material/Payment';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom'
export default function DrawerApplication() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };const YourContext = React.createContext('');
  const yourContextValue = useContext(YourContext); 
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  function YourContextProvider({ children }) {
    const valueapp = '1'
   
     return (
       <YourContext.Provider value={{ valueapp }}>
         {children}
       </YourContext.Provider>
     );
   }
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List>
      {['Home', 'Price', 'Login', 'Register'].map((text, index) => (
        <ListItem key={text} disablePadding>
       
          <ListItemIcon>
            {index === 0 ? <HouseIcon /> : index === 1 ? <PaymentIcon /> : index === 2 ? <LoginIcon /> : <PersonAddIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        
      </ListItem>
      ))}
    </List>
   
      <Divider /> 
      <center>
        <p>
          {formattedDate}
        </p>
      </center>
    </Box>
  );

  return (
    <div>
        <Button onClick={toggleDrawer("right", true)}><DehazeIcon /></Button>
        <YourContextProvider />
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
    
  );
}
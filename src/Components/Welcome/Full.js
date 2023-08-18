import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import './Welcome.css';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className='button-dialog'>
       Learn more
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Learn more about the control panel
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
            close
            </Button>
          </Toolbar>
        </AppBar>
        <List style={{padding:20}}>
          <div className='learn'>
          <h1>
          Modern control panel
          </h1>
          <p style={{fontWeight:900}}>
          A website that provides a dedicated dashboard interface for restaurant owners, aiming to facilitate the management and control of the restaurant. The site offers a set of features and functions that enable restaurant owners to organize their business effectively and achieve an excellent customer experience. The site includes advanced technical components to interact with the database and improve the end user experience.
          </p>
          <h1>
          Application features
          </h1>
          <p style={{fontWeight:900}}>
        <h3>Menu Management:</h3>  

Add, edit, and delete items in the restaurant's menu, including meals and beverages.
Specify prices, descriptions, and images for each item in the menu.
          </p>
          <p style={{fontWeight:900}}>
        <h3> Order Management:</h3> 

Track incoming orders from customers visually and in detail.
Update order statuses (preparing, delivered, etc.).
Provide customer information and their previous orders to enhance future ordering experiences.
          </p>
          <p style={{fontWeight:900}}>
          <h3>Inventory Management: </h3>

Monitor quantities of materials and ingredients used in dishes.
Receive alerts when inventory approaches the minimum threshold.
          </p>
          <p style={{fontWeight:900}}>
            <h3>          Statistics and Reports:
</h3>
Display sales reports and restaurant performance over a specified time period.
Provide statistics on the most popular dishes and peak order times.
          </p>
          <p style={{fontWeight:900}}>
            <h3>Staff Management:</h3>          

Create accounts for employees and assign appropriate roles and permissions.
Track work hours and employee performance.
          </p>
          <p style={{fontWeight:900}}>
            <h3>Enhanced User Experience:</h3>
          

Attractive and user-friendly interface.
Smooth user experience across both computers and mobile devices.
          </p>
          <p style={{fontWeight:900}}>
            <h3>          Login and Security:
</h3>

Secure login system for restaurant owners and staff.
Protection of sensitive data and implementation of advanced security measures.
          </p>

          <h1>
          Expected Benefits:
          </h1>
          <p style={{fontWeight:900}}>
          Improved efficiency in restaurant management, reducing time and effort.
    Enhanced customer experience through precise menu organization and order tracking.
    Increased effectiveness in staff management and performance tracking.
    Provision of statistics aiding strategic decision-making for restaurant enhancement.
          </p>
          </div>
        </List>
      </Dialog>
    </div>
  );
}
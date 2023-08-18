import React from 'react';
import './Why.css';
import CardWhy from './Card';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Why = () => {
  return (
    <div className='container--------------'>
      <div className='why'>
        <div className='text-application'>
          <center>
            <div className='place-text'>
              <p className='p' style={{ color: 'orange', position: 'relative', right: '-20px' }}>Why us ?</p>
            </div>
          </center>
          <h1>Why choose us?</h1>
        </div>
        <div className='card-------'>
          <CardWhy title='Restaurant management' des='Managing a busy restaurant with many customers and daily orders can be challenging. Consider using an app to easily manage restaurants.' icon={<FoodBankIcon style={{ fontSize: '200px' }} />} />
          <CardWhy title='Distinguished Admin Panel' des='The app needs an advanced, visually appealing admin panel for seamless restaurant management. It streamlines tasks like handling customer requests and other crucial functions.' icon={<AdminPanelSettingsIcon style={{ fontSize: '200px' }} />} />
          <CardWhy title='the price' des='To fully control the restaurant on your computer or mobile phone, a monthly subscription is required. Packages vary in features and pricing, ensuring suitable options.' icon={<AttachMoneyIcon style={{ fontSize: '200px' }} />} />
        </div>
      </div>
    </div>
  );
}

export default Why;
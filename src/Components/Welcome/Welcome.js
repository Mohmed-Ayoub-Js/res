import React from 'react'
import './Welcome.css';
import FullScreenDialog from './Full';
const Welcome = () => {
    const image= 'tamplte.png';
  return (
    <div className='welcome' dir='rtl'>
        <div className='welcome-place'>
            <div className='text-app'>
            <h1 className='text'>
            <p style={{color:'orange'}} className='p' dir='rtl'>Welcome</p>

            Convenient and easy-to-use graphical interface
            </h1>              
            <h4 className='text-des' style={{color:'gray'}}>
            Our service provides an admin panel with which you can control everything that happens in your restaurant, the latest orders, the delivery request, and it is also possible through this panel with a modern design, you will get the latest orders, the places of orders, the type of food that was ordered and a lot more. Discover it yourself    
            </h4> 
            <FullScreenDialog />
        
            </div>
            <img src={image} alt='' className='interface'/>
        </div>
    </div>
  )
}

export default Welcome
import React from 'react'
import './Header.css';
import FormDialog from './FormDialog';
const Header = () => {
    const image = 'pitza.png'
  return (
    <div className='header'>
        <div className='info'>
        <h1 className='text'>        
            From now on, technology serves you in your restaurant
        </h1>
        <h3 style={{color:'gray'}}>
        Be the one who creates your platform
        </h3>
        <FormDialog />            
        </div>
        <div className='image'>
        <img src={image} alt='' className='image'/>
        </div>
        </div>
  )
}

export default Header
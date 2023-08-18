import React from 'react'
import Header from '../Components/Header/Header'
import './Home.css';
import Welcome from '../Components/Welcome/Welcome';
import Why from '../Components/whyUs/Why';
import Tabs from '../Components/tabs/Tabs';
import News from '../Components/news/News';
const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Welcome />
        <center>
        <Why />
        </center>
        <Tabs />
        <News />
    </div>
  )
}

export default Home
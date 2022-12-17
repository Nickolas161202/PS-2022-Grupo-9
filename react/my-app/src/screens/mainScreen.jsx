import React from 'react';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer/Footer';
import Jogos from '../components/common/Jogos/Jogos';
import Sobre from './Sobre';
import Playerlist from './Playerlist';
import Banner from '../components/common/Banner';
import './MainScreen.css'


function MainScreen() {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Banner/> 
      <div id='sobre'><Sobre/></div>
      <div id='jogadores'><Playerlist/></div>
      <div id='jogos'><Jogos/></div>
      <Footer />
    </div>
   
    
  );
  }

  export default MainScreen;

import React from 'react';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer/Footer';
import Jogos from '../components/common/Jogos/Jogos';
import Sobre from './Sobre';
import Playerlist from './Playerlist';
import Banner from '../components/common/Banner';


function MainScreen() {
  return (
    <div className='bg-white'>
      
      <Navbar/>
      <Banner/> 
      <Sobre/>
      <Playerlist/>
      <Jogos/>
      <Footer />
    </div>
   
    
  );
  }

  export default MainScreen;

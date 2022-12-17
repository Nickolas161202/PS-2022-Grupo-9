import React from 'react';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer/Footer';
import Jogos from '../components/common/Jogos/Jogos';
import Sobre from './Sobre';
import Playerlist from './Playerlist';


function MainScreen() {
  return (
    <div className='bg-white'>
      <Navbar/> 
      <Sobre/>
      <Playerlist/>
      <Jogos/>
      <Footer />
    </div>
  );
  }

  export default MainScreen;

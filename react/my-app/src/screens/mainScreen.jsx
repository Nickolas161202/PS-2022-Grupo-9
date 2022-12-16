
import React from 'react';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer/Footer';
import Jogos from '../components/common/Jogos/Jogos';
import Sobre from './Sobre';

import Atacantes from './Atacantes';
import Rendering from './test';
import ListaGoleiros from './Goleiros';
import Goleiros from './Goleiros';


function MainScreen() {
  return (
    <div>
     <Navbar/> 
    <Sobre/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Rendering/>
      <br />
     <Goleiros/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Jogos/>
      <Footer />
    </div>
  );
  }

  export default MainScreen;

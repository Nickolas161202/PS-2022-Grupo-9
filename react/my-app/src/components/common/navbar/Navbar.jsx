import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    
      <header>
      <nav className="navbar text-uppercase navbar-dark navbar-expand-md fixed-top border_teste">
        <div className="container tamanho border_teste">
          <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
            <a className=" text-white"> IDE</a>
          </button>
          
          <div className="border_teste tamanho collapse navbar-collapse" id="nav-principal">
            <ul className="navbar-nav tamanho">
              
                <a href="#" className="nav-item border_teste nav-link active ">Home</a>
             
              
                <a href="#" className="nav-item border_teste nav-link active ">Sobre</a>
            
            
                <a href="#" className="nav-item border_teste nav-link active ">Jogadores</a>
             
           
                <a href="#" className="nav-item border_teste nav-link active ">Jogos</a>
             
              
            </ul>
          </div>

        </div>
      </nav>
    </header>
   
  );
}
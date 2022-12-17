import React from 'react';
import './Navbar.css';
import ideLogo from './/imagens/ide.svg';
export default function Navbar() {
  return (
    
    <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-transparente">
      <div className="container">
        <img src={ideLogo} className="logo"></img>

        <button className="navbar-toggler " data-toggle="collapse" data-target="#nav-principal">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="nav-principal">
          <ul className="navbar-nav ">
            <li className="nav-item tam-texto">
              <a href="#" className="nav-link">HOME</a>
            </li>
            <li className="nav-item divisor "></li>
            <li className="nav-item">
              <a href="#" className="nav-link tam-texto">SOBRE</a>
            </li>
            <li className="nav-item divisor"></li>
            <li className="nav-item">
              <a href="#" className="nav-link tam-texto">JOGADORES</a>
            </li>
            <li className="nav-item divisor"></li>
            <li className="nav-item">
              <a href="#" className="nav-link tam-texto">JOGOS</a>
            </li>

           
          </ul>
        </div>

      </div>
    </nav>
  </header>
      
   
  );
}
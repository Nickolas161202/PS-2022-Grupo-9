import React from 'react';
import './Navbar.css';
import ideLogo from './/imagens/ide.svg';
export default function Navbar() {
  return (
    
<<<<<<< HEAD
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
             
=======
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
>>>>>>> 70135a52bf691ab4bee04b83e2f5b067d93b11cf
           
          </ul>
        </div>

      </div>
    </nav>
  </header>
      
   
  );
}
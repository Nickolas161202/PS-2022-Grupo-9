import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <ul class="">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Sobre">Sobre</a></li>
            <li><a href="#Jogadores">Jogadores</a></li>
            <li><a href="#Jogos">Jogos</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
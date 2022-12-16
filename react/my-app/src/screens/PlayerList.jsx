import React from 'react';
import Atacantes from './Atacantes';

const ListaDeAtacantes = () => {
  return (
<<<<<<< HEAD
    <div>
      <header>
        <nav>
          <ul class="">
            <li><a href='./Atacantes.jsx'>Atacantes</a></li>
            <li><a href='./MeioCampo.jsx'>MeioCampo</a></li>
            <li><a href='./Defensores.jsx'>Defensores</a></li>
            <li><a href='./Goleiros.jsx'>Goleiros</a></li>
          </ul>
        </nav>
      </header>
    </div>
=======
    <ul>
      { Atacantes.map( (Atacantes) => <li>{ Atacantes }</li>) }
    </ul>
>>>>>>> fe77c5973690ddc3eb1c1a71e5767f1f714cd73a
  );
}

export default ListaDeAtacantes
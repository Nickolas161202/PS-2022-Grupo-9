import React from 'react';
import Atacantes from './Atacantes';

const ListaDeAtacantes = () => {
  return (
    <ul>
      { Atacantes.map( (Atacantes) => <li>{ Atacantes }</li>) }
    </ul>
  );
}

export default ListaDeAtacantes
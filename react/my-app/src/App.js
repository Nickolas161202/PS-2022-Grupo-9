import React from 'react';
import navbar from './navbar';

// Não sei bem se é para ser um "component" para cada parte do site, ou um para tudo que vai estar no html. Nesse caso eu botei como se fosse só para a navbar.
function App() {
  return (
    <>
      <navbar />
      <input type="text" />
    </>
  )
}

export default App;
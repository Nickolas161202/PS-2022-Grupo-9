// import React from 'react';
// import Navbar from './Navbar';

//  Não sei bem se é para ser um "component" para cada parte do site, ou um para tudo que vai estar no html. !!!!!!!!!!!!!!!!!!!!!!
// Nesse caso eu botei como se fosse só para a Navbar. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function App() {
//   return (
//     <>
//       <Navbar />
//       <input type="text" />
//     </>
//   );
// }

// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Navbar from './Navbar';

// function App() {
//   return <h1>Hello World!</h1>;
// }

// export default App;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Navbar />);

import React from 'react';
// import ReactDOM from 'react-dom/client';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import PlayerBlue from './components/common/PlayerBlue';
import Attackers from './screens/Attackers';

function App() {
  return (
    <>
      <Navbar />
  
      <Attackers/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Navbar />);
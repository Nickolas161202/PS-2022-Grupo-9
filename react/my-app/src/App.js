// import React from 'react';
// import Navbar from './Navbar';

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
import Footer from './components/common/footer/Footer';
import PlayerBlue from './components/common/PlayerBlue';
import Atacantes from './screens/Atacantes';

function App() {
  return (
    <>
      <Navbar />
      
      <Atacantes/>
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
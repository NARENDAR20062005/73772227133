// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Redirect from './pages/Redirect';
// import Navbar from './components/Navbar';

// const App = () => (
//   <>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/:shortcode" element={<Redirect />} />
//     </Routes>
//   </>
// );

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Redirect from './pages/Redirect';

const App = () => {
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:shortcode" element={<Redirect />} />
      </Routes>
    </>
  );
};

export default App;



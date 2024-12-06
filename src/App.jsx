import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Solutins from './components/Solutions';
import Connect from './components/Connect';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Home />
        </div>
        <div>
          <About/>
          <Solutins/>
          <Connect/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
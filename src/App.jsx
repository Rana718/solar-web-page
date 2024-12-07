import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Solutins from './components/Solutions';
import Connect from './components/Connect';
import { Suspense } from 'react';
import Loading from './components/Loading';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <div>
            <Home />
            <About />
            <Solutins />
            <Connect />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
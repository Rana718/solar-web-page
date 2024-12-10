import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Solutins from './components/Solutions';
import Connect from './components/Connect';
import { Suspense } from 'react';
import Loading from './components/Loading';
import Live_data from './components/Live_data';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={
              <div>
                <Home />
                <About />
                <Solutins />
                <Connect />
              </div>
            }/>

            <Route path='/live_data' element={<Live_data/>}/>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
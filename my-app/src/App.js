import React from 'react';
import './index.css';
import Home from './routes/Home';
import Dictionary from './routes/Dictionary';
import Calculator from './routes/Calculator';
import Explore from './routes/Explore';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/dictionary' element={<Dictionary />} />
    <Route path='/calculator' element={<Calculator />} />
    <Route path='/explore' element={<Explore />} />
    </Routes>
    </>
  );
}

export default App;

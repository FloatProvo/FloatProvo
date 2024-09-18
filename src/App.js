import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Floats from './components/Floats';
import Freezes from './components/Freezes';
import Sodas from './components/Sodas';
import Energy from './components/Energy';
import Waters from './components/Waters';
import Treats from './components/Treats';
import HotChocolate from './components/HotChocolate';
import Catering from './components/Catering';
import Fullmenu from './components/Fullmenu';
import RootBeer from './components/RootBeer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/floats" element={<Floats />} />
          <Route path="/freezes" element={<Freezes />} />
          <Route path="/sodas" element={<Sodas />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/waters" element={<Waters />} />
          <Route path="/treats" element={<Treats />} />
          <Route path="/hot-chocolate" element={<HotChocolate />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/full-menu" element={<Fullmenu />} />
          <Route path="/rootbeer" element={<RootBeer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

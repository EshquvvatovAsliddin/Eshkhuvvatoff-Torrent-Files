import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Games from './pages/Games';
import Header from './components/Header';
import Footers from './components/Footer';
import Contact from './components/Contact';
import Datas from './components/datagta';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/dowloaddata" element={<Datas />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footers />
    </>
  );
}

export default App;
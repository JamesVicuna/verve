import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
   <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
      <Footer />
   </div>
  );
  
}

export default App;

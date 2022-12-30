import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
   <div className='App'>
      <Header />
      <Footer />
   </div>
  );
  
}

export default App;

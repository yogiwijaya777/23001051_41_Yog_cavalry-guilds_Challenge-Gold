import './App.css';
import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TopDeck from './components/TopDeck';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/topdeck' element={<TopDeck/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

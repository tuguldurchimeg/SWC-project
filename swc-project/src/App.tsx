import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import './styles/App.css'
import Home from './Home'
import Restaurant from './Restaurant';
import Result from './Result';
import Saved from './Saved';
import Login from './Login';
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/Restaurant" element={<Restaurant/>}/>
          <Route path="/Result" element={<Result/>}/>
          <Route path="/Saved" element={<Saved/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>     
  )
}

export default App

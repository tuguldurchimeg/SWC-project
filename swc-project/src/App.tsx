import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import './styles/App.css'
import Home from './Home'
import Restaurant from './Restaurant';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/Restaurant" element={<Restaurant/>}/>
        </Routes>
        <Footer/>
      </Router>

    </>
    
      
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import './styles/App.css'
import Home from './Home'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={<Home/>}/>

      </Routes>
    </Router>
      
      
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import './styles/App.css'
import Home from './Home'
import Place from './Place';
import Result from './Result';
import Saved from './Saved';
import Login from './Login';
import Register from './Register';
import AuthProvider from './AuthProvider';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route element={<PrivateRoute />}>
              <Route path="/Home" element={<Home/>}/>
            </Route>
            <Route path="/Place/:p_id" element={<Place/>}/>
            <Route path="/Result" element={<Result/>}/>
            <Route path="/Saved" element={<Saved/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </>     
  )
}

export default App

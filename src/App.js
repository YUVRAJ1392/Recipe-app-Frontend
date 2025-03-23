import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'



const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/*Redirect to login if user is not logged in*/}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

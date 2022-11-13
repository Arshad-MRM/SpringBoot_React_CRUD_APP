import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Add from './pages/user/Add';
import Edit from './pages/user/Edit';
import Users from './pages/user/Users';
import React from 'react'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/home" exact element={<Home/>} />
        <Route path="/employeebyId/:id" exact element={<Users />} />
        <Route path="/addemployee" exact element={<Add />} />
        <Route path="/update/:id" exact element={<Edit />} />
        </Routes>
    </div>
  );
}

export default App;

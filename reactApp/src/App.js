import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from './createUser';
import Login from './login';
import UserDetails from './userDetails';
import { useNavigate } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<CreateUser />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/details" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

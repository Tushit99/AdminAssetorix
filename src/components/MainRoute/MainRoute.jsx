import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../page/Home/Home';
import AdminPage from '../../page/AdminPage/AdminPage'; 
import UserPage from '../../page/UserPage/UserPage';
import Property from '../../page/Property/Property';

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />  
            <Route path='/admin' element={<AdminPage />} /> 
            <Route path='/user' element={<UserPage />} />   
            <Route path='/property' element={<Property />} /> 
        </Routes>
    </div>
  )
}

export default MainRoute; 


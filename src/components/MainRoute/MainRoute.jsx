import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../page/Home/Home';
import AdminPage from '../../page/AdminPage/AdminPage'; 
import UserPage from '../../page/UserPage/UserPage';
import Property from '../../page/Property/Property';
import SellForm from '../../page/PropertyPostForm/SellForm';

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />  
            <Route path='/admin' element={<AdminPage />} /> 
            <Route path='/user' element={<UserPage />} />   
            <Route path='/property' element={<Property />} />  
            <Route path='/Postproperty' element={<SellForm />} />

            <Route path='*' element={<> PageNot exist </>} />

        </Routes>
    </div>
  )
}

export default MainRoute; 


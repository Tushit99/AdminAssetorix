import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../../page/AdminPage/AdminPage';
import UserPage from '../../page/UserPage/UserPage';
import Property from '../../page/Property/Property';
import SellForm from '../../page/PropertyPostForm/SellForm';
import Login from '../CheckExist/LoginSignin/Login/Login';
import UserSelect from '../CheckExist/UserSelect';
import Signup from '../CheckExist/LoginSignin/Signup/Signup';
import ErrorPage from '../../page/Error/Error';
import Home from '../../page/Home/Home';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PropertyApproval from '../../page/PropertyApproval/PropertyApproval';
import ResidentialBuy from '../../page/Property/PropertyPages/ResidentialBuy';
import ResidentialRent from '../../page/Property/PropertyPages/ResidentialRent';
import CommercialBuy from '../../page/Property/PropertyPages/CommercialBuy';
import CommercialRent from '../../page/Property/PropertyPages/CommercialRent';

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <PrivateRoute> 
            <Home />
          </PrivateRoute>
        } />
        <Route path='/panel' element={<UserSelect />} />
        <Route path='/admin' element={
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        } />
        <Route path='/user' element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        } />
        <Route path='/property' element={
          <PrivateRoute>
            <Property />
          </PrivateRoute>
        } />

        <Route path="/residential_Buy" element={
          <PrivateRoute>
            <ResidentialBuy />
          </PrivateRoute>
        } /> 

        <Route path='/residential_Rent' element={
          <PrivateRoute>
            <ResidentialRent />
          </PrivateRoute>
        } />

        <Route path='/commercial_Buy' element={
          <PrivateRoute> 
            <CommercialBuy />
          </PrivateRoute>
        } />

        <Route path='/commercial_Rent' element={
          <PrivateRoute>
            <CommercialRent />
          </PrivateRoute>
        } /> 

        <Route path='/Postproperty' element={
          <PrivateRoute>
            <SellForm />
          </PrivateRoute>
        } />


        <Route path='/propertyApproval' element={<PropertyApproval />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default MainRoute;


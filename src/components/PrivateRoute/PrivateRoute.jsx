import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const userdetail = useSelector((state) => state.admindetail);
    const navigate = useNavigate();
    const location = useLocation();


    if (userdetail.id == "" || userdetail.role == "") {
        console.log(location, userdetail); 
        navigate("/login", { state: { locationDetail: location } });
    }  
    else {
        return children
    } 

}

export default PrivateRoute; 

import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const userdetail = useSelector((state) => state.admindetail);
    const navigate = useNavigate(); 

    if (userdetail.id == "" || userdetail.role == "") {
        navigate("/panel"); 
    }
    else {
        return children
    }

}

export default PrivateRoute; 

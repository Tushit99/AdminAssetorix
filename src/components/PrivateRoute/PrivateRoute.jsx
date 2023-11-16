import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const userdetail = useSelector((state) => state.admindetail);
    const navigate = useNavigate(); 

    console.log(userdetail,); 

    if (userdetail.id) {  
        return navigate("/panel"); 
    }
    else {
        return children
    }

}

export default PrivateRoute; 

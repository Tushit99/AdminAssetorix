import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const userdetail = useSelector((state) => state.admindetail);
    const navigate = useNavigate(); 

    console.log(userdetail); 

    if (userdetail.token.length==0) {  
        return navigate("/panel"); 
    }
    else {
        return children 
    }

}

export default PrivateRoute; 

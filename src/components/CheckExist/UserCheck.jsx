import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './LoginSignin/Login/Login';
import SignupAdmin from './LoginSignin/Signup/Signup';
import UserSelect from './UserSelect';
import { Box } from '@chakra-ui/react';

const UserCheck = () => {
    return (
        <Box>
            <Routes> 
                <Route path='/' element={<UserSelect />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignupAdmin />} />
            </Routes>
        </Box>

    )
}

export default UserCheck;



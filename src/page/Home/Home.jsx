import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { adminPrelogin } from '../../redux/admin/action';

const Home = () => {
  const userdetail = useSelector((state) => state.admindetail);  
  const dispatch = useDispatch();  
  const navigate = useNavigate(); 

  useEffect(() => {
    let id = localStorage.getItem("astadid") || undefined ;
    let token = localStorage.getItem("astadToken") || undefined ;

    let obj = {
      id,
      authorization: token,
    };
    
    console.log(id, token); 

    if (id && token) {  
      console.log("skjvnsjn", id, token);  
      dispatch(adminPrelogin(obj));
    }  
    else{
      navigate("/panel"); 
    }
  }, [])
  
  useEffect(() => {
    console.log(userdetail); 
  },[userdetail]); 
  


  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} minHeight={"100vh"} w={"100%"} >
      <Heading size={"xl"} > Welcome to Assetorix Admin Panel </Heading>
    </Box>
  ) 
}

export default Home; 

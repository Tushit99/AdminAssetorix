import { Avatar, Box, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const UserDetailInfo = ({backgroundcolor}) => {
  const userdetail = useSelector((state) => state.admindetail);  
  const [userinfo, setUserInfo] = useState({}); 

  const fetchMydata = async()=>{
    try {
      let obj = {
        id: userdetail.id, 
        authorization: userdetail.token, 
      }

      await axios.get(`${process.env.REACT_APP_URL}/admin/`,{headers: obj}).then((e)=>{
        setUserInfo(e.data);   
      })
    } catch (err) {
      console.log(err); 
    }
  }

  useEffect(()=>{
    fetchMydata(); 
  },[]);

  return (
    <Box position={"fixed"} right={"6px"} background={"linear-gradient(to right, #C04848 , #630063)"} top={"2px"} display={"flex"} alignItems={"center"} gap={1} borderRadius={30} padding={"5px 10px"} border={`2px solid ${backgroundcolor == "light" ? "black" : "rgb(210, 171, 102)"}`} >
      <Avatar size='sm' border={"1px solid white"} boxShadow={"rgba(255, 255, 255, 0.505) 0px 1px 7px 0px"} name={userinfo.name} src={userinfo.avatar} /> 
      <Text textColor={backgroundcolor == "light" ? "white" : "rgb(210, 171, 102)"}> {userinfo.name} </Text>
    </Box>
  ) 
}

export default UserDetailInfo; 

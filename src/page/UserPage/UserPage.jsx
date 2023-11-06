import { Avatar, Box, Heading, Select, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from "./User.module.css";
import UserDetail from './UserDetail/UserDetail';

const UserPage = () => {
  const [data, setData] = useState([]);


  const firstCall = async () => {
    try {
      let id = localStorage.getItem("astadid");
      let token = localStorage.getItem("astadToken");

      let obj = {
        id,
        authorization: token,
        'Content-Type': 'application/json',
      };

      await axios.get(`${process.env.REACT_APP_URL}/admin/all?role=customer`, { headers: obj }).then((e) => {
        console.log(e.data.data);
        setData(e.data.data);
        setBlock(e.data.data.isBlocked);
        setVerifie(e.data.data.isVerified);
      })
    } catch (err) {
      console.log(err);
    }
  }

  const handleBlockChange = async (userId, statement) => {
    try {
      let id = localStorage.getItem("astadid");
      let token = localStorage.getItem("astadToken");

      let obj = {
        id,
        authorization: token,
        'Content-Type': 'application/json',
      };

      const body = {
        id: userId,
        status: statement
      }

      console.log(statement);

      await axios.post(`${process.env.REACT_APP_URL}/admin/block`, body, { headers: obj }).then((e) => {
        console.log(e);
        firstCall();
      })
    } catch (err) {
      console.log(err);
    }
  }

  const handleVerifieChange = async (userId, validstate) => {
    try {
      let id = localStorage.getItem("astadid");
      let token = localStorage.getItem("astadToken");

      let obj = {
        id,
        authorization: token,
        'Content-Type': 'application/json',
      };

      let body = {
        id: userId,
        status: validstate
      }

      await axios.post(`${process.env.REACT_APP_URL}/admin/verifyUser`, body, { headers: obj }).then((e) => {
        console.log(e);
        firstCall();
      }); 
    } catch (err) {
      console.log(err);
    }
  }
 
  useEffect(() => {
    firstCall();
  }, [])

  return (
    <Box display={"grid"} gap={6} margin={"20px auto "} >
      <Heading as={"h1"} size={"lg"}> User Detail </Heading>
      <Box gap={6} w={"96%"} margin={"auto"} className={style.userDetail} >
        {data?.map((e) => (
          <UserDetail e={e} key={e._id} handleBlockChange={handleBlockChange} handleVerifieChange={handleVerifieChange} />
        ))} 
      </Box>
    </Box>
  )
}


export default UserPage; 


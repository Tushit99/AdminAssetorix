import { Avatar, Box, Heading, Select, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from "./User.module.css";
import UserDetail from './UserDetail/UserDetail';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';

const UserPage = () => {
  const userdetail = useSelector((state) => state.admindetail); 
  const [data, setData] = useState([]);
  const [load, setLoading] = useState(false);

  const firstCall = async () => {
    try {
      // let id = localStorage.getItem("astadid");
      // let token = localStorage.getItem("astadToken");

      let obj = {
        id: userdetail.id, 
        authorization: userdetail.token, 
        'Content-Type': 'application/json',
      };
      setLoading(true);
      await axios.get(`${process.env.REACT_APP_URL}/admin/all?role=customer`, { headers: obj }).then((e) => {
        console.log(e.data.data);
        setData(e.data.data);
        // setBlock(e.data.data.isBlocked);
        // setVerifie(e.data.data.isVerified);
        setLoading(false);
      })
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

 

  useEffect(() => {
    firstCall();
  }, [])

  return (
    <>
      {load ? <Loader /> : (
        <Box display={"grid"} gap={6} margin={"20px auto "} >
          <Heading as={"h1"} size={"lg"}> User Detail </Heading>
          <Box gap={6} w={"96%"} margin={"auto"} className={style.userDetail} >
            {data?.map((e) => (
              <UserDetail e={e} key={e._id}  />
            ))}
          </Box>
        </Box>
      )}
    </>
  )
}


export default UserPage;


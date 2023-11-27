import { Avatar, Box, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from "./UserDetailinfo.module.css";
import { useNavigate } from 'react-router-dom';
import { adminLogout } from '../../redux/admin/action';

const UserDetailInfo = ({ backgroundcolor }) => {
  const userdetail = useSelector((state) => state.admindetail);
  const [userinfo, setUserInfo] = useState({});
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  const fetchMydata = async () => {
    try {
      let obj = {
        id: userdetail.id,
        authorization: userdetail.token,
      }

      await axios.get(`${process.env.REACT_APP_URL}/admin/`, { headers: obj }).then((e) => {
        setUserInfo(e.data);
      })
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMydata();
  }, []);

  const handlelogout = () => {
    localStorage.setItem("astadName",""); 
    localStorage.setItem("astadid",""); 
    localStorage.setItem("astadToken","");  

    dispatch(adminLogout); 
    window.location.reload();   

  }

  return (
    <Box
      position={"fixed"}
      top={1}
      right={-2}
      className={style.headbox}  >
      <Box className={style.topbox} border={`2px solid ${backgroundcolor == "light" ? "black" : "rgb(210, 171, 102)"}`} >
        <Avatar size='sm' border={"1px solid white"} boxShadow={"rgba(255, 255, 255, 0.505) 0px 1px 7px 0px"} name={userinfo.name} src={userinfo.avatar} />
        <Text className={style.text} textColor={backgroundcolor == "light" ? "white" : "rgb(210, 171, 102)"}> {userinfo?.name?.length > 0 && userinfo.name.split(" ").at(0)} </Text>
      </Box>
      <Box className={style.options} >
        <Box cursor={"pointer"} onClick={handlelogout} >Logout</Box>
      </Box> 
    </Box>
  )
}

export default UserDetailInfo; 

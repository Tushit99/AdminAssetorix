import { Box, Heading, Image, Tooltip } from '@chakra-ui/react';
import React from 'react'
import { BiSolidUserPlus } from 'react-icons/bi';
import { FaUserCog } from 'react-icons/fa';
import style from "./adm.module.css";
import { useNavigate } from 'react-router-dom';

const UserSelect = () => {
    const navigate = useNavigate();

    const handlePageSignup = () => {
        navigate("/signup")
    }

    const handlePageLogin = () => {
        navigate("/login");
    }

    return (
        <Box display={"flex"} className={style.headbox} minH={"100vh"} alignItems={"center"} justifyContent={"center"}>   
            <Image 
            src={"https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
            alt="nature image"  
            position={"fixed"} 
            top={0} 
            left={0}  
            right={0}
            bottom={0} 
            w={"100%"} 
            minHeight={"100vh"}
            zIndex={"-10"} />
            <Box display={"flex"} flexDirection={"column"} minH={"70vh"} textAlign={"center"} gap={"30px"} padding={"30px 70px"} borderRadius={24} backgroundColor={"rgba(255, 255, 255, 0.788)"} >
                <Heading size={"2xl"} textAlign={"center"} color={"rgb(40, 164, 252)"} textShadow={"0 0 4px rgb(255, 242, 0)"}> Assetorix Backend </Heading>
                <Box display={"flex"} gap={"60px"} alignItems={"center"} justifyContent={"center"} >
                    <Tooltip label="Sigin up" >
                        <Box onClick={handlePageSignup} cursor={"pointer"} className={`${style.slideInLeft} ${style.inleft}`} padding={"20px 40px"} borderRadius={"20px"} >
                            <BiSolidUserPlus size={"100px"} />
                            <Heading size={"md"} > Sign Up </Heading>
                        </Box>
                    </Tooltip> 
                    <Tooltip label="Login">
                        <Box onClick={handlePageLogin} cursor={"pointer"} className={`${style.slideInRight} ${style.inright}`} padding={"20px 40px"} borderRadius={"20px"} >
                            <FaUserCog size={"100px"} />
                            <Heading size={"md"} > Login </Heading>
                        </Box>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default UserSelect;


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
        <Box display={"flex"} minH={"100vh"} alignItems={"center"} justifyContent={"center"}>
            <Box display={"grid"} textAlign={"center"} gap={"20px"} >
                <Heading size={"xl"} textAlign={"center"}> Assetorix Backend </Heading>
                <Box display={"flex"} gap={"60px"} alignItems={"center"} justifyContent={"center"} >
                    <Tooltip label="Sigin up" >
                        <Box onClick={handlePageSignup} cursor={"pointer"} className={`${style.slideInLeft} ${style.inleft}`} padding={"20px 40px"} borderRadius={"20px"} >
                            <BiSolidUserPlus size={"80px"} />
                            <Heading size={"md"} > Sign Up </Heading>
                        </Box>
                    </Tooltip>
                    <Tooltip label="Login">
                        <Box onClick={handlePageLogin} cursor={"pointer"} className={`${style.slideInRight} ${style.inright}`} padding={"20px 40px"} borderRadius={"20px"} >
                            <FaUserCog size={"80px"} />
                            <Heading size={"md"} > Login </Heading>
                        </Box>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default UserSelect;


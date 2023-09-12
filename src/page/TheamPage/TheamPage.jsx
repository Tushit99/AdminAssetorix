import { Box, Button } from "@chakra-ui/react";
import React from "react";
import {GiNightSleep} from "react-icons/gi"; 
import {BsFillSunFill} from "react-icons/bs"; 

const TheamPage = ({ backgroundcolor, handlechange }) => {
    return (
        <Box
            onClick={handlechange}
            borderRadius={"20px"}
            position={"fixed"}
            w={"52px"}
            h={"34px"}
            cursor={"pointer"}
            padding={"2px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={backgroundcolor == "light" ? "left" : "right"}
            //   border={"2px solid black"} 
            backgroundColor={"rgb(183, 183, 183)"} 
            bottom={"20px"}
            left={"5px"}
        >
            <button className={`theam_btn ${backgroundcolor == "light" ? "dark" : "light"}`}>{backgroundcolor == "light" ? <BsFillSunFill /> : <GiNightSleep />}</button>
        </Box>
    );
};

export default TheamPage;

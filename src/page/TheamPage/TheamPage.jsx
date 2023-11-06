import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {GiNightSleep} from "react-icons/gi"; 
import {BsFillSunFill} from "react-icons/bs"; 

const TheamPage = ({ backgroundcolor, handlechange }) => {
    const [justifyContent, setJustifyContent] = useState("left-justified"); 
    
    useEffect(()=>{
        setJustifyContent(backgroundcolor === "light" ? "leftjustified" :"rightjustified"); 
    },[backgroundcolor])

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
            className={`smother ${justifyContent}`} 
            backgroundColor={"rgb(183, 183, 183)"} 
            bottom={"20px"}
            left={"5px"} 
        >
            <button className={`theam_btn ${backgroundcolor == "light" ? "darkbt" : "lightbt"}`}>{backgroundcolor == "light" ? <BsFillSunFill /> : <GiNightSleep />}</button>
        </Box>
    );
};

export default TheamPage;

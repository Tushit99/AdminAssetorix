import React from 'react';
import style from "./Navbar.module.css";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { BsFillInboxesFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { Box, Button, Heading } from '@chakra-ui/react';


const Navbar = ({ handleToggle, toggle,backgroundcolor }) => {

  return (
    <div className={style.nav_Head}>
      <div className={style.comp_name}>
        <Heading as={"h2"} fontSize={"x-large"}> 
          {toggle ? "A" : "Assetorix"}  
        </Heading> 
      </div>
      <div> 
        <div className={style.page_links}>
          <Box> 
            <Link to={"/"}> <FaHome size={"20px"} /> </Link>
            <Link style={{ display: `${toggle ? "none" : "block"}`, fontSize:"15px"}} to={"/"} > Dasboard </Link>
          </Box> 
          <Box>
            <Link to={"/property"}> <BsFillInboxesFill size={"20px"} /> </Link>
            <Link style={{ display: `${toggle ? "none" : "block"}`, fontSize:"15px"}} to={"/property"} > Property </Link>
          </Box>
          <Box> 
            <Link to={"/user"}> <FaUserAlt size={"20px"} /> </Link>
            <Link style={{ display: `${toggle ? "none" : "block"}`, fontSize:"15px"}} to={"/user"} > User </Link>
          </Box>
          <Box>
            <Link to={"/admin"}> <RiAdminFill size={"20px"} /> </Link>
            <Link style={{ display: `${toggle ? "none" : "block"}`, fontSize:"15px"}} to={"/admin"} > Admin </Link>
          </Box>
        </div>
      </div>
      {/* opening and closing button */}
      <div>
        <Button variant={"unstyled"} className={style.closer_button} border={"2px solid rgb(215, 215, 215)"} backgroundColor={`${backgroundcolor=="dark" ? "rgb(18, 25, 38)" : "white"}`} onClick={handleToggle}> 
          {toggle ? <MdKeyboardDoubleArrowRight size={"24px"} /> : <MdKeyboardDoubleArrowLeft size={"24px"} />} 
        </Button>
      </div>
    </div>
  )
}

export default Navbar;



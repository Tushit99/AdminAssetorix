import React, { useState } from 'react';
import style from "./Navbar.module.css";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { BsFillInboxesFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { Heading, border } from '@chakra-ui/react';


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
          <div> 
            <Link to={"/"}> <FaHome size={"20px"} /> </Link>
            <Link style={{ display: `${toggle ? "none" : "block"}` }} to={"/"} > Home </Link>
          </div> 
          <div>
            <Link to={"/property"}> <BsFillInboxesFill size={"20px"} /> </Link>
            <Link style={{ display: `${toggle ? "none" : "block"}` }} to={"/property"} > Property </Link>
          </div>
          <div> 
            <Link to={"/user"}> <FaUserAlt size={"20px"} /> </Link>
            <Link style={{ display: `${toggle ? "none" : "block"}` }} to={"/user"} > User </Link>
          </div>
          <div>
            <Link to={"/admin"}> <RiAdminFill size={"20px"} /> </Link>
            <Link style={{ display: `${toggle ? "none" : "block"}` }} to={"/admin"} > Admin </Link>
          </div>
        </div>
      </div>
      {/* opening and closing button */}
      <div>
        <button className={style.closer_button} style={{border:`2px solid ${backgroundcolor=="dark" ? "blue" : "white"}`}} onClick={handleToggle}>
          {toggle ? <MdKeyboardDoubleArrowRight size={"24px"} color={'white'} /> : <MdKeyboardDoubleArrowLeft size={"24px"} color={'white'} />}
        </button>
      </div>
    </div>
  )
}

export default Navbar;



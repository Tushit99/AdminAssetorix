import { Avatar, Box, Heading, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';  
import style from "../User.module.css"; 

const UserDetail = ({e, handleVerifieChange, handleBlockChange}) => {
    const [isblock, setBlock] = useState(false); 
    const [verifie, setVerifie] = useState(false);  

    const handleBlock = (id,e)=>{ 
        let val = e.target.value;  
        handleBlockChange(id,val);  
    }

    const handleVerifie = (id,e)=>{ 
        let val = e.target.value;  
        handleVerifieChange(id,val);  
    }

    useEffect(()=>{
        setBlock(e.isBlocked); 
        setVerifie(e.isVerified);  
    },[]);  

    return (
        <Box textAlign={"left"} className={style.fullbox} > 
            <Avatar name={e.name} boxSize={"100%"} height={"200px"} borderRadius={2} src={e.avatar} />
            <Heading as={"h4"} size={"md"} textAlign={"center"}> {e.name} </Heading>
            <Text> <span>Listing:</span>  {e.listings} </Text>
            <Box display={"flex"} alignItems={"center"} marginBottom={2} >
                <Text width={"50%"} fontWeight={700}>Blocked:</Text>
                <Select variant='outline' onChange={(a)=>handleBlock(e._id,a)} value={isblock} >
                    <option value={true}> True </option>
                    <option value={false}> False </option>
                </Select> 
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"} >
                <Text width={"50%"} fontWeight={700}>Verified:</Text>
                <Select variant='outline' value={verifie} onChange={(a)=>handleVerifie(e._id,a)} >
                    <option value={true}> True </option>
                    <option value={false}> False </option>
                </Select>
            </Box>
        </Box>
    )
}

export default UserDetail;



import React from 'react'
import style from "../Propertystate.module.css";
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';


const Boxdet = ({ e, handleChangeState, disabled }) => {

  return (
    <Box as={"div"} >
      {e?.images && <Image src={e?.images[0]?.URL} alt="images" />}
      <Heading fontSize={"md"}> {e.address.locality} </Heading>
      <Box marginTop={1} display={"flex"} alignItems={"flex-start"} justifyContent={"space-between"} >
        <Box display={"grid"} gap={1}>
          <Text> City: {e.address.city} </Text>
          <Text> State: {e.address.state} </Text>
          <Text> Country: {e.address.country} </Text>
        </Box>
        <Box display={"grid"} gap={2}>
          {disabled == "Blocked" ? <>
            <Button
              borderRadius={3}
              colorScheme='orange'
              variant={"outline"} 
              _hover={{backgroundColor:"orange", color:"white"}}
              onClick={() => handleChangeState(e._id, "Pending")} 
              > Pending </Button> </> :
            <Button
              onClick={() => handleChangeState(e._id, "Blocked")}
              variant={"outline"}
              colorScheme='black'
              borderRadius={3}
              _hover={{ backgroundColor: "black", color: "white" }}
            >Block</Button>
          }
          {disabled == "Sold" ? <>
            <Button
              borderRadius={3}
              colorScheme='orange'
              onClick={() => handleChangeState(e._id, "Pending")}
              variant={"outline"} 
              > Pending </Button> </> :
            <Button
              onClick={() => handleChangeState(e._id, "Sold")}
              variant={"outline"}
              colorScheme='blue'
              borderRadius={3}
              _hover={{ backgroundColor: "rgb(0, 183, 255)", color: "white" }}
            > Sold </Button>
          }
        </Box>
      </Box>
      <Box w={"100%"} display={"flex"} gap={2} marginTop={3}>
        {disabled == "Rejected" ? <>
          <Button
            borderRadius={3}
            colorScheme='orange'
            flex={1}
            onClick={() => handleChangeState(e._id, "Pending")}
            backgroundColor={"rgb(225, 142, 7)"}
            color={"white"}> Pending </Button> </> :
          <Button
            onClick={() => handleChangeState(e._id, "Rejected")}
            flex={1}
            colorScheme='red'
            backgroundColor={"rgb(255, 0, 0)"}
            color={"white"}
            borderRadius={3} > Reject </Button>
        }
        {disabled == "Approved" ? <>
          <Button
            borderRadius={3}
            colorScheme='orange'
            flex={1}
            onClick={() => handleChangeState(e._id, "Pending")}
            backgroundColor={"rgb(225, 142, 7)"}
            color={"white"}> Pending </Button> </> :
          <Button
            onClick={() => handleChangeState(e._id, "Approved")}
            flex={1}
            colorScheme='green'
            backgroundColor={"rgb(78, 202, 1)"}
            color={"white"}
            borderRadius={3} > Approve </Button>
        }
      </Box>
    </Box>
  )
}

export default Boxdet;


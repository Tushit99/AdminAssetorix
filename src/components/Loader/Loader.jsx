import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import GridLoader from "react-spinners/GridLoader";


const Loader = () => {
    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} minH={"100vh"} >
            <Box display={"grid"} gap={4}>
                <GridLoader size={35} color="#36d7b7" />
                <Text alignItems={"center"} fontSize={"large"}> Loading... </Text>
            </Box>
        </Box> 
    )
}

export default Loader;


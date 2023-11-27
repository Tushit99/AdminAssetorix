import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import Pending from './Pending/Pending';
import Approved from './Approved/Approved';
import Rejected from './Rejected/Rejected';
import Blocked from './Blocked/Blocked';
import Sold from './Sold/Sold';
import GridLoader from "react-spinners/GridLoader";


const PropertyApproval = () => {
    const [datachange, setDataChange] = useState(false);
    const [loader, setLoader] = useState(false); 

    return (
        <Box position={"relative"}> 
            <Box>
                <Box display={"flex"} marginTop={4} alignItems={"center"} justifyContent={"space-around"}> 
                    <Heading as={"h2"} size={"lg"}> Property Approval </Heading>
                </Box>
                <Tabs marginTop={6} variant='enclosed' borderRadius={0} onChange={() => setDataChange(!datachange)}>
                    <TabList display={"flex"} alignItems={"center"} justifyContent={"space-around"} >
                        <Tab color={"auto"} _selected={{ backgroundColor: "rgb(225, 142, 7)", color: "white" }} borderRadius={0} padding={"6px 20px"} > Pending </Tab>
                        <Tab color={"auto"} _selected={{ backgroundColor: "rgb(78, 202, 1)", color: "white" }} borderRadius={0} padding={"6px 20px"} > Approved </Tab>
                        <Tab color={"auto"} _selected={{ backgroundColor: "rgb(255, 0, 0)", color: "white" }} borderRadius={0} padding={"6px 20px"} > Rejected </Tab>
                        <Tab color={"auto"} _selected={{ backgroundColor: "rgb(1,1,1)", color: "white" }} borderRadius={0} padding={"6px 20px"} > Blocked </Tab>
                        <Tab color={"auto"} _selected={{ backgroundColor: "rgb(0, 183, 255)", color: "white" }} borderRadius={0} padding={"6px 20px"} > Sold </Tab>
                    </TabList>
                    <TabPanels maxWidth={"100%"}> 
                        <TabPanel maxWidth={"100%"}>
                            <Pending datachange={datachange} setLoader={setLoader} />
                        </TabPanel>
                        <TabPanel maxWidth={"100%"}>
                            <Approved datachange={datachange} setLoader={setLoader} />
                        </TabPanel>
                        <TabPanel maxWidth={"100%"}>
                            <Rejected datachange={datachange} setLoader={setLoader} />
                        </TabPanel>
                        <TabPanel maxWidth={"100%"}>
                            <Blocked datachange={datachange} setLoader={setLoader} />
                        </TabPanel>
                        <TabPanel maxWidth={"100%"}>
                            <Sold datachange={datachange} setLoader={setLoader} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            <Box
                position={"fixed"}
                display={loader ? "flex":"none"}
                alignItems={"center"}
                maxH={"100vh"}
                justifyContent={"center"}
                top={0}
                left={0}
                right={0}
                zIndex={"10"}
                backgroundColor={"rgba(255, 255, 255, 0.432)"}
                bottom={0}
                width={"100%"} >
                <Box display={"grid"} gap={4} backgroundColor={"rgba(255, 255, 255, 0.817)"} padding={"10px"}>
                    <GridLoader size={35} color="#36d7b7" />
                    <Text  alignItems={"center"} fontSize={"large"}> Loading... </Text>
                </Box>
            </Box> 
        </Box>
    )
}

export default PropertyApproval;



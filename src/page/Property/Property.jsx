import { Box, Heading, Select, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ResidentialBuy from './PropertyPages/ResidentialBuy';
import ResidentialRent from './PropertyPages/ResidentialRent';
import CommercialBuy from './PropertyPages/CommercialBuy';
import CommercialRent from './PropertyPages/CommercialRent';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Property = () => {
  const [showPage, setShowPage] = useState("");

  return (
    <Box padding={"20px 0"} w={"98%"} margin={"auto"} >
      <Heading size={"lg"}> Property Posted </Heading>
      <Box margin={"40px auto"} display={"flex"} alignItems={"center"} justifyContent={"space-around"} >
        <Link to={"/residential_Buy"} > residential Buy </Link>
        <Link to={"/residential_Rent"} > residential Rent </Link>
        <Link to={"/commercial_Buy"} > commercial Buy </Link>
        <Link to={"/commercial_Rent"} > commercial Rent </Link>
      </Box>
    </Box>
  )
}

export default Property;


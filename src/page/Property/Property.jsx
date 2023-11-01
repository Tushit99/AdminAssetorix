import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ResidentialBuy from './PropertyPages/ResidentialBuy';
import ResidentialRent from './PropertyPages/ResidentialRent';
import CommercialBuy from './PropertyPages/CommercialBuy';
import CommercialRent from './PropertyPages/CommercialRent';


const Property = () => {

  return (
    <Box padding={"20px 0"} w={"98%"} margin={"auto"} >
      <Heading size={"lg"}> Property Posted </Heading>
      <Box margin={"40px auto"}>
        <Tabs isFitted variant='enclosed'>
          <TabList>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }}> Residential Buy </Tab>
            <Tab _selected={{ color: 'white', bg: 'green.400' }}> Residential Rent </Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }}> Commercial Buy </Tab>
            <Tab _selected={{ color: 'white', bg: 'green.400' }}> Commercial Rent </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <ResidentialBuy />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <ResidentialRent />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <CommercialBuy />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <CommercialRent />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

export default Property;


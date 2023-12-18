import React from 'react'
import { Container,Box,Text,TabList,Tab,TabPanel,TabPanels,Tabs} from '@chakra-ui/react'
import Tweets from './Tweets'
import AllUsers from './AllUsers'

function Maincontainer() {
  return (
    <div className='tweetarea'>
     <Container maxW="xxl" >
    <Box
      d="flex"
      p={3}
      bg="white"
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
    >
      <Text fontSize="4xl" fontFamily="Work sans"  display={"flex"} alignItems={"center"} justifyContent={"center"}>
       COLLEGE BLOGS
      </Text>
    
      </Box>
    
      <Box backgroundColor={"white"} width={"100%"} borderRadius={"1g"} borderWidth={"1px"}>
      <Tabs variant='soft-rounded' colorScheme='pink' m={"2px"}>
  <TabList mb={"1em"}>
    <Tab width={"50%"}>FOR YOU</Tab>
    <Tab width={"50%"}>ALL USERS</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Tweets/>
    </TabPanel>
    <TabPanel>
   <AllUsers/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
     
  </Container>
  </div>
  )
}

export default Maincontainer

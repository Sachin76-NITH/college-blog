import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';

function Logout() {
  const navigate = useNavigate();
 

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handlehome=()=>{
    navigate('/');
  }

 
  const storedToken = localStorage.getItem('token');
  if(storedToken){
    navigate("/logout");

  return (
    
    <Box h="100vh" w="100vw" display="flex" justifyContent="center" alignItems="center" bg="#f0f0f0">
      <Box p="6" bg="white" rounded="md" shadow="md" maxW="md" textAlign="center">
        <Heading mb="4">Logout</Heading>
        <Text fontSize="lg" mb="6">
          Are you sure you want to logout?
        </Text>
        <Button colorScheme="teal" mr="2" onClick={handleLogout}>
          Yes, Logout
        </Button>
        <Button colorScheme="teal" onClick={handlehome}>
          TAKE ME BACK
        </Button>
      </Box>
    </Box>
  );
}
else{
  navigate("/login");
}}

export default Logout;

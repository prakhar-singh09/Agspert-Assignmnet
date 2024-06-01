import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  

  
  const Login = () => {
    const [Username, setUsername] = useState("");
    const [password, setpassword] = useState("");
  
    let navigate = useNavigate();

    const user = {
      username: "dummy",
      password: "123456"
    };

    const handleSubmit = async (e) =>{
         e.preventDefault();
      if (Username === user.username) {
       
        if (password === user.password) {
           alert("User logged in")
           await window.localStorage.setItem("token", JSON.stringify("logged"));
           navigate('/home');
          }
        else 
          alert("wrong password");

      }

     else {
       alert("please check you username");
      }
    } 

    return (
      <Flex
        minH={'90vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={5} mx={'auto'} maxW={'lg'} py={10} px={8}>
        <Heading fontSize={'4xl'} align = {'center'} color={"tomato"}>Sale Order Management App</Heading>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log in</Heading>
            <Text fontSize={'lg'} color={'gray.500'}>
              to check about your sales <span style={{color:"Blue"}}>Orders</span> 💹
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
        <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired id="email">
                <FormLabel>Username</FormLabel>
                <Input
                 type="text"
                 required
                 value={Username}
                 onChange={(e) => setUsername(e.target.value)}
                 />
              </FormControl>

              <FormControl isRequired id="password">
                <FormLabel>Password</FormLabel>
                <Input
                 type="password" 
                 required
                 value={password}
                 onChange={(e) => setpassword(e.target.value)}
                 />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                </Stack>

                <Button type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Log in
                </Button>
              </Stack>
            </Stack>
            </form> 
          </Box>
        </Stack>
      </Flex>
    );
  }

  export default Login;
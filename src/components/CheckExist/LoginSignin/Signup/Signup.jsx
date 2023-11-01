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
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import style from "./Signup.module.css"
import { useState } from 'react'
import { AtSignIcon } from '@chakra-ui/icons'

export default function SimpleCard() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [pass, setPassword] = useState("");
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    const handlename = (e) => {
        let val = e.target.value;
        let clear = val.replace(/[^a-zA-Z ]/g, "").replace(/ +/g, ' ');
        setName(clear);
    }

    const handleNumber = (e) => {
        let val = e.target.value;
        let clear = val.replace(/[^0-9]/g, "");
        setNumber(clear);
    }

    const handlePass = (e) => {
        const password = e.target.value;
        setPassword(password);  
    }
     
    

    return (
        <Flex
            className={style.backimg}
            minH={'100vh'}
            justify={'center'}>
            <Stack flex={12} px={10} py={12} className={style.name}>
                <Heading size={"3xl"} > ASSETORIX <sup><AtSignIcon /></sup>  </Heading>
                <Heading size={"md"} > Admin World </Heading>
            </Stack>
            <Stack flex={11} backgroundColor={"rgba(255, 255, 255, 0.518)"} spacing={8} w={"100%"} mx={'auto'} py={4} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}> Sign Up </Heading>
                    <Text fontSize={'lg'} display={"flex"} gap={1} color={'gray.600'}>
                        to enjoy all of our cool <Text color={'blue.400'} cursor={"pointer"} _hover={{ textDecoration: "underline" }}>features</Text> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={"rgba(255, 255, 255, 0.9)"}
                    boxShadow={'lg'}
                    p={8}>
                    <form className={style.formbox}>
                        <FormControl >
                            <FormLabel> Enter Name</FormLabel>
                            <Input type="text" maxLength={40} value={name} onChange={handlename} />
                        </FormControl>
                        <FormControl >
                            <FormLabel> Mobile no. </FormLabel>
                            <Input type="text" maxLength={10} value={number} onChange={handleNumber} />
                        </FormControl>
                        <FormControl >
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    maxLength={24}
                                    value={pass}
                                    onChange={handlePass}
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={'blue.400'}>Forgot password?</Text>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    )
}
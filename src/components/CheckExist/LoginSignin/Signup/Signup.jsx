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
import { useEffect, useState } from 'react'
import { AtSignIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux';
import { adminPrelogin, userRegisterAdmin } from '../../../../redux/admin/action';

const Signup =()=>{
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [secretNo, setSecretNo] = useState("");
    const [pass, setPassword] = useState("");
    const [show, setShow] = useState(false); 
    const dispatch = useDispatch();  
    
    
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

    const handlesecretNumber = (e) => {
        let val = e.target.value;
        setSecretNo(val);
    }

    const handlePass = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const handleSubmit = async(e)=>{ 
        e.preventDefault(); 
        let obj = { 
            name, 
            mobile: number, 
            password: pass, 
            key: secretNo, 
        } 
        dispatch(userRegisterAdmin(obj));  
    }

    useEffect(() => {
        let id = localStorage.getItem("astadid");
        let token = localStorage.getItem("astadToken");

        let obj = {
            id,
            authorization: token,
        };

        if (id && token) {
            console.log("skjvnsjn", id, token);
            dispatch(adminPrelogin(obj));
        }
    }, [])

    // assetorix@ejajul

    return (
        <Flex
            className={style.backimg}
            minH={'100vh'}
            justify={'center'}>
            <Stack flex={1} px={10} py={12} className={style.name}>
                <Heading as={"h3"} size={"3xl"} > ASSETORIX <span><AtSignIcon /></span>  </Heading>
                <Heading as={"h3"} size={"md"} > Admin World </Heading>

                <Text fontSize={'lg'} color={"black"} display={"flex"} gap={1} >
                    Enjoy all of our cool <Text color={'blue.400'} cursor={"pointer"} _hover={{ textDecoration: "underline" }}> Admin Site</Text> ✌️
                </Text>
            </Stack>
            <Stack flex={1} backgroundColor={"rgba(255, 255, 255, 0.518)"} spacing={2} w={"100%"} mx={'auto'} py={4} px={6}>
                <Stack align={'center'}>
                    <Heading as={"h3"} fontSize={'4xl'}> Sign Up </Heading>
                </Stack> 
                <Box
                    rounded={'lg'}
                    bg={"rgba(255, 255, 255, 0.9)"}
                    boxShadow={'lg'}
                    p={8}>
                    <form className={style.formbox} onSubmit={handleSubmit}>
                        <FormControl >
                            <FormLabel> Enter Name</FormLabel>
                            <Input type="text" placeholder='Enter Name' maxLength={40} value={name} onChange={handlename} />
                        </FormControl>
                        <Box display={"flex"} gap={8}>
                            <FormControl flex={4}>
                                <FormLabel> Mobile no. </FormLabel>
                                <Input type="text" placeholder='Enter Number' maxLength={10} value={number} onChange={handleNumber} />
                            </FormControl>
                            <FormControl flex={6}>
                                <FormLabel> Secret key </FormLabel>
                                <Input type="text" placeholder='Enter Your Secret Key' maxLength={40} value={secretNo} onChange={handlesecretNumber} />
                            </FormControl>
                        </Box>
                        <FormControl>
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
                        <Stack spacing={4}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox> 
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'} 
                                type={"submit"} 
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


export default Signup; 

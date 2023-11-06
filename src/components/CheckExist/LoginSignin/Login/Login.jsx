import React, { useEffect } from 'react'
import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Box,
    InputGroup,
    InputRightElement,
    Tooltip,
} from '@chakra-ui/react'
import style from "./Login.module.css";
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { adminPrelogin, userLoinAdmin } from '../../../../redux/admin/action';

const Login = () => {
    const [numb, setNumb] = useState("");
    const [pass, setPass] = useState("");
    const [show, setShow] = useState(false);
    const [localSave, setLocalSave] = useState(false);
    const dispatch = useDispatch();

    const handlePassShow = () => {
        setShow(!show);
    }

    const handleNumberInput = (e) => {
        let val = e.target.value;
        let clear = val.replace(/[^0-9]/g, "");
        setNumb(clear);
    }

    const handleSave = () => {
        setLocalSave(!localSave);
    }

    const hansdleSubmitData = (e) => {
        e.preventDefault();
        let obj = {
            mobile: numb,
            password: pass,
        }
        dispatch(userLoinAdmin(obj));
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

    return (
        <Box>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex flex={5}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                        }
                    />
                </Flex>
                <Flex p={8} flex={4} align={'center'} justify={'center'} >
                    <form className={style.myFormBox} onSubmit={hansdleSubmitData}>
                        <Heading fontSize={'2xl'}>Login to your account</Heading>
                        <FormControl id="email">
                            <FormLabel> Mobile Number </FormLabel>
                            <Input maxLength={10} placeholder='Enter Mobile no.' type='text' onChange={handleNumberInput} value={numb} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    value={pass}
                                    maxLength={30}
                                    placeholder='Enter password'
                                    type={show ? 'text' : 'password'}
                                    onChange={(e) => setPass(e.target.value)}
                                />
                                <InputRightElement width='4rem'>
                                    <Tooltip label={show ? 'Hide' : 'Show'} aria-label='A tooltip'>
                                        <Button h='1.75rem' size='md' onClick={handlePassShow}>
                                            {show ? <ViewOffIcon /> : <ViewIcon />}
                                        </Button>
                                    </Tooltip>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox onChange={handleSave}>Remember me</Checkbox>
                                <Text color={'blue.500'} cursor={"pointer"}>Forgot password?</Text>
                            </Stack>
                            <Button type={"submit"} colorScheme={'blue'} variant={'solid'}>
                                Sign in
                            </Button>
                        </Stack>
                    </form>
                </Flex>
            </Stack>
        </Box>
    )
}

export default Login;


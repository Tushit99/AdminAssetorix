import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Avatar, Badge, Box, Button, Divider, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Select, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import style from "./Admin.module.css";
import axios from 'axios';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Block from './Block';


const AdminDetail = ({ e, handleVerifieChange }) => {
    const [role, setRole] = useState("");
    const [changeRole, setChangeRole] = useState("");
    const [userIsBlocked, setIsBlocked] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const [loading, setLoadiong] = useState(false);
    const [isblock, setBlock] = useState(false);
    const [verifie, setVerifie] = useState(false);
    // date
    const [createdOn, setCreatedOn] = useState('');
    const [lastUpDatedOn, setLastUpDatedOn] = useState('');
    const [lastLogIn, setLastLogIn] = useState('');
    // time
    const [createdTime, setCreatedTime] = useState('');
    const [lastUpDatedTime, setLastUpDatedTime] = useState('');
    const [lastLogTime, setLastLogTime] = useState('');
    // day
    const [createdDay, setCreatedDay] = useState("");
    const [upDatedDay, setUpDatedDay] = useState("");
    const [lastLogDay, setLastLogDay] = useState("");


    const accountdate = (convertdate) => {
        let d1 = convertdate.split(",")[1].split(" ");
        let date = d1[1];
        let month = d1[2].substring(0, 3);

        let d2 = convertdate.split(",")[2].split(" ");
        let year = d2[1];

        return `${date} ${month} ${year}`;
    }

    const accountday = (day) => {
        let d1 = day.split(",")[0].substring(0, 3).toLowerCase();
        return d1;
    }

    const acountTime = (convertdate) => {
        let d2 = convertdate.split(",")[2].split(" ");

        let time = d2[3].split(":");
        let at = d2[4];

        let finaltime = `${time[0]}:${time[1]}`

        return `${finaltime} ${at}`;

    }

    useEffect(() => {
        setCreatedOn(accountdate(e.createdOn));
        setLastUpDatedOn(accountdate(e.lastUpdated));
        setLastLogIn(accountdate(e.lastLogin));

        setCreatedTime(acountTime(e.createdOn));
        setLastUpDatedTime(acountTime(e.lastUpdated));
        setLastLogTime(acountTime(e.lastLogin));

        setCreatedDay(accountday(e.createdOn));
        setUpDatedDay(accountday(e.lastUpdated));
        setLastLogDay(accountday(e.lastLogin));

    }, [])

    const handleChangeRolefrom = (e) => {
        let val = e.target.value;
        setChangeRole(() => val);
        onOpen();
    }

    const handleRoleChange = async () => {
        setLoadiong(true);
        try {
            let id = localStorage.getItem("astadid");
            let token = localStorage.getItem("astadToken");

            let obj = {
                id,
                authorization: token,
                'Content-Type': 'application/json',
            };

            let body = {
                id: e._id,
                status: changeRole
            }
            setLoadiong(true);
            await axios.post(`${process.env.REACT_APP_URL}/admin/role`, body, { headers: obj }).then((e) => {
                console.log(e.data);
                setRole(changeRole);
                onClose();
                setLoadiong(false);
            })
        } catch (err) {
            console.log(err);
            onClose();
            setLoadiong(false);
        }
        setLoadiong(false);
    }

    // User Verifie code 
    const handleVerifie = (id, e) => {
        let val = e.target.value;
        handleVerifieChange(id, val);
    }

    useEffect(() => {
        setBlock(e.isBlocked);
        setVerifie(e.isVerified);
    }, [e]);

    useEffect(() => {
        setRole(e.role);
        setIsBlocked(e.isBlocked);
    }, [])


    return (
        <Box className={style.boxinfo} key={e._id} >
            <Box display={"flex"} alignItems={"center"}>
                <Flex alignItems={"center"} justifyContent={"left"} >
                    <Avatar name={e.name} size={"lg"} src={e.avatar} />
                </Flex>
                <Heading as={"h4"} flex={1} size={"md"} textAlign={"center"}> {e.name} </Heading>
            </Box>
            <Divider margin={"6px 0 2px 0"} />
            {/* listing */}
            <Box display={"flex"} alignItems={"center"} justifyContent={"left"} >
                <Text className={style.overflow} flex={9} fontSize={"sm"}  > <b>Listing</b> </Text>
                <Text className={style.overflow} flex={2} >:</Text>
                <Text className={style.overflow} flex={36} > {e.listings} </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"left"} >
                <Text className={style.overflow} flex={9} fontSize={"sm"}  > <b>mobile</b> </Text>
                <Text className={style.overflow} flex={2} >:</Text>
                <Text className={style.overflow} flex={36} > {e.mobile || "Not Provided"} </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"left"} >
                <Text className={style.overflow} flex={9} fontSize={"sm"}  > <b>email</b> </Text>
                <Text className={style.overflow} flex={2}  >:</Text>
                <Text className={style.overflow} flex={36} > {e.email || "Not Provided"} </Text>
            </Box>
            <Box>
                <Box display={"flex"} flex={1}>
                    <Text flex={13} fontSize={"sm"} > <b>Created</b> </Text>
                    <Text flex={2} >:</Text>
                    <Text flex={36} fontSize={"xs"} display={"flex"} alignItems={"center"} justifyContent={"space-around"} >
                        <Badge borderRadius={0} colorScheme='blue'> {createdDay} </Badge>
                        <Badge borderRadius={0} colorScheme='green'> {createdOn} </Badge>
                        <Badge borderRadius={0} colorScheme='purple'> {createdTime} </Badge>
                    </Text>
                </Box>
                <Box display={"flex"} flex={1}>
                    <Text flex={13} fontSize={"sm"} > <b>Updated</b> </Text>
                    <Text flex={2} >:</Text>
                    <Text flex={36} fontSize={"xs"} display={"flex"} alignItems={"center"} justifyContent={"space-around"} >
                        <Badge borderRadius={0} colorScheme='blue'> {upDatedDay} </Badge>
                        <Badge borderRadius={0} colorScheme='green'> {lastUpDatedOn} </Badge>
                        <Badge borderRadius={0} colorScheme='purple'> {lastUpDatedTime} </Badge>
                    </Text>
                </Box>
                <Box display={"flex"} flex={1}>
                    <Text flex={13} fontSize={"sm"} > <b>Last Login</b> </Text>
                    <Text flex={2} >:</Text>
                    <Text flex={36} fontSize={"xs"} display={"flex"} alignItems={"center"} justifyContent={"space-around"} >
                        <Badge borderRadius={0} colorScheme='blue'> {lastLogDay} </Badge>
                        <Badge borderRadius={0} colorScheme='green'> {lastLogIn} </Badge>
                        <Badge borderRadius={0} colorScheme='purple'> {lastLogTime} </Badge>
                    </Text>
                </Box>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={2} marginTop={"-1px"} position={"relative"}>
                <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"} w={"100%"}>
                    <Text width={"30%"} fontSize={"sm"} fontWeight={700}>Role:</Text>
                    <Select variant='outline' size='sm' onChange={handleChangeRolefrom} value={role} >
                        <option value="customer">Customer</option>
                        <option value="employee">Employee</option>
                        <option value="agent"> Agent </option>
                        <option value="admin"> Admin </option>
                        <option value="super_admin"> Super Admin </option>
                    </Select>
                </Box>
                {/* alert section */}
                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                Change User Role
                            </AlertDialogHeader>
                            <AlertDialogCloseButton />
                            <AlertDialogBody>
                                Are you sure to change role from {role} to {changeRole}
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button colorScheme='red'
                                    isLoading={loading}
                                    loadingText='Loading'
                                    spinnerPlacement='end'
                                    onClick={handleRoleChange} ml={3}>
                                    Confirm Change
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
                {/* --------=========------- */}
            </Box>
            <Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"} >
                    <Text width={"30%"} fontSize={"sm"} fontWeight={700}>Verified:</Text>
                    <Select variant='outline' size={"sm"} value={verifie} onChange={(a) => handleVerifie(e._id, a)} >
                        <option value={true}> True </option>
                        <option value={false}> False </option>
                    </Select>
                </Box>
            </Box>
            <Box>
                <Block blockid={e._id} userIsBlocked={userIsBlocked} setRole={setRole} setIsBlocked={setIsBlocked} />
            </Box>
        </Box>
    )
}

export default AdminDetail
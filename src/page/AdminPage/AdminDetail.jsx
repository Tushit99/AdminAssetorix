import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList, Select, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import style from "./Admin.module.css";
import axios from 'axios';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Block from './Block';


const AdminDetail = ({ e }) => {
    const [role, setRole] = useState("");
    const [changeRole, setChangeRole] = useState("");
    const [userIsBlocked, setIsBlocked] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const [loading, setLoadiong] = useState(false);

    const handleChangeRolefrom = (e) => {
        let val = e.target.value;
        console.log(val);
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

    

    useEffect(() => {
        setRole(e.role);
        setIsBlocked(e.isBlocked);
    }, [])


    return (
        <Box className={style.boxinfo} key={e._id} >
            <Box>
                <Avatar
                    boxSize={'100%'}
                    borderRadius={0}
                    height={"200px"}
                    name={e.name}
                    src={e.avatar} />
            </Box>
            <Text as={"p"} size={"lg"}> <span> Name: </span>  {e.name} </Text>
            <Text as={"p"} size={"lg"}> <span> Mobile: </span>  {e.mobile} </Text>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
                <Text as={"p"} size={"lg"}> <span> Listing: </span>  {e.listings} </Text>
                <Text as={"p"} size={"lg"}> <span> Wishlist: </span>  {e.wishlist.length} </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={2} margin={"10px 0"}>
                <Text as={"p"} fontSize={"16px"} > Role: </Text>
                <Select borderRadius={0} onChange={handleChangeRolefrom} value={role} >
                    <option value="customer">Customer</option>
                    <option value="employee">Employee</option>
                    <option value="agent"> Agent </option>
                    <option value="admin"> Admin </option>
                    <option value="super_admin"> Super Admin </option>
                </Select> 
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
                <Block blockid={e._id} userIsBlocked={userIsBlocked} setRole={setRole} setIsBlocked={setIsBlocked} />
            </Box>
        </Box>
    )
}

export default AdminDetail
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'

const Block = ({ blockid, userIsBlocked,setIsBlocked ,setRole}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleBlocking = async (myid, status) => {
        try {
            let id = localStorage.getItem("astadid");
            let token = localStorage.getItem("astadToken");

            let obj = {
                id,
                authorization: token,
                'Content-Type': 'application/json',
            };

            let body = {
                id: myid,
                status 
            } 

            console.log(status);   

            await axios.post(`${process.env.REACT_APP_URL}/admin/block`, body, { headers: obj }).then((e) => {
                console.log(e.data);
                setIsBlocked(!userIsBlocked);
                onClose();  
            })
        } catch (err) {
            console.log(err); 
            onClose(); 
        }
    }

    return (
        <Box>
            <Button w={"100%"} onClick={onOpen} bg={"red.500"} color={"white"}> {userIsBlocked ? "Un-block" : "Block"} </Button>
            
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay /> 
                <ModalContent>
                    <ModalHeader> User Status </ModalHeader>
                    <ModalCloseButton /> 
                    <ModalBody>
                        Do you want to {userIsBlocked ? "Un-block" : "Block"} this user. 
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={()=>handleBlocking(blockid, !userIsBlocked)} backgroundColor={"rgb(255, 55, 55)"} color={"white"} variant={"solid"} > {userIsBlocked ? "Un-block" : "Block"} User </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal> 
        </Box>
    )
}

export default Block;


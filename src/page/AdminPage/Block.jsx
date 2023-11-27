import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'

const Block = ({ blockid, userIsBlocked, setIsBlocked, setRole }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [load, setLoad] = useState(false);

    const handleBlocking = async (myid, status) => {
        setLoad(true);
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
                setLoad(false);
            })
        } catch (err) {
            console.log(err);
            onClose();
            setLoad(false);
        }
    }

    return (
        <Box>
            <Button
                w={"100%"} 
                onClick={onOpen}
                colorScheme={userIsBlocked ? "whatsapp" : "red"}
                isLoading={load}
                loadingText='Changing...'
                spinnerPlacement='start'
                color={"white"}>
                {userIsBlocked ? "Un-block" : "Block"}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> User Status </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Do you want to {userIsBlocked ? "Un-block" : "Block"} this user.
                    </ModalBody>

                    <ModalFooter>
                        <Button isLoading={load}
                            loadingText='Changing...'
                            spinnerPlacement='start'
                            onClick={() => handleBlocking(blockid, !userIsBlocked)}
                            colorScheme={userIsBlocked ? "whatsapp" : "red"} 
                            color={"white"} 
                            variant={"solid"} >
                            {userIsBlocked ? "Un-block" : "Block"} User
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Block;


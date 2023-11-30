import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'; 

const Varifies = ({ handleVerifie, e, verifie }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [userId, setUserId] = useState("");
    const [userval, setUserVal] = useState("");

    const handlechangevarifie = (id, val) => {
        setUserId(id);
        setUserVal(val);
        onOpen();
    }

    const confirmchange = () => {
        handleVerifie(userId, userval);
        onClose();
    }

    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"} >
            <Text width={"30%"} fontSize={"sm"} fontWeight={700}>Verified:</Text>
            <Select variant='outline' size={"sm"} value={verifie} onChange={(a) => handlechangevarifie(e?._id, a.target.value)} >
                <option value={true}> True </option>
                <option value={false}> False </option>
            </Select>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> Verification Confirmation  </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {userval ? "Confirm to Verify this User" : "Confirm to Un-Verify this User"}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close 
                        </Button>
                        <Button
                            variant='ghost'  
                            onClick={confirmchange}
                        >Confirm</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    )
}

export default Varifies;


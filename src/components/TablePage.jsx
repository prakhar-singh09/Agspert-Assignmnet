import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel,
    Input,
    FormControl,

  } from '@chakra-ui/react'

  function TablePage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
      <>
 <TableContainer pt = {4}>
  <Table >
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Customer Name</Th>
        <Th isNumeric>Price</Th>
        <Th isNumeric>Last Modified</Th>
        <Th>Edit/View</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>Spider</Td>
        <Td isNumeric>100</Td>
        <Td isNumeric>24/5/2024(11:07)</Td>
        <Td><Button onClick={onOpen} colorScheme='white' textColor={'Red'}>
          ... 
        </Button></Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>Spider</Td>
        <Td isNumeric>210</Td>
        <Td isNumeric>24/5/2024(11:30)</Td>
        <Td><Button onClick={onOpen} colorScheme='white' textColor={'Red'}>
          ... 
        </Button></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
        
         <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Your Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>ID</FormLabel>
                <Input ref={initialRef} placeholder='ID' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Customer Name</FormLabel>
                <Input placeholder='Customer Name' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input placeholder='Price' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last Modified</FormLabel>
                <Input placeholder='Last Modified' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
</>
    )
  }
  
  export default TablePage
 
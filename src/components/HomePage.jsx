import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel,Button ,
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
import TablePage from './TablePage'
import { useEffect } from 'react';
function HomePage() {

  useEffect(() => {
    let getitem = window.localStorage.getItem("token");

    if (!getitem) {
      window.location.href = "/";
    }
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  return (
    <>
    <Tabs p = {6} variant='soft-rounded' colorScheme='green'>
    <TabList>
      <Tab>Active Sales Orders</Tab>
      <Tab>Completed Sales Orders</Tab>
        <Button onClick={onOpen} colorScheme='green' pos="absolute" right="125"   borderRadius="50"> +Sale Order  </Button>    
     </TabList>
    <TabPanels>
      <TabPanel>
          <TablePage/>
      </TabPanel>
      <TabPanel>
        Loading...
      </TabPanel>
    </TabPanels>
  </Tabs>
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

export default HomePage

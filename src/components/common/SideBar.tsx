
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

//assets
import '../assets/css/sidebar.css';


interface SideBarProps {
  drawer: boolean,
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBar: React.FC<SideBarProps> = ({drawer, setDrawer}) => {

  const { onClose } = useDisclosure();

  return (
    <>
      <Drawer
        isOpen={drawer}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={() =>setDrawer(prevDrawer => !prevDrawer)}/>
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={() =>setDrawer(prevDrawer => !prevDrawer)}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>  
    </>
)

};

export default SideBar;
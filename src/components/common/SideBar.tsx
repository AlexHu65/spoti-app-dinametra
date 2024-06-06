
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
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
          <DrawerHeader>Busca tu artista</DrawerHeader>
          <DrawerBody>
            <Input placeholder='Nombre, album...' />
          </DrawerBody>
        </DrawerContent>
      </Drawer>  
    </>
)

};

export default SideBar;
import React, { useRef } from 'react';
import { Container, Items } from "./styles";
import { useHistory } from "react-router-dom";
import menu from "../../assets/images/menu.png";
import useWindowSize from '../../utils/useWindowSize';


import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
} from '@chakra-ui/react'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const history = useHistory()
  
  // configure width for conditional responsive
  const { width } = useWindowSize();
  const isMobile = width && width < 768;

  return (
    <>
    {
      isMobile &&     
    <Container>
      <img  src={menu} alt="image-burguer" ref={btnRef} colorScheme='teal' onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Categorias</DrawerHeader>
        <hr />
          <DrawerBody>
            <Items style={{display: "flex", flexDirection: "column"}}>
              <a onClick={() => history.push("/sebastian")}>Sebastian</a>
              <a onClick={() => history.push("/truss")}>Truss</a>
              <a onClick={() => history.push("/wella")}>Wella</a>
              <a onClick={() => history.push("/victoriaSecrets")}>Victoria Secrets</a>
              <a onClick={() => history.push("/badybodyworks")}>Bady & Body Works</a>
              <a onClick={() => history.push("/importedPerfumes")}>Perfumes Importados</a>
              <a onClick={() => history.push("/winterItems")}>Artigos Inverno</a>
              <a onClick={() => history.push("/loreal")}>Loreal</a>
              <a onClick={() => history.push("/bedHead")}>Bed Head</a>
              <a onClick={() => history.push("/fractionals")}>Fracionados</a>
            </Items>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Container>
    }
    </>
  )
}
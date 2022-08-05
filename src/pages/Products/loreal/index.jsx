import { useProducts } from "../../../providers/produtos/";
import { Products } from "../../../components/Home/styles"
import { useCart } from "../../../providers/cart";
import { Container } from "./styles";
import { motion } from 'framer-motion';
import { useRef, useState } from "react";

import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
    Button,
    ModalFooter,
  } from '@chakra-ui/react'

export const ProductLoreal = () => {
    const { productLoreal } = useProducts();
    const { handleAddToCart } = useCart();

    const [p, setP] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()

    const finalRef = useRef(null)

    const style = {backgroundColor: "#cc0000"}
    const style2 = {backgroundColor: "#00a000"}

    const getId = (id) => {
        const teste = productLoreal.filter(x => x.id === id)
        setP(teste)
        onOpen(teste)
      }

    const addToCart = (item) => {
        onClose()
        handleAddToCart(item)
    } 

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9 }}
      >
         <Container>
            {productLoreal.map(prodT => (
            <Products key={prodT.id}>
                <>
                <img src={prodT.image} alt={prodT.name} />
                        {prodT.hasStock ? 
                              <strong className="hidden" style={style}>Sem Estoque</strong>
                              :   
                              <strong className="hidden" style={style2}>Em Estoque</strong>
                            }
                              <br /> <br />
                            <h4>{prodT.name}</h4>
                          <h5 className="line-through">R$ 45</h5>
                            <span className="price">R$ {prodT.price}</span>
                            <button onClick={() => getId(prodT.id)}>Sobre o Produto</button>
                    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Sobre o produto</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody style={{margin: "0 auto"}}>
                          {p.map(t => (
                            <div key={t.id}>
                            <img src={t.image} alt={t.name} style={{height: "250px", borderRadius: "100%", margin: "0 auto"}}/>
                              <br /> <br />
                            <h2>{t.name}</h2>

                            <strong>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</strong> 
                            <Button style={{display: "block", margin: "0 auto"}} onClick={() => addToCart(t)}  colorScheme='pink'>Adicionar ao carrinho</Button>
                            </div>
                          ))}
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                </>
            </Products>
            ))}
        </Container>
        </motion.div>
    )
}
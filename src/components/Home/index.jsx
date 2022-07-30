import { useProducts } from "../../providers/produtos"
import { Container, Products, Header } from "./styles";
import { Button } from '@chakra-ui/react'
import { useHistory } from "react-router-dom";
import { motion } from 'framer-motion'

export const HomeComp = () => {
    const { products } = useProducts();
    const history = useHistory();

    return (
     <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Container>
            {products.map(prod => (
                <Products key={prod.id}>
                    <img src={prod.image} alt={prod.name} />
                    <h4>{prod.name}</h4>
                    <br />
                    <Button colorScheme='teal' variant='outline' onClick={() => history.push(prod.path)}>Ver mais...</Button>
                </Products>
            ))}

            {/* <img src={} alt="wpp" /> */}
            <Header>
                Copyright © 2022 RC Digital, Todos os direitos reservados.
            </Header>
        </Container>
        </motion.div>
    )
}
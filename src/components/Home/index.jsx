import { useProducts } from "../../providers/produtos"
import { Container, Products, Header, WhatsApp } from "./styles";
import { Button } from '@chakra-ui/react';
import { useHistory } from "react-router-dom";
import { motion } from 'framer-motion';
import wpp from "../../assets/images/utils/whatsapp.png"

export const HomeComp = () => {
    const { products } = useProducts();
    const history = useHistory();

    const styleH1 = {textAlign: 'center', margin: "1rem", fontSize: "3rem", fontFamily: "Anton, sansSerif", color: "#f08fa9"}

    const contact = () => {
        const msgEndOrder = `Olá! Gostaria de um atendimento`
        return (
            window.location.href = `https://api.whatsapp.com/send?phone=55041999144840&text=${msgEndOrder}&type=phone_number&app_absent=0`
        )
    }

    return (
     <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 style={styleH1}>Categorias</h1>
            <div style={{display: "flex", flexDirection: "column"}}>
        <Container>
            {products.map(prod => (
                <Products key={prod.id}>
                    <img src={prod.image} alt={prod.name} />
                    <h4>{prod.name}</h4>
                    <br />
                    <Button colorScheme='teal' variant='outline' onClick={() => history.push(prod.path)}>Ver mais...</Button>
                </Products>
            ))}

            <WhatsApp>
                <img onClick={contact} className=".img" src={wpp} alt="WhatsApp" />
            </WhatsApp>
        </Container>
            </div>
        </motion.div>
    )
}
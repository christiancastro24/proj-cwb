import { Container, ContainerProducts, HeaderTitle } from "./styles"
import logo from "../../assets/images/logotipo.png"
import { BsCart4 } from "react-icons/bs"
import { useHistory } from "react-router-dom";
import Navbar from "../Menu-mobile";
import { useCart } from "../../providers/cart";
import { Input }from '@chakra-ui/react';
import { GrContact } from "react-icons/gr"
import { useProducts } from "../../providers/produtos";
import { useState } from "react";
import { Button } from '@chakra-ui/react'

export const Header = () => {

    const { handleAddToCart } = useCart()

    const { products } = useProducts();
    const history = useHistory();
    const [filtProd, setFiltProd] = useState([])
    const [inputValue, setInputValue] = useState("")
    

    const searchItem = (inputValue) => {
        const result = products.map(prod => prod).filter(p => p.name.toLowerCase().includes(inputValue.toLowerCase()))
        setFiltProd(result)
    }

    return (
        <>
        <HeaderTitle>
            <h1>Você é um cliente valioso para nós! É sempre um prazer te atender! Volte Sempre e muito obrigada!</h1>
        </HeaderTitle>
        <Container>
            <img src={logo} alt="logo" onClick={() => history.push("/")} title={`Inicio`}/>
            <Navbar />
            <Input value={inputValue} onChange={e => setInputValue(e.target.value)} fontSize={"0.8rem"} borderColor={"#f08fa9"} color="#f08fa9" width={423} placeholder="O que você está buscando?" />
            <Button colorScheme='blue' mr={3} onClick={() => searchItem(inputValue)}>Buscar</Button>

            {filtProd?.map(prod => (
               <ContainerProducts>
                  <img src={prod.image} alt={prod.name} />
                  <h3>{prod.name}</h3>
                  <Button colorScheme="red" onClick={() => {handleAddToCart(prod); setFiltProd([])}}>Adicionar</Button>
                </ContainerProducts>
            ))}
            <div>
                <GrContact />
                <span>Atendimento</span>
            </div>
            <div>
                <BsCart4 color="#f08fa9" style={{ cursor: "pointer" }} onClick={() => history.push('/cart')}></BsCart4>
                <span>Meu Carrinho</span>
            </div>
        </Container>
        </>
        )
        
}
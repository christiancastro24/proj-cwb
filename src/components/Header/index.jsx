import { Container, ContainerProducts, HeaderTitle } from "./styles"
import logo from "../../assets/images/logotipo.png"
import { useHistory } from "react-router-dom";
import Navbar from "../Menu-mobile";
import { useCart } from "../../providers/cart";
import { GrContact } from "react-icons/gr"
import { useProducts } from "../../providers/produtos";
import { useState } from "react";
import { BiArrowFromLeft } from "react-icons/bi"
import useWindowSize from "../../utils/useWindowSize";
import { Input } from "@chakra-ui/react";
import { CartComp } from "../Cart";

export const Header = () => {

    const { handleAddToCart } = useCart()
    const { products } = useProducts();
    const { width } = useWindowSize();
    const history = useHistory();
    const [inputValue, setInputValue] = useState("")
    
        
    const filteredRepos = products.filter(p => p.name.toLowerCase().includes(inputValue.toLowerCase()))

    const contact = () => {
        const msgEndOrder = `Olá!`
        return (
            window.location.href = `https://api.whatsapp.com/send?phone=55041999144840&text=${msgEndOrder}&type=phone_number&app_absent=0`
        )
    }
  

    return (
        <>
        <HeaderTitle>
            <h1>Você é um cliente valioso para nós! É sempre um prazer te atender! Volte Sempre e muito obrigada!</h1>
        </HeaderTitle>
        <Container>
            <img src={logo} alt="logo" onClick={() => history.push("/")} title={`Inicio`}/>
            <Navbar />

            {width >= 768 && 
                <Input type="search" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Procure por Categoria..." />
            }
    

            {inputValue.length > 0 && (
                filteredRepos.map(prod => (
                    <ContainerProducts>
                        <div style={{display: "flex"}}>
                       <img src={prod.image} alt={prod.name} onClick={() => {history.push(prod.path); setInputValue("")}}/>
                       <h3>{prod.name}</h3>
                        </div>
                       <BiArrowFromLeft color="#000" size="30" onClick={() => {history.push(prod.path); setInputValue("")}}/>
                     </ContainerProducts>
                 ))
            )
                }
            {width >= 768 &&
                <div>
                    <GrContact onClick={contact} style={{cursor: "pointer"}}/>
                    <span>Atendimento</span>
                </div>
            }
            <div>      
            <CartComp />
                <span>Meu Carrinho</span>
            </div>
        </Container>
        </>
        )
        
}
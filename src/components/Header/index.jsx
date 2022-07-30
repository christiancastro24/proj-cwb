import { Container, HeaderTitle } from "./styles"
import logo from "../../assets/images/logotipo.png"
import { BsCart4 } from "react-icons/bs"
import { useHistory } from "react-router-dom";
import Navbar from "../Menu-mobile";
import { useCart } from "../../providers/cart";
import { Input }from '@chakra-ui/react';
import { GrContact } from "react-icons/gr"

export const Header = () => {

    // const { cart } = useCart()

    const history = useHistory();

    return (
        <>
        <HeaderTitle>
            <h1>Você é um cliente valioso para nós! É sempre um prazer te atender! Volte Sempre e muito obrigada!</h1>
        </HeaderTitle>
        <Container>
            <img src={logo} alt="logo" onClick={() => history.push("/")} title={`Inicio`}/>
            <Navbar />
            <Input fontSize={"0.8rem"} borderColor={"#f08fa9"} color="#f08fa9" width={423} placeholder="O que você está buscando?" />
            <div>
                <GrContact />
                <span>Atendimento</span>
            </div>
            <div>
                <BsCart4 color="#f08fa9" style={{ cursor: "pointer" }} onClick={() => history.push('/cart')}></BsCart4>
                <span>Meu Carrinho</span>
            </div>
            {/* <span style={{color: "red"}}>{cart.length}</span> */}
        </Container>
        </>
        )
        
}
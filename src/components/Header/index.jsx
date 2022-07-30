import { Container } from "./styles"
import logo from "../../assets/images/logotipo.png"
import { BsCart4 } from "react-icons/bs"
import { useHistory } from "react-router-dom";
import Navbar from "../Menu";
import { useCart } from "../../providers/cart";

export const Header = () => {

    // const { cart } = useCart()

    const history = useHistory();
    return (
        <Container>
            <img src={logo} alt="logo" onClick={() => history.push("/")} title={`Inicio`}/>
            <Navbar />
            <BsCart4 color="#000" style={{marginLeft: "auto", marginRight: "100px", cursor: "pointer"}} onClick={() => history.push('/cart')}></BsCart4>
            {/* <span style={{color: "red"}}>{cart.length}</span> */}
        </Container>
        )
        
}
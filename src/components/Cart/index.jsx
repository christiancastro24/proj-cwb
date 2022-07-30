import { useCart } from "../../providers/cart";
import { Products } from "../Home/styles"
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md" 
import { Container, ContainerCart } from "./styles";
import { motion } from 'framer-motion'
import { Button } from '@chakra-ui/react'

export const CartComp = () => {

    const { removeItem, cart , handleAddToCart, removeAllItems } = useCart();
    const total = cart.reduce((acc, tot) => acc + tot.quantity * tot.price, 0).toFixed(2);
    
    const teste = () => {
        
    } 


    const finalizarPedido = () => {
        const a = 'asdasd'
        return (
            window.location.href = `https://api.whatsapp.com/send?phone=55041999144840&text=${total}&type=phone_number&app_absent=0`
        )
    }

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Container>
        <div className="products">
        {cart.map(prod => (
            <Products key={prod.id}>
            <img src={prod.image} alt={prod.name} />
                <h4>{prod.name}</h4>
              <h5 className="line-through">R$ 45</h5>
                <span className="price">R$ {prod.price}</span>
                <ContainerCart>
                    <span onClick={() => handleAddToCart(prod)}>
                        <MdAddCircle size={25} color="green"/>
                    </span>
                    &nbsp;&nbsp;<span>Qtd:{prod.quantity}</span>&nbsp;&nbsp;
                    <span onClick={() => removeItem(prod)}>
                        <MdRemoveCircle size={25} color="red"/>
                    </span>
                   <br /> <br /> 
                </ContainerCart>
                <button onClick={() => removeAllItems(prod)}>Remover</button>
        </Products>
        ))}
    </div>
    {total !== 0 &&
        <div className="total-price">
            {cart.map(prodCart => (
                <div className="total-items">
                    <img src={prodCart.image} alt={prodCart.name} height={150}/>
                    <h5>{prodCart.name}</h5>
                    <h6>Quantidade: {prodCart.quantity}</h6>
                    <br />
                </div>
            ))}
                <Button onClick={finalizarPedido} colorScheme='blue' mr={3}>Finalizar Pedido</Button>
            <h2>TOTAL: <strong>R$ {total}</strong></h2>
        </div>
        }
            </Container>
        </motion.div>
    )
}
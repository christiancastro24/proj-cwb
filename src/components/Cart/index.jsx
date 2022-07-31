import { useCart } from "../../providers/cart";
import { Products } from "../Home/styles"
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md" 
import { Container, ContainerCart } from "./styles";
import { motion } from 'framer-motion'
import { Button } from '@chakra-ui/react'

export const CartComp = () => {

    const { removeItem, cart , handleAddToCart, removeAllItems } = useCart();
    const total = cart.reduce((acc, tot) => acc + tot.quantity * tot.price, 0).toFixed(2);
    const lengthItems = cart.length > 1 ? `Subtotal ${cart.length} items` : `Subtotal ${cart.length} item`


    const teste = cart.map(cart => cart.name)
    const qtd = cart.map(cart => cart.quantity)

    const finalizarPedido = (e) => {
        const msgEndOrder = 
                `
                    ${teste} \n ${qtd}`
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
            <div>
                <h2>{lengthItems}</h2>
            </div>
            <h2>TOTAL: <strong>R$ {total}</strong></h2>
                <Button onClick={finalizarPedido} colorScheme='red' mr={3}>Finalizar Pedido</Button>
        </div>
        }
            </Container>
        </motion.div>
    )
}
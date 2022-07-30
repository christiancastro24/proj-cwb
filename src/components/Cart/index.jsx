import { useCart } from "../../providers/cart";
import { Products } from "../Home/styles"
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md" 
import { Container, ContainerCart } from "./styles";
import { motion } from 'framer-motion'

export const CartComp = () => {

    const { removeItem, cart , handleAddToCart, removeAllItems } = useCart();
    console.log(cart)

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Container style={{display: "flex"}}>
        <div>
        {cart.map(prod => (
            <Products key={prod.id}>
            <img src={prod.image} alt={prod.name} />
                   <br /> <br />
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
            </Container>
        </motion.div>
    )
}
import { useState } from "react"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  DrawerFooter,
  Input,
} from '@chakra-ui/react'
import { BsCart4 } from "react-icons/bs"
import { useCart } from "../../providers/cart"
import { BsTrash } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import { RiSubtractFill } from "react-icons/ri"
import { motion } from 'framer-motion';
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import { cupomDesconto } from "../../utils/cupoms"

// Estilos Externos
import { 
  styleHeader, styleBody, styleImg, contentCart, firstH2Cart, contentProducts, iconCart, 
  iconSub, spanQtd, content, divTrashAndPrice, iconTrash, price, divCartEmpty, totalPrice,
  lengthCart, lengthItemsCart, ButtonFinishOrder, closeButton, valueCart } from '../../utils/externalStyles'


export const CartComp = () => {
    const [size, setSize] = useState('')
    const history = useHistory();

    const [inputValue, setInputValue] = useState('')
    const [cupumValidate, setCumumValidate] = useState(true)
    const [discount, setDiscount] = useState(0)
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { cart, removeItem, removeAllItems, handleAddToCart } = useCart();


    let total =  cart.reduce((acc, tot) => acc + tot.quantity * tot.price, 0).toFixed(2)
    const qtd = cart.map(quant => quant.quantity).reduce((a, b) => a + b, 0)

    const lengthItems = cart.length > 1 ? `${cart.length} items - ${qtd} Quantidades` : `${cart.length} item - ${qtd} Quantidade`
    
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }

    const closeModal = () => {
      onClose();
      history.push('/')

    }
  
    const finishOrder = () => {
      const msgEndOrder = `Olá! Gostaria de um atendimento - Valor total: ${total}`
          localStorage.clear();
          window.location.href = `https://api.whatsapp.com/send?phone=55041999144840&text=${msgEndOrder}&type=phone_number&app_absent=0`
  }

  const applyDiscount = () => {
   if (cupomDesconto === inputValue) {
    setDiscount(Math.floor((total/100)*85))
    setCumumValidate(false)
    toast.success('Cupom aplicado!')

  } else {
    toast.error('Cupom inválido!')
  }
}
  console.log(discount)

  const discountFixed = discount && discount.toFixed(2)
  
    return (
      <>
      <strong style={valueCart}>{cart.length}</strong>
       <BsCart4
            onClick={() => handleClick(size)}
            key={size}
            style={iconCart}
            m={4} />
  
        <Drawer onClose={onClose} isOpen={isOpen} size={sizes[3]}>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9 }}
      >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton style={closeButton}/>
            <DrawerHeader style={styleHeader}>Carrinho de Compras</DrawerHeader>
            <DrawerBody style={{styleBody}}>
                {cart.map(prod => (
                  <div key={prod.id} style={content}>
                      <img style={styleImg} src={prod.image} alt="image-item" />
                      <div style={contentCart}>
                      <h2 style={firstH2Cart}>{prod.name}</h2>
                      <div style={contentProducts}>
                         <RiSubtractFill size={25} style={iconSub} onClick={() => removeItem(prod)} />
                         <span style={spanQtd}>{prod.quantity}</span>
                          <AiOutlinePlus size={25} style={iconSub} onClick={() => handleAddToCart(prod)}/>
                      </div>
                      </div>
                      <div style={divTrashAndPrice}>
                      <BsTrash size={35} style={iconTrash} onClick={() => removeAllItems(prod)}/>
                      <h1 style={price}>R${prod.price.toFixed(2)}</h1>
                      </div>
                  </div>
                ))}
            </DrawerBody>
            {cart.length === 0 ?
            <div style={divCartEmpty}>
                <h1>Carrinho Vazio!</h1>
                <br />
                <Button
                width='100%'
                colorScheme='red'
                onClick={closeModal}
            >Ver Produtos!</Button>
            </div>
                :
                <>
                  <h2 style={totalPrice}>&nbsp;Total: <span>R$ {cupumValidate ? total : discountFixed}</span></h2>
                <div style={lengthCart}>
                  <div>
                      <h2 style={lengthItemsCart}>&nbsp;&nbsp;&nbsp;{lengthItems}</h2>
                  </div>
                </div>
              {cupumValidate  &&
                <div style={{display: "flex", justifyContent: "center", margin: "10px"}}>
                  <Input 
                    placeholder="CUPOM DE DESCONTO" 
                    width={270}
                    style={{border: "3px solid pink", textTransform: "uppercase"}}         
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                  />
                  <Button
                    style={{width: "auto", marginLeft: "10px"}}
                    colorScheme='purple'
                    onClick={applyDiscount}
                    py={3}
                    width={270}  
                    mb={1}
                  >Aplicar</Button>
                </div>
                }

              <DrawerFooter>
                <Button
                colorScheme='pink'
                onClick={finishOrder}
                py={6}
                style={ButtonFinishOrder}
                mb={1}>Finalizar Pedido</Button>
              </DrawerFooter>
            </>
          }
          </DrawerContent>
        </motion.div>
        </Drawer>
      </>
    )
  }
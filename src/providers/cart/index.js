import { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-toastify"

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const removeAllItems = (product) => {
        setCart(cart.filter(x => x.name !== product.name))
    }

    const removeItem = (product) => {
        const exist = cart.find(x => x.name === product.name);

        if (exist.quantity === 1) {
            setCart(cart.filter(x => x.name !== product.name));

        } else {
            setCart(cart.map((x) => x.name === product.name ? { ...exist, quantity: exist.quantity - 1 } : x))
        }
      }

    const handleAddToCart = (item) => {
        const exist = cart.find(x => x.name === item.name);

        if(exist) {
        setCart(cart.map(x => x.name === item.name ? { ...exist, quantity: exist.quantity + 1 } : x))
        

        } else {
            setCart([...cart, {...item, quantity: 1}])
            toast.success('Produto adicionado ao Carrinho')
            localStorage.setItem("cart", JSON.stringify(cart))
        }      
    }
 
    
    return (
        <CartContext.Provider value={{cart, removeItem, quantity, setQuantity, handleAddToCart, removeAllItems }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext)
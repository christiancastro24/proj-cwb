import { createContext, useContext, useState, useEffect } from "react"
import { Products } from "../../services";

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products.map(prod => prod))
    }, [])

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}



export const useProducts = () => useContext(ProductsContext)
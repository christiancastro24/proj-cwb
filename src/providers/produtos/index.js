import { createContext, useContext, useState, useEffect } from "react"
import { 
    ProductsHome, ProductSebastian, ProductTruss, ProductWella, ProductVictoriaSecrets, ProductBadyeBodyWorks, 
    ProductImportedPerfumes, ProductWinterItems, ProductLoreal, ProductBedHead, ProductFractionals } from "../../services";

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [productSebastian, setProductSebastian] = useState([])
    const [productTruss, setProductsTruss] = useState([])
    const [productWella, setProductsWella] = useState([])
    const [productVictoriaSecrets, setProductsVictoriaSecrets] = useState([])
    const [productBadyeBodyWorks, setProductsBadyeBodyWorks] = useState([])
    const [ImportedPerfumes, setImportedPerfumes] = useState([])
    const [productWinterItems, setWinterItems] = useState([])
    const [productLoreal, setLoreal] = useState([])
    const [productBedHead, setProductBedHead] = useState([])
    const [productFractionals, setProductFractionals] = useState([])

    useEffect(() => {
        setProducts(ProductsHome)
        setProductSebastian(ProductSebastian)
        setProductsTruss(ProductTruss)
        setProductsWella(ProductWella)
        setProductsWella(ProductWella)
        setProductsVictoriaSecrets(ProductVictoriaSecrets)
        setProductsBadyeBodyWorks(ProductBadyeBodyWorks)
        setImportedPerfumes(ProductImportedPerfumes)
        setWinterItems(ProductWinterItems)
        setLoreal(ProductLoreal)
        setProductBedHead(ProductBedHead)
        setProductFractionals(ProductFractionals)
    }, [])
    

    return (
        <ProductsContext.Provider value={{ products, productSebastian, productTruss, productWella, productVictoriaSecrets, productBadyeBodyWorks, ImportedPerfumes, productWinterItems, productLoreal, productBedHead, productFractionals }}>
            {children}
        </ProductsContext.Provider>
    )
}



export const useProducts = () => useContext(ProductsContext)
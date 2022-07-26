import { ProductsProvider } from "./produtos"

const Providers = ({ children }) => {
    return (
            <ProductsProvider>
                {children}
            </ProductsProvider>
    )
}

export default Providers;
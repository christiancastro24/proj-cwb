import { CartProvider } from "./cart";
import { ProductsProvider } from "./produtos"

const Providers = ({ children }) => {
    return (
        <CartProvider>
            <ProductsProvider>
                {children}
            </ProductsProvider>
        </CartProvider>
    )
}

export default Providers;
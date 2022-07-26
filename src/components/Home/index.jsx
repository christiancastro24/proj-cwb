import { useProducts } from "../../providers/produtos"

export const HomeComp = () => {
    const { products } = useProducts();
    console.log(products)
    return (
        <div>
            {/* <h1>{produtos.name}</h1> */}
            <h1>Produtos</h1>
        </div>
    )
}
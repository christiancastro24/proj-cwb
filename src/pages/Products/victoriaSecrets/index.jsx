import { useProducts } from "../../../providers/produtos/";
import { Products } from "../../../components/Home/styles"
import { useCart } from "../../../providers/cart";
import { useHistory } from "react-router-dom";
import { Container } from "./styles"

export const ProductVictoriaSecrets = () => {
    const { productVictoriaSecrets } = useProducts();
    const { handleAddToCart } = useCart();

    const style = {backgroundColor: "#cc0000"}
    const style2 = {backgroundColor: "#00a000"}
    const history = useHistory();

    return (
        <Container>
        {productVictoriaSecrets.map(prod => (
        <Products key={prod.id}>
       <img src={prod.image} alt={prod.name} />
            {prod.hasStock ? 
                   <strong className="hidden" style={style}>Sem Estoque</strong>
                   :   
                   <strong className="hidden" style={style2}>Em Estoque</strong>
                }
                   <br /> <br />
                <h4>{prod.name}</h4>
              <h5 className="line-through">R$ 45</h5>
                <span className="price">R$ {prod.price}</span>
                <button onClick={() => handleAddToCart(prod)}>Adicionar</button>
        </Products>
        ))}
    </Container>
    )
}
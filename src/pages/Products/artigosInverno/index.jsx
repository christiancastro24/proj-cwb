import { useProducts } from "../../../providers/produtos/";
import { Products } from "../../../components/Home/styles"
import { useCart } from "../../../providers/cart";
import { useHistory } from "react-router-dom";

export const ProductWinterItems = () => {
    const { productWinterItems } = useProducts();
    const { handleAddToCart } = useCart();

    const style = {backgroundColor: "#cc0000"}
    const style2 = {backgroundColor: "#00a000"}
    const history = useHistory();

    return (
        <div>
            {productWinterItems.map(prodT => (
            <Products key={prodT.id}>
          <img src={prodT.image} alt={prodT.name} />
            {prodT.hasStock ? 
                   <strong className="hidden" style={style}>Sem Estoque</strong>
                   :   
                   <strong className="hidden" style={style2}>Em Estoque</strong>
                }
                   <br /> <br />
                <h4>{prodT.name}</h4>
              <h5 className="line-through">R$ 45</h5>
                <span className="price">R$ {prodT.price}</span>
                <button onClick={() => handleAddToCart(prodT)}>Adicionar</button>
            </Products>
            ))}
        </div>
    )
}
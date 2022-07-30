import { useHistory } from "react-router-dom";
import useWindowSize from "../../utils/useWindowSize";
import { Container } from "./style";

export const MenuDesktop = () => {

    const history = useHistory();

    // configure width for conditional responsive
    const { width } = useWindowSize();
    const isMobile = width && width > 768;

    return (
        <>
            {
                (isMobile) && <Container>
                    <hr/>
                        <ul>
                            <li onClick={() => history.push("/sebastian")}>Sebastian</li>
                            <li onClick={() => history.push("/truss")}>Truss</li>
                            <li onClick={() => history.push("/wella")}>Wella</li>
                            <li onClick={() => history.push("/victoriaSecrets")}>Victoria Secrets</li>
                            <li onClick={() => history.push("/badybodyworks")}>Bady & Body Works</li>
                            <li onClick={() => history.push("/importedPerfumes")}>Perfumes Importados</li>
                            <li onClick={() => history.push("/winterItems")}>Variedades</li>
                            <li onClick={() => history.push("/loreal")}>Loreal</li>
                            <li onClick={() => history.push("/bedHead")}>Bed Head</li>
                            <li onClick={() => history.push("/fractionals")}>Fracionados</li>
                        </ul>
                    <hr/>
                </Container>   
            }
        </>
    )
}
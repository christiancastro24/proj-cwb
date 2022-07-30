import { Switch, Route } from "react-router-dom";
import { ProductTruss } from "../pages/Products/truss";
import { ProductSebastian } from "../pages/Products/sebastian";
import { ProductVictoriaSecrets } from "../pages/Products/victoriaSecrets";
import { ProductBadyBodyWorks } from "../pages/Products/badybodyworks";
import { ProductWella } from "../pages/Products/wella";
import { ProductImportedPerfumes } from "../pages/Products/perfumesImportados";
import { ProductWinterItems } from "../pages/Products/artigosInverno";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { ProductLoreal } from "../pages/Products/loreal";
import { ProductBedHead } from "../pages/Products/bedHead";
import { ProductFractionals } from "../pages/Products/fractionals";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/cart"> <Cart /> </Route>
            <Route path="/sebastian"> <ProductSebastian /> </Route>
            <Route path="/truss"> <ProductTruss /> </Route>
            <Route path="/wella"> <ProductWella /> </Route>
            <Route path="/victoriaSecrets"> <ProductVictoriaSecrets /> </Route>
            <Route path="/badybodyworks"> <ProductBadyBodyWorks /> </Route>
            <Route path="/importedPerfumes"> <ProductImportedPerfumes /> </Route>
            <Route path="/variedades"> <ProductWinterItems /> </Route>
            <Route path="/loreal"> <ProductLoreal /> </Route>
            <Route path="/bedHead"> <ProductBedHead /> </Route>
            <Route path="/fractionals"> <ProductFractionals /> </Route>
        </Switch>
    )
}


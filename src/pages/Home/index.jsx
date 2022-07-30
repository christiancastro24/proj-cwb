import { CarouselHome } from "../../components/Carousel"
import { HomeComp } from "../../components/Home"
import { MenuDesktop } from "../../components/Menu-desktop"

export const Home = () => {
    return (
        <div>
            <MenuDesktop />
            <CarouselHome />
            <HomeComp />
        </div>
    )
}
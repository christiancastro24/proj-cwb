import { CarouselHome } from "../../components/Carousel"
import { CarouselFeedbacks } from "../../components/CarouselFeedbacks"
import { HomeComp } from "../../components/Home"
import { MenuDesktop } from "../../components/Menu-desktop"

export const Home = () => {
    return (
        <div>
            <br />
            <br />
            {/* <MenuDesktop /> */}
            <CarouselHome />
            <HomeComp />
            <CarouselFeedbacks />
        </div>
    )
}
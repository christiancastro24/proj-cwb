import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "./styles";

import banner1 from "../../assets/images/banner1.jpg";
import banner4 from "../../assets/images/banner3.webp";
import banner5 from "../../assets/images/banner4.png";
import { Link } from "react-router-dom";

export const CarouselHome = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 450 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 0,
      slidesToSlide: 0,
    },
  };

  return (
    <>
      <Carousel
        renderArrowsWhenDisabled={true}
        swipeable={false}
        draggable={false}
        showDots={false}
        arrows={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        transitionDuration={2200}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        focusOnSelect={false}
      >
        <Container>
          <Link to="/">
            <img src={banner5} alt="banner2" />
          </Link>
        </Container>
        <Container>
          <Link to="/">
            <img src={banner1} alt="banner3" />
          </Link>
        </Container>
      </Carousel>
    </>
  );
};
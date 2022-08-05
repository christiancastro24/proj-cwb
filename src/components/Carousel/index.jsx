import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "./styles";

import product_one from "../../assets/images/bannersHome/product_1.jpg"
import product_two from "../../assets/images/bannersHome/product_2.jpg"
import product_three from "../../assets/images/bannersHome/product_3.jpg"
import product_four from "../../assets/images/bannersHome/product_4.jpg"
import product_five from "../../assets/images/bannersHome/product_5.jpg"
import product_six from "../../assets/images/bannersHome/product_6.jpg"
import { Link } from "react-router-dom";

export const CarouselHome = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 359 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 359, min: 0 },
      items: 0,
      slidesToSlide: 0,
    },
  };

  return (
    <>
      <Carousel
        renderArrowsWhenDisabled={true}
        swipeable={true}
        draggable={true}
        showDots={true}
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
        focusOnSelect={true}
      >
        <Container>
          <Link to="/">
            <img src={product_one} alt="Produto 1" />
          </Link>
        </Container>
        <Container>
          <Link to="/">
            <img src={product_two} alt="Produto 2" />
          </Link>
        </Container>
        <Container>
          <Link to="/">
            <img src={product_three} alt="Produto 3" />
          </Link>
        </Container>
        <Container>
          <Link to="/">
            <img src={product_four} alt="Produto 4" />
          </Link>
        </Container>
        <Container>
          <Link to="/">
            <img src={product_five} alt="Produto 5" />
          </Link>
        </Container>
        <Container>
          <Link to="/">
            <img src={product_six} alt="Produto 6" />
          </Link>
        </Container>
      </Carousel>
    </>
  );
};
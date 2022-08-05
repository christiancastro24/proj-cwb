// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "./styles";

import feedbackone from "../../assets/images/feedbacks/feedback1.jpeg"
import feedbacktwo from "../../assets/images/feedbacks/feedback2.jpeg"
import feedbackthree from "../../assets/images/feedbacks/feedback3.jpeg"
import feedbackfour from "../../assets/images/feedbacks/feedback4.jpeg"
import feedbackfive from "../../assets/images/feedbacks/feedback5.jpeg"
import feedbacksix from "../../assets/images/feedbacks/feedback6.jpeg"
import feedbackseven from "../../assets/images/feedbacks/feedback7.jpeg"
import feedbackeight from "../../assets/images/feedbacks/feedback8.jpeg"
import feedbacknine from "../../assets/images/feedbacks/feedback9.jpeg"
import feedbackten from "../../assets/images/feedbacks/feedback10.jpeg"
import feedbackeleven from "../../assets/images/feedbacks/feedback11.jpeg"

import { Link } from "react-router-dom";
import { Header } from "../Home/styles";
import { Carousel } from 'react-carousel-minimal';


export const CarouselFeedbacks = () => {
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

  const styleH1 = {textAlign: 'center', margin: "1rem", fontSize: "3rem", fontFamily: "Anton, sansSerif", color: "#f08fa9"}

  const data = [
    {
      image: feedbackfive,  
    },

    {
      image: feedbacksix,
    },
    
    {
      image: feedbackeight,
    },

    {
      image: feedbackten,
    },

    {
      image: feedbackeleven,
    },
    
    {
      image: feedbacksix,
    },

    {
      image: feedbackone,
    },

    {
      image: feedbacktwo,
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <>
      <h1 style={styleH1}>Feedbacks</h1>
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="900px"
            height="550px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="70px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "550px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
      <br /><br /><br /><br />

        <Header>
                Copyright © 2022 RC Digital, Todos os direitos reservados.
        </Header>

    </>
  );
};
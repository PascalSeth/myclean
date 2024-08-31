'use client';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideProps {
  imgSrc: string;
  altText: string;
}

const slides: SlideProps[] = [
  { imgSrc: 'https://images.unsplash.com/photo-1650112274147-03a2dba421c8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', altText: 'Slide 1' },
  { imgSrc: 'https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', altText: 'Slide 2' },
  { imgSrc: 'https://images.unsplash.com/photo-1594741243587-90ef02c1dc68?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', altText: 'Slide 3' },
  { imgSrc: 'https://www.graphic.com.gh/images/2021/oct/26/aboboyaa3.jpg', altText: 'Slide 3' },

];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="max-w-5xl p-3 mx-auto max-lg:max-w-6xl rounded-[1pc] ">
      <Slider {...settings}> 
        {slides.map((slide, index) => (
          <div key={index} className="flex justify-center rounded-[1pc] items-center">
            <img
              src={slide.imgSrc}
              alt={slide.altText}
              className="w-full h-[450px] max-lg:h-[250px] object-fill rounded-[1pc]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

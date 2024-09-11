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
  { imgSrc: 'https://plus.unsplash.com/premium_photo-1663088881507-209dbbb1fbc7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', altText: 'Slide 1' },
  { imgSrc: 'https://plus.unsplash.com/premium_photo-1663090499721-c10bd6b4ca37?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', altText: 'Slide 2' },
  { imgSrc: 'https://cdn.prod.website-files.com/60ae9cd7684cf5b2b3152b77/6113a766155f9f9a68293f1e_d27f63ce-4808-43d6-bd44-35cf406fb132.jpeg', altText: 'Slide 3' },
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

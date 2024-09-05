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
  { imgSrc: 'https://i.pinimg.com/236x/00/7c/dd/007cdd95e91c80c70160ed85303ec917.jpg', altText: 'Slide 1' },
  { imgSrc: 'https://i.pinimg.com/236x/27/29/2f/27292faf4a643bea23ce3feb3d33eff8.jpg', altText: 'Slide 2' },
  { imgSrc: 'https://i.pinimg.com/236x/f8/5e/bd/f85ebd5ffe471d1657fae22ed15f2f82.jpg', altText: 'Slide 3' },
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

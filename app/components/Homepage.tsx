import React from 'react';
import Hero from './Hero';
import Destinations from './Destination';
import Carousel from './Carousel';
import OurPartners from './Partners';
import ContactUs from './ContactUs';
import Features from './Features';

type Props = {};

const Homepage: React.FC<Props> = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <main className="">
                <Destinations />
                <Carousel />
                <OurPartners/>
                   <Features/>
 <ContactUs/>
            
      </main>
    </div>
  );
}

export default Homepage;

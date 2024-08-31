'use client'
import React from 'react';

interface DestinationProps {
  title: string;
  description: string;
  imgSrc: string;
}

const destinations: DestinationProps[] = [
  {
    title: 'Residential Waste',
    description: 'Manage household garbage effectively with scheduled pickups and proper waste segregation.',
    imgSrc: 'https://i.pinimg.com/originals/6f/2f/62/6f2f626258a9cfadb1f8508848de646d.jpg',
  },
  {
    title: 'Commercial Waste',
    description: 'Handle waste from commercial establishments with our efficient and scalable solutions.',
    imgSrc: 'https://i.pinimg.com/originals/a4/57/86/a457869e5f6403ad4bfac7cd6173f79f.jpg',
  },
  {
    title: 'Recycling',
    description: 'Promote recycling by sorting waste materials into recyclable and non-recyclable bins.',
    imgSrc: 'https://i.pinimg.com/originals/74/b7/3e/74b73e3cac06cfa5e08735dd6053a173.jpg',
  },
];

const Destination: React.FC<DestinationProps> = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-white shadow-lg rounded-[2pc] p-4">
      <div className="relative">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover hover:scale-105 hover:cursor-pointer rounded-[1pc]" />
        <button className="absolute top-2 left-2 bg-black text-white text-xs py-1 px-2 rounded">Try it now</button>
      </div>
      <h3 className="text-xl text-[#0A8791] font-bold mt-4">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
}

const Destinations: React.FC = () => {
  return (
    <section className="max-w-6xl  mx-auto p-8 h-fit">
      <h2 className="text-3xl text-[#0A8791] font-bold mb-4">Garbage Collection Services</h2>
      <p className="text-lg mb-8">Explore the various services we offer to keep your environment clean and green.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <Destination
            key={index}
            title={dest.title}
            description={dest.description}
            imgSrc={dest.imgSrc}
          />
        ))}
      </div>
   
    </section>
  );
}

export default Destinations;

import React from 'react';

type Props = {}

function Hero({}: Props) {
  return (
    <section className="flex h-fit mx-20 shadow-black max-lg:mx-2 rounded-[2pc] items-center justify-center p-8 bg-gradient-to-r from-gray-400 to-black ">
      <div className="max-w-xl text-white mr-16 max-lg:w-full max-lg:mr-0
       ">
        <h1 className="text-4xl font-bold mb-4">Keep Your City Clean with MyCleanApp</h1>
        <p className="text-lg mb-6">
          MyCleanApp is your go-to solution for efficient garbage collection. We make sure your neighborhood stays clean and green with reliable sanitation services.
        </p>
        <div className="flex space-x-4 mb-4">
          <button className="bg-[#0A8791] font-semibold text-white px-4 py-2 rounded-[1pc]">Get the App</button>
          <button className="bg-transparent text-white border border-white px-4 py-2 rounded-md">More</button>
        </div>
        <div className="flex p-5 space-x-10">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">4.8</p>
            <p className="text-sm font-semibold">Rating on AppStore</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">700k+</p>
            <p className="text-sm font-semibold">Active users</p>
          </div>
        </div>      </div>
      <div className="hidden md:block">
        <img src="/g1.png" alt="App preview" className="max-w-xs"/>
      </div>
      
    </section>
    
  );
}

export default Hero;

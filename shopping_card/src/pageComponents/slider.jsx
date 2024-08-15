import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/bike_one.jpg',
    '/bike_two.jpg',
    '/bike_three.jpg',
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically switch images every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full max-w-4xl overflow-hidden rounded shadow-xl">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div className="w-full flex-shrink-0 relative" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto block" />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="relative flex h-12 w-12">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-99">Explore</span>
                <span className="relative inline-flex rounded-full h-10 w-14 bg-sky-500 flex items-center justify-center text-white text-sm font-semibold"><Link to="/store" className=" text-gray-100 m-7 ">SHOP</Link></span>
              </span>
            </button>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ImageSlider;

import React, { useState } from 'react';

const images = [
  {
    src: 'https://ibb.co.com/6RxrTNX',
    alt: 'Scenic view of a landscape with mountains and a lake',
  },
  {
    src: 'https://ibb.co.com/6RxrTNX',
    alt: 'Forest with tall trees and sunlight filtering through',
  },
  {
    src: 'https://ibb.co.com/6RxrTNX',
    alt: 'Mountain range with a cloudy sky',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://placehold.co/800x600')` }}></div>

      <div className="relative z-10 text-white p-8">
        <h1 className="text-5xl font-bold">AUSTRALIA</h1>
        <p className="mt-4 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</p>
        <button className="mt-4 px-6 py-2 bg-white text-gray-900 font-semibold rounded">See More</button>
      </div>

      <div className="relative z-10">
        <div className="carousel flex overflow-hidden scroll-snap-type-x-mandatory">
          {images.map((image, index) => (
            <div key={index} className="carousel-item flex-none scroll-snap-align-start transition-transform duration-500">
              <img
                src={image.src}
                alt={image.alt}
                className="h-72 w-72 rounded-lg"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              />
            </div>
          ))}
        </div>

        <div className="carousel-controls flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 bg-white rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-500' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button onClick={prevSlide} className="bg-white p-2 rounded-full">
          <i className="fas fa-chevron-left text-gray-800"></i>
        </button>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button onClick={nextSlide} className="bg-white p-2 rounded-full">
          <i className="fas fa-chevron-right text-gray-800"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

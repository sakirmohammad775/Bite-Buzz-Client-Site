import React, { useState } from 'react';

const images = [
  {
    src: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-o6BZi9hpBuG4tjS9TTDcSZBx.png?st=2024-09-27T14%3A41%3A39Z&se=2024-09-27T16%3A41%3A39Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-26T23%3A05%3A41Z&ske=2024-09-27T23%3A05%3A41Z&sks=b&skv=2024-08-04&sig=ZkfokoNNDSP/Md/o7IdZxu3rLr7%2BuX3cputMHIIesc4%3D',
    alt: 'Scenic view of a landscape with mountains and a lake',
  },
  {
    src: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-ifh3Ld9Mj3iXOJRm6WdlxmhH.png?st=2024-09-27T14%3A41%3A35Z&se=2024-09-27T16%3A41%3A35Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-26T23%3A16%3A49Z&ske=2024-09-27T23%3A16%3A49Z&sks=b&skv=2024-08-04&sig=MWxI4QZ2B8Y8owOGvdLxTmzR1EAct9vufAu/NnImVwQ%3D',
    alt: 'Forest with tall trees and sunlight filtering through',
  },
  {
    src: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-NhqD9q7qGCD0MA6jyVdTWqgs.png?st=2024-09-27T14%3A41%3A32Z&se=2024-09-27T16%3A41%3A32Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-26T23%3A15%3A42Z&ske=2024-09-27T23%3A15%3A42Z&sks=b&skv=2024-08-04&sig=CPL3QBKxXUyWoSTDq4AuA8eT4uWTnrHLs3tvI/3wa8o%3D',
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
        <p className="mt-4 text-lg">Lorem ipsum dolor,I sit amet consectetur adipisicing elit. Ab, eum!</p>
        <p className="mt-4 text-lg">Lorem ipsum dolor,I sit amet consectetur adipisicing elit. Ab, eum!</p>
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

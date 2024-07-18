import React, { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSetIndex = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div className="flex gap-x-1 absolute left-[49%] right-[49%] top-[89%] bottom-[9%] z-50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSetIndex(index)}
          >
            <hr
              className={`outline-none h-1 w-5 ${
                currentIndex === index ? "bg-red-900" : "bg-slate-900"
              } `}
            />
          </button>
        ))}
      </div>

      <div className="relative w-full h-64 flex transition-transform duration-500 ease-in-out -z-10" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
            style={{ width: '100%' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

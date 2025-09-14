import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CarouselCustom() {
  const slides = [
    {
      id: 1,
      title: "Restaurant 1",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Restaurant 2",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Restaurant 3",
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Restaurant 4",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Restaurant 5",
      image:
        "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=500&h=300&fit=crop",
    },
  ];

  // Start from the middle set of duplicated slides for infinite effect
  const [currentSlide, setCurrentSlide] = useState(slides.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentSlide(slides.length + index);
  };

  // Handle infinite loop reset
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      // Reset to middle set when reaching boundaries
      if (currentSlide >= slides.length * 2) {
        setCurrentSlide(slides.length);
      } else if (currentSlide < slides.length) {
        setCurrentSlide(slides.length * 2 - 1);
      }
    };

    const timer = setTimeout(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
      }
    }, 600);

    if (currentSlide >= slides.length * 2 || currentSlide < slides.length) {
      const resetTimer = setTimeout(handleTransitionEnd, 500);
      return () => clearTimeout(resetTimer);
    }

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length, isTransitioning]);

  return (
    <div className="relative w-full py-8">
      <div className="relative max-w-[1800px] mx-auto">
        <div className="overflow-hidden mx-auto" style={{ width: "1800px" }}>
          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-500 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${currentSlide * 600}px)`,
              gap: "24px",
            }}
          >
            {/* Create infinite loop by duplicating slides */}
            {[...slides, ...slides, ...slides].map((slide, index) => {
              const position = index - currentSlide;
              const isCenterCard = position === 1;

              return (
                <div
                  key={`${slide.id}-${Math.floor(index / slides.length)}`}
                  className={`flex-shrink-0 transition-all duration-300 cursor-pointer ${
                    isCenterCard
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-60 scale-95 z-0"
                  }`}
                  style={{ width: "576px" }}
                  onClick={() => goToSlide(index % slides.length)}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border-none">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-20"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-20"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-200 ${
              currentSlide % slides.length === index
                ? "bg-orange-500 w-8"
                : "bg-gray-300 hover:bg-gray-400 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselCustom;

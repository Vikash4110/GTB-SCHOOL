import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Correct image imports
import HeroImg1 from "../assets/hero_img1.jpg";
import HeroImg2 from "../assets/hero_img2.jpg";
import HeroImg3 from "../assets/hero_img3.jpg";
import HeroImg4 from "../assets/hero_img4.jpg";
import HeroImg5 from "../assets/hero_img5.jpg";

const slides = [
  {
    image: HeroImg1,
    title: "Welcome to GTB World School",
    subtitle: "Nurturing Future Leaders in Guru Har Sahai",
  },
  {
    image: HeroImg2,
    title: "Empowering Education",
    subtitle: "Inspiring Excellence in Every Student",
  },
  {
    image: HeroImg3,
    title: "Holistic Development",
    subtitle: "Fostering Creativity and Innovation",
  },
  {
    image: HeroImg4,
    title: "A Vibrant Community",
    subtitle: "Building Lifelong Connections",
  },
  {
    image: HeroImg5,
    title: "Excellence in Action",
    subtitle: "Preparing Students for a Global Future",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slide wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-[600px] relative">
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition"
      >
        <FaArrowLeft className="text-black text-lg" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition"
      >
        <FaArrowRight className="text-black text-lg" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

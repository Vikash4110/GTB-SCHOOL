import React, { useEffect } from "react";
import AOS from "aos";
import HeroSection from "../Components/Home";
import MainHero from "../Components/MainHero";
import FeatureSection from "../Components/Feature";
import AcademicsSection from "../Components/AcademicSection";
import Stats from "../Components/Stats";
import GallerySection from "../Components/GallerySection";
import AboutHome from "../Components/AboutHome";
import Mandatory from "../Components/Mandatory";
import Footer from "../Components/Footer";
import "aos/dist/aos.css";

const Home = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <HeroSection/>
      <MainHero/>
      <FeatureSection/>
      <Stats/>
      <AboutHome/>
      <AcademicsSection/>
      <GallerySection/>
      <Footer/>
    </>
  );
};

export default Home;
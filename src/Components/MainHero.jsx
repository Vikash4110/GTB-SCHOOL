import React from 'react';
import Logo from '../assets/hero_img5.jpg'

const MainHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-20 w-8 h-8 bg-yellow-400 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-white rounded-full animate-float-delay"></div>
      
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center relative z-10">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10">
          <div className="mb-6">
            <span className="inline-block bg-yellow-400 text-blue-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              EST. 1993
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Excellence in <span className="text-yellow-400">Education</span> at GTB Cambridge
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-lg">
              A premier educational institution in Guruharsahai offering Cambridge curriculum to shape global citizens of tomorrow.
            </p>
          </div>
          {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#admissions"
              className="bg-yellow-400 text-blue-900 font-semibold px-8 py-4 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
            >
              Apply for Admission
            </a>
            <a
              href="#virtual-tour"
              className="bg-white bg-opacity-10 backdrop-blur-sm border-2 border-white border-opacity-30 text-white font-semibold px-8 py-4 rounded-full hover:bg-opacity-20 transition duration-300 transform hover:scale-105 text-center"
            >
              Virtual Tour
            </a>
          </div> */}
          
          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">25+</div>
              <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">98%</div>
              <div className="text-sm uppercase tracking-wider">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">100+</div>
              <div className="text-sm uppercase tracking-wider">Qualified Staff</div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Image with frame */}
        <div className="md:w-1/3 relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
            <img
              src={Logo}
              alt="Students at GTB Cambridge World School"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="text-white text-xl font-bold">GTB Cambridge</div>
              <div className="text-yellow-300">Internationally Recognized Education</div>
            </div>
          </div>
          
          {/* Accreditation badges */}
          <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="text-blue-900 font-bold text-sm">Accredited by:</div>
              <div className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">Cambridge</div>
              <div className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">CBSE</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default MainHero;
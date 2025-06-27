import Main from '../assets/main.jpg'

const AboutSection = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={Main}
                  alt="GTB  World School Campus"
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-8 -right-8 bg-yellow-500 text-blue-900 p-6 rounded-lg shadow-lg w-64">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-lg font-semibold">Years of Educational Excellence</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                ABOUT OUR SCHOOL
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Welcome to <span className="text-yellow-600">GTB </span> World School
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 1995, GTB  World School in Guruharsahai, Ferozepur has been a beacon of quality education, combining traditional values with modern teaching methodologies.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold"> International Curriculum</span> - Preparing students for IGCSE and A-Level examinations
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Holistic Development</span> - Focus on academics, sports, arts, and personality development
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Safe & Supportive Environment</span> - Child-friendly infrastructure with 24/7 security
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="/about"
                  className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition duration-300 text-center"
                >
                  Learn More About Us
                </a>
             
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
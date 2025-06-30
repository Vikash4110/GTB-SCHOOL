import React from "react";
import { FaAward, FaBookOpen, FaGraduationCap, FaUsers } from "react-icons/fa";
import faculty from "../assets/hero_img2.jpg";

const AboutUs = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Institution
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the legacy, values, and excellence that define GTB World
            School
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
      </section>

      {/* School Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                OUR STORY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Shaping Futures Since{" "}
                <span className="text-yellow-600">1995</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Established in 1995, GTB World School in Guru Har Sahai,
                Ferozepur has been a beacon of quality education, combining
                traditional values with modern teaching methodologies to nurture
                global citizens.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our institution is recognized as one of Punjab's premier
                educational establishments, offering the International
                Curriculum alongside holistic development programs that prepare
                students for success in an interconnected world.
              </p>
              {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="/admissions"
                  className="px-8 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-full hover:bg-yellow-400 transition duration-300 text-center"
                >
                  Join Our Community
                </a>
                <a
                  href="/virtual-tour"
                  className="px-8 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition duration-300 text-center"
                >
                  Virtual Campus Tour
                </a>
              </div> */}
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={faculty}
                  alt="GTB  World School Campus"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Guiding <span className="text-yellow-600">Principles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The foundation upon which we build excellence in education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-yellow-500 text-4xl mb-4">
                <FaAward />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be recognized as a center of educational excellence that
                empowers students to become compassionate leaders, innovative
                thinkers, and responsible global citizens who contribute
                meaningfully to society.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-yellow-500 text-4xl mb-4">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To provide a transformative learning experience through the
                curriculum, fostering academic excellence, character
                development, and 21st-century skills in a nurturing environment
                that celebrates diversity and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              WHAT WE STAND FOR
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Core <span className="text-yellow-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The ethical foundation that guides our community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl mb-4 text-yellow-500" />,
                title: "Integrity",
                description:
                  "We uphold the highest standards of honesty and ethical behavior in all our actions.",
              },
              {
                icon: <FaBookOpen className="text-4xl mb-4 text-yellow-500" />,
                title: "Excellence",
                description:
                  "We strive for the highest quality in all aspects of teaching, learning, and administration.",
              },
              {
                icon: (
                  <FaGraduationCap className="text-4xl mb-4 text-yellow-500" />
                ),
                title: "Respect",
                description:
                  "We value diversity and treat all individuals with dignity and compassion.",
              },
              {
                icon: <FaAward className="text-4xl mb-4 text-yellow-500" />,
                title: "Innovation",
                description:
                  "We embrace creativity and progressive thinking to prepare students for the future.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover:transform hover:-translate-y-2 transition duration-300"
              >
                {value.icon}
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              MEET OUR LEADERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              School <span className="text-yellow-600">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced educators guiding our institution's vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Harpreet Singh",
                role: "Principal",
                bio: "With over 25 years in education, Dr. Singh has transformed our academic programs with his visionary leadership.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              },
              {
                name: "Mrs. Rajinder Kaur",
                role: "Vice Principal",
                bio: "Specializing in student welfare, Mrs. Kaur ensures our supportive learning environment thrives.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              },
              {
                name: "Mr. Amanpreet Sharma",
                role: "Head of Academics",
                bio: "Cambridge curriculum expert who oversees our rigorous academic standards and teacher development.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">{leader.name}</h3>
                  <div className="text-yellow-600 font-medium mb-3">{leader.role}</div>
                  <p className="text-gray-700">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Accreditation Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              RECOGNITION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our <span className="text-yellow-600">Accreditations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality assurance from leading educational bodies
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { 
                name: "Cambridge Assessment International Education",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Cambridge_Assessment_International_Education_logo.svg/1200px-Cambridge_Assessment_International_Education_logo.svg.png",
                width: "180px"
              },
              { 
                name: "Punjab School Education Board",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Punjab_School_Education_Board_Logo.png/150px-Punjab_School_Education_Board_Logo.png",
                width: "120px"
              },
              { 
                name: "International School Award",
                image: "https://www.britishcouncil.org/sites/default/files/isa_logo_0.png",
                width: "150px"
              }
            ].map((accreditation, index) => (
              <div key={index} className="flex flex-col items-center">
                <img 
                  src={accreditation.image} 
                  alt={accreditation.name}
                  style={{ width: accreditation.width }}
                  className="h-20 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
                <div className="mt-4 text-sm text-gray-600 text-center">{accreditation.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the <span className="text-yellow-400">GTB Cambridge</span> Difference
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Schedule a campus visit to see firsthand how we're shaping the future leaders of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Book a Visit
            </a>
            <a
              href="/admissions"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition duration-300"
            >
              Admission Enquiry
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;

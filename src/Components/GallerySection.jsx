import Culture1 from '../assets/culture1.jpg';
import Yoga from '../assets/yoga-day.jpeg'
import Celebration from '../assets/celeb.jpg'
import Student from '../assets/students.jpg'
import Academics from '../assets/academics.jpeg'
import Stud from '../assets/stud.jpg'


const GallerySection = () => {
    const galleryImages = [
      {
        src: Academics,
        alt: "Academics",
        category: "Academics"
      },
      {
        src: Student,
        alt: "Students",
        category: "Classrooms"
      },
      {
        src: Culture1,
        alt: "Sports day event",
        category: "Culture"
      },
      {
        src: Celebration,
        alt: "Cultural performance",
        category: "Inaugration"
      },
      {
        src: Stud,
        alt: "Group project work",
        category: "Students"
      },
      {
        src: Yoga,
        alt: "School building",
        category: "Yoga Day"
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              SCHOOL LIFE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Moments at <span className="text-yellow-600">GTB Cambridge</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the vibrant life at our school through these glimpses of daily activities and special events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                  <div>
                    <div className="text-white font-bold text-lg">{image.category}</div>
                    <div className="text-yellow-300">View More</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-full hover:bg-blue-900 hover:text-white transition duration-300"
            >
              View Full Gallery
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default GallerySection;
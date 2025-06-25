import React, { useState } from 'react';
import {  FaSearch, 
  FaChevronLeft, 
  FaChevronRight, 
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin } from 'react-icons/fa';

const Gallery = () => {
  // Sample gallery images with categories
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      alt: "Students in classroom",
      category: "Academics",
      title: "Interactive Learning Session"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1351&q=80",
      alt: "Science lab activity",
      category: "STEM",
      title: "Science Lab Experiment"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      alt: "Sports day event",
      category: "Sports",
      title: "Annual Sports Day 2023"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      alt: "Cultural performance",
      category: "Arts",
      title: "Cultural Fest Performance"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1351&q=80",
      alt: "Group project work",
      category: "Collaboration",
      title: "Student Team Project"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      alt: "School building",
      category: "Campus",
      title: "Our School Campus"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      alt: "Library reading",
      category: "Academics",
      title: "Library Reading Time"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1571260898934-0df96089ee58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      alt: "Art exhibition",
      category: "Arts",
      title: "Student Art Exhibition"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      alt: "Computer lab",
      category: "STEM",
      title: "Computer Lab Session"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1351&q=80",
      alt: "Classroom discussion",
      category: "Academics",
      title: "Group Discussion"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      alt: "Meeting with teachers",
      category: "Academics",
      title: "Teacher-Parent Meeting"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1352&q=80",
      alt: "School bus",
      category: "Transport",
      title: "School Transport"
    }
  ];

  // State for lightbox
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories
  const categories = ["All", ...new Set(galleryImages.map(item => item.category))];

  // Filter images based on category and search term
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = filter === "All" || image.category === filter;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         image.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Lightbox navigation
  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentIndex + 1) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">School Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore moments from our vibrant school life and activities
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Gallery Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === category ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search gallery..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    <div>
                      <span className="inline-block bg-yellow-500 text-blue-900 text-xs font-bold px-2 py-1 rounded-full mb-1">
                        {image.category}
                      </span>
                      <h3 className="text-white font-bold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found matching your criteria</p>
            </div>
          )}

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <button 
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              
              <button 
                className="absolute left-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
                onClick={() => navigateImage('prev')}
              >
                <FaChevronLeft />
              </button>
              
              <div className="max-w-4xl w-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain"
                />
                <div className="bg-white p-4">
                  <h3 className="text-xl font-bold text-blue-900">{selectedImage.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">
                      {selectedImage.category}
                    </span>
                    <p className="text-gray-600 text-sm">
                      {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                    </p>
                  </div>
                </div>
              </div>
              
              <button 
                className="absolute right-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
                onClick={() => navigateImage('next')}
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to see more of our school life?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Follow us on social media for daily updates and events
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-yellow-400 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
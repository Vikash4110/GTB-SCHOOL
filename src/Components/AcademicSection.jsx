const AcademicsSection = () => {
    const programs = [
      {
        title: "Early Years",
        age: "3-5 Years",
        description: "Play-based learning that nurtures curiosity and develops foundational skills.",
        icon: "👶"
      },
      {
        title: "Primary School",
        age: "6-10 Years",
        description: "Cambridge Primary curriculum focusing on core subjects and creative thinking.",
        icon: "✏️"
      },
      {
        title: "Middle School",
        age: "11-13 Years",
        description: "Cambridge Lower Secondary program with subject specialists and project-based learning.",
        icon: "📚"
      },
      {
        title: "Secondary School",
        age: "14-16 Years",
        description: "Cambridge Upper Secondary leading to IGCSE qualifications with diverse subject options.",
        icon: "🎓"
      }
    ];
  
    return (
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              OUR ACADEMIC PROGRAMS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nurturing <span className="text-yellow-400">Young Minds</span> at Every Stage
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Our comprehensive Cambridge curriculum is designed to challenge and inspire students at all levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <div className="text-yellow-300 font-medium mb-3">{program.age}</div>
                <p className="text-blue-100">{program.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/academics"
              className="inline-flex items-center px-8 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Explore Our Curriculum
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default AcademicsSection;
const StatsSection = () => {
    const stats = [
      { value: "25+", label: "Years of Excellence" },
      { value: "98%", label: "Pass Rate" },
      { value: "100+", label: "Qualified Staff" },
      { value: "2000+", label: "Successful Alumni" }
    ];
  
    return (
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-lg text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
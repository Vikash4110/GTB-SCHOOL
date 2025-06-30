import Logo from "../assets/logo-Picsart-AiImageEnhancer copy.jpg";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Mandatory Disclosure", path: "/mandatory" },
    { name: "Contact Us", path: "/contact" },
  ];

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      ),
      text: "Guru Har Sahai Mukatsar Road, New Modal Town, Ferozpur,   Punjab - 152022",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          ></path>
        </svg>
      ),
      text: "+91 9855430984",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      text: "gtbschool794@gmail.com",
    },
  ];

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src={Logo}
                alt="GTB Cambridge World School Logo"
                className="h-12 mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">GTB World School</h3>
                <p className="text-sm text-blue-200">
                  Guru Har Sahai, Ferozepur
                </p>
              </div>
            </div>
            <p className="text-blue-200 mb-6">
              A premier educational institution offering Cambridge curriculum to
              shape global citizens since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-blue-200 hover:text-white transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 mr-3 text-yellow-400">{item.icon}</span>
                  <span className="text-blue-200">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GTB Cambridge World School. All Rights
            Reserved.
          </p>
          {/* <div className="flex space-x-6">
            <a href="#" className="text-blue-300 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm">Sitemap</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

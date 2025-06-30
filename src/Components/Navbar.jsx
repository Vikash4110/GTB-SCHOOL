import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-Picsart-AiImageEnhancer copy.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  // Function to handle external link clicks
  const handleExternalLink = (url) => {
    window.open(url, "_blank");
    setIsOpen(false); // Close mobile menu if open
  };

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Mandatory Disclosure",
      path: "/mandatory",
      // submenu: [
      //   {
      //     name: 'Prospectus',
      //     action: () => handleExternalLink('https://drive.google.com/file/d/1DGdxN_xv0Wp43xHgUPkNwU6QBAt0iuug/view?usp=sharing')
      //   },
      //   {
      //     name: 'Land Certificate',
      //     action: () => handleExternalLink('https://drive.google.com/file/d/1mUku4-AdQVZPz9Kpp2z6TEJY7ZnfR0AV/view?usp=sharing')
      //   },
      //   {
      //     name: 'Bank Certificate',
      //     action: () => handleExternalLink('https://drive.google.com/file/d/1Dp6gx_soAX1fyCXyWrwZ9EGIEDYLyfEv/view?usp=sharing')
      //   },
      //   {
      //     name: 'NOC',
      //     action: () => handleExternalLink('https://drive.google.com/file/d/1WMxdEEmKbk7JdAtu8aV7npF2TJRy14Z9/view?usp=sharing')
      //   }
      // ]
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="GTB Public School Logo"
                className="h-12 mr-3"
              />
              <div>
                <h1 className="text-xl font-bold text-blue-900">
                  G.T.B. Public School
                </h1>
                <p className="text-xs text-gray-600">
                  Guru Har Sahai, Ferozepur
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="px-4 py-2 text-blue-900 hover:text-yellow-600 font-medium flex items-center"
                    >
                      {item.name}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
                        dropdownOpen === index ? "block" : "hidden"
                      } group-hover:block`}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={subItem.action}
                          className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="px-4 py-2 text-blue-900 hover:text-yellow-600 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full px-4 py-2 text-left text-blue-900 font-medium flex justify-between items-center"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            dropdownOpen === index ? "transform rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      {dropdownOpen === index && (
                        <div className="pl-6 py-2 space-y-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              onClick={subItem.action}
                              className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-blue-900 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

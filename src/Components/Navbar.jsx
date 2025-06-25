// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { 
//   FaBars, 
//   FaTimes, 
//   FaPhoneAlt, 
//   FaInstagram, 
//   FaFacebook, 
//   FaChevronDown, 
//   FaHome, 
//   FaStethoscope, 
//   FaInfoCircle, 
//   FaUsers, 
//   FaEnvelope, 
//   FaCalendarCheck, 
//   FaBaby, 
//   FaXRay, 
//   FaFemale, 
//   FaHeartbeat 
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Logo from '../assets/logo-Picsart-AiImageEnhancer copy.jpg'


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesDropdown, setServicesDropdown] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleServices = () => setServicesDropdown(!servicesDropdown);

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   // Animation variants
//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//   };

//   const mobileMenuVariants = {
//     hidden: { height: 0, opacity: 0 },
//     visible: { height: "auto", opacity: 1, transition: { duration: 0.4 } },
//   };

//   return (
//     <motion.header
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-[#1E3A8A] text-white shadow-lg sticky top-0 z-50"
//       data-aos="fade-down"
//     >
//       <div className="container mx-auto px-4 py-4">
//         {/* Desktop Navbar */}
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <motion.div
//   initial={{ opacity: 0, x: -20 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.5 }}
// >
//   <Link to="/" className="text-3xl font-['Poppins'] font-bold flex items-center">
//     <img src={Logo} alt="Logo" className="h-14 w-auto" />
//   </Link>
// </motion.div>


//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link
//               to="/"
//               className="flex items-center text-lg font-['Inter'] font-medium hover:text-[#10B981] transition-colors duration-300"
//             >
//               <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
//                 <FaHome className="mr-2" />
//               </motion.div>
//               <motion.span whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
//                 Home
//               </motion.span>
//             </Link>

//             {/* Services Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={toggleServices}
//                 className="flex items-center text-lg font-['Inter'] font-medium hover:text-[#10B981] transition-colors duration-300"
//               >
//                 <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
//                   <FaStethoscope className="mr-2" />
//                 </motion.div>
//                 <motion.span whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
//                   Services
//                 </motion.span>
//                 <FaChevronDown className={`ml-2 transform ${servicesDropdown ? "rotate-180" : ""} transition-transform duration-300`} />
//               </button>
//               {servicesDropdown && (
//                 <motion.div
//                   variants={dropdownVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="absolute left-0 mt-4 w-64 bg-white text-gray-700 shadow-xl rounded-lg py-2 z-50"
//                 >
//                   <Link
//                     to="/ultrasound"
//                     className="flex items-center px-4 py-2 hover:bg-[#10B981] hover:text-white transition-colors duration-200"
//                     onClick={toggleServices}
//                   >
//                     <FaBaby className="mr-2" />
//                     3D/4D Ultrasound
//                   </Link>
//                   <Link
//                     to="/ctscan"
//                     className="flex items-center px-4 py-2 hover:bg-[#10B981] hover:text-white transition-colors duration-200"
//                     onClick={toggleServices}
//                   >
//                     <FaXRay className="mr-2" />
//                     CT Scan & Angiography
//                   </Link>
//                   <Link
//                     to="/memograpy"
//                     className="flex items-center px-4 py-2 hover:bg-[#10B981] hover:text-white transition-colors duration-200"
//                     onClick={toggleServices}
//                   >
//                     <FaFemale className="mr-2" />
//                     Digital Mammography
//                   </Link>
//                   <Link
//                     to="/ecg-eeg"
//                     className="flex items-center px-4 py-2 hover:bg-[#10B981] hover:text-white transition-colors duration-200"
//                     onClick={toggleServices}
//                   >
//                     <FaHeartbeat className="mr-2" />
//                     ECG/EEG
//                   </Link>
//                 </motion.div>
//               )}
//             </div>

//             <Link
//               to="/about"
//               className="flex items-center text-lg font-['Inter'] font-medium hover:text-[#10B981] transition-colors duration-300"
//             >
//               <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
//                 <FaInfoCircle className="mr-2" />
//               </motion.div>
//               <motion.span whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
//                 About Us
//               </motion.span>
//             </Link>
//             <Link
//               to="/our-team"
//               className="flex items-center text-lg font-['Inter'] font-medium hover:text-[#10B981] transition-colors duration-300"
//             >
//               <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
//                 <FaUsers className="mr-2" />
//               </motion.div>
//               <motion.span whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
//                 Our Team
//               </motion.span>
//             </Link>
//             <Link
//               to="/contact"
//               className="flex items-center text-lg font-['Inter'] font-medium hover:text-[#10B981] transition-colors duration-300"
//             >
//               <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
//                 <FaEnvelope className="mr-2" />
//               </motion.div>
//               <motion.span whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
//                 Contact
//               </motion.span>
//             </Link>

          
//           </nav>

//           {/* Mobile Hamburger */}
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={toggleMenu}
//             className="md:hidden text-white focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <motion.div
//             variants={mobileMenuVariants}
//             initial="hidden"
//             animate="visible"
//             className="md:hidden bg-[#1E3A8A] py-4 px-4 rounded-b-lg shadow-lg"
//           >
//             <Link
//               to="/"
//               className="flex items-center py-3 text-lg font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
//               onClick={toggleMenu}
//             >
//               <FaHome className="mr-2" />
//               Home
//             </Link>

//             <button
//               onClick={toggleServices}
//               className="w-full flex justify-between items-center py-3 text-lg font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
//             >
//               <div className="flex items-center">
//                 <FaStethoscope className="mr-2" />
//                 Services
//               </div>
//               <FaChevronDown className={`transform ${servicesDropdown ? "rotate-180" : ""} transition-transform duration-300`} />
//             </button>

//             {servicesDropdown && (
//               <div className="pl-6">
//                 <Link
//                   to="/ultrasound"
//                   className="flex items-center py-2 text-md font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
//                   onClick={() => { toggleServices(); toggleMenu(); }}
//                 >
//                   <FaBaby className="mr-2" />
//                   3D/4D Ultrasound
//                 </Link>
//                 <Link
//                   to="/ctscan"
//                   className="flex items-center py-2 text-md font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
//                   onClick={() => { toggleServices(); toggleMenu(); }}
//                 >
//                   <FaXRay className="mr-2" />
//                   CT Scan & Angiography
//                 </Link>
//                 <Link
//                   to="/memograpy"
//                   className="flex items-center py-2 text-md font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
//                   onClick={() => { toggleServices(); toggleMenu(); }}
//                 >
//                   <FaFemale className="mr-2" />
//                   Digital Mammography
//                 </Link>
//                 <Link
//                   to="/ecg-eeg"
//                   className="flex items-center py-2 text-md font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
//                   onClick={() => { toggleServices(); toggleMenu(); }}
//                 >
//                   <FaHeartbeat className="mr-2" />
//                   ECG/EEG
//                 </Link>
//               </div>
//             )}

//             <Link
//               to="/about"
//               className="flex items-center py-3 text-lg font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
//               onClick={toggleMenu}
//             >
//               <FaInfoCircle className="mr-2" />
//               About Us
//             </Link>
//             <Link
//               to="/our-team"
//               className="flex items-center py-3 text-lg font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
//               onClick={toggleMenu}
//             >
//               <FaUsers className="mr-2" />
//               Our Team
//             </Link>
//             <Link
//               to="/contact"
//               className="flex items-center py-3 text-lg font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
//               onClick={toggleMenu}
//             >
//               <FaEnvelope className="mr-2" />
//               Contact
//             </Link>

           
//           </motion.div>
//         )}
//       </div>
//     </motion.header>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-Picsart-AiImageEnhancer copy.jpg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      submenu: [
        { name: 'Our Story', path: '/about' },
        { name: 'Principal\'s Message', path: '/principal' },
        { name: 'Management', path: '/management' },
        { name: 'Vision & Mission', path: '/vision' }
      ]
    },
    { 
      name: 'Academics', 
      submenu: [
        { name: 'Curriculum', path: '/curriculum' },
        { name: 'Cambridge Program', path: '/cambridge' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Academic Calendar', path: '/calendar' }
      ]
    },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
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
                alt="GTB Cambridge World School Logo" 
                className="h-12 mr-3"
              />
              <div>
                <h1 className="text-xl font-bold text-blue-900">GTB Cambridge World School</h1>
                <p className="text-xs text-gray-600">Guruharsahai, Ferozepur</p>
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
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div 
                      className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${dropdownOpen === index ? 'block' : 'hidden'} group-hover:block`}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex} 
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                        >
                          {subItem.name}
                        </Link>
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
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-2 bg-yellow-500 text-blue-900 font-semibold rounded-full hover:bg-yellow-600 transition duration-300"
            >
              Enquire Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
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
                        <svg className={`w-4 h-4 transition-transform ${dropdownOpen === index ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      {dropdownOpen === index && (
                        <div className="pl-6 py-2 space-y-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link 
                              key={subIndex} 
                              to={subItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
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
              <Link 
                to="/contact" 
                className="mt-4 px-6 py-2 bg-yellow-500 text-blue-900 font-semibold rounded-full text-center hover:bg-yellow-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
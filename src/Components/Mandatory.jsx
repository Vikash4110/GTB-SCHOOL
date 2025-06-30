// import React from 'react';
// import { FaFilePdf, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

// const MandatoryDisclosure = () => {
//   // Certificate data with Google Drive links
//   const certificates = [
//     {
//       title: "Prospectus",
//       description: "Official school prospectus containing all academic information",
//       link: "https://drive.google.com/file/d/1DGdxN_xv0Wp43xHgUPkNwU6QBAt0iuug/view?usp=sharing",
//       type: "PDF",
//       size: "2.4 MB"
//     },
//     {
//       title: "Land Certificate",
//       description: "Document proving ownership of school land",
//       link: "https://drive.google.com/file/d/1mUku4-AdQVZPz9Kpp2z6TEJY7ZnfR0AV/view?usp=sharing",
//       type: "PDF",
//       size: "1.8 MB"
//     },
//     {
//       title: "Bank Certificate",
//       description: "Bank certification document for school accounts",
//       link: "https://drive.google.com/file/d/1Dp6gx_soAX1fyCXyWrwZ9EGIEDYLyfEv/view?usp=sharing",
//       type: "PDF",
//       size: "1.2 MB"
//     },
//     {
//       title: "NOC (No Objection Certificate)",
//       description: "Government issued No Objection Certificate",
//       link: "https://drive.google.com/file/d/1WMxdEEmKbk7JdAtu8aV7npF2TJRy14Z9/view?usp=sharing",
//       type: "PDF",
//       size: "3.1 MB"
//     },
//     {
//       title: "Affiliation Certificate",
//       description: "Certificate of affiliation with CBSE",
//       link: "https://drive.google.com/file/d/1vUaPo2cQqPlUYHtzfFKVl8k6ztBjgLbl/view?usp=sharingg",
//       type: "PDF",
//       size: "2.0 MB"
//     },
//     {
//         title: "Analysis Report of Water Samples",
//         description: "Water supply & sanitation District level water testing.",
//         link: "https://drive.google.com/file/d/1YJLXYBunPHfTzLKkSDwgQWHy6DjHHHaF/view?usp=sharing",
//         type: "PDF",
//         size: "1.5 MB"
//       },
//       {
//         title: "Certificate of Registration of Societies",
//         description: "Certificate of Registration of Societies",
//         link: "https://drive.google.com/file/d/1D8GLdxPFR-ythzkfxITu-hOCXN5Ox4MX/view?usp=sharing",
//         type: "PDF",
//         size: "1.5 MB"
//       },
//       {
//         title: "Safe Drinking Water and Sanitory Conditon Certificate",
//         description: "Performa Regrading Safe Drinking Water AND Sanitory Conditon Certificate",
//         link: "https://drive.google.com/file/d/1Cpca8TJBNKHSIlcMO2WpFf3eXmMblxmG/view?usp=sharing",
//         type: "PDF",
//         size: "1.5 MB"
//       }

//   ];

//   const handleDownload = (url) => {
//     window.open(url, '_blank');
//   };

//   return (
//     <div className="font-sans">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-24">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Mandatory Disclosures</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Official documents and certificates as required by education authorities
//           </p>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
//       </section>

//       {/* Certificates Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
//               LEGAL DOCUMENTS
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
//               School <span className="text-yellow-600">Certificates</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               All mandatory documents as per government and education board requirements
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {certificates.map((certificate, index) => (
//               <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div className="bg-blue-100 p-3 rounded-full mr-4">
//                       <FaFilePdf className="text-blue-900 text-2xl" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-blue-900">{certificate.title}</h3>
//                       <div className="flex items-center text-sm text-gray-500 mt-1">
//                         <span>{certificate.type}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 mb-6">{certificate.description}</p>
//                   <div className="flex justify-between items-center">
//                     <button
//                       onClick={() => handleDownload(certificate.link)}
//                       className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition duration-300"
//                     >
//                       <FaExternalLinkAlt className="mr-2" />
//                       View Document
//                     </button>

//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Additional Information */}
//           <div className="mt-16 bg-blue-50 rounded-xl p-8">
//             <h3 className="text-2xl font-bold text-blue-900 mb-4">About Mandatory Disclosures</h3>
//             <p className="text-gray-700 mb-4">
//               GTB Cambridge World School complies with all regulatory requirements for educational institutions.
//               These documents are made publicly available as per government guidelines and education board norms.
//             </p>
//             <p className="text-gray-700">
//               For any queries regarding these documents, please contact our administration office.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MandatoryDisclosure;

import React from "react";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const MandatoryDisclosure = () => {
  // General Information
  const generalInfo = [
    {
      label: "NAME OF THE SCHOOL",
      value: "G.T.B. Public School",
    },
    { label: "AFFILIATION NO.(IF APPLICABLE)", value: "1630785" },
    { label: "SCHOOL CODE (IF APPLICABLE)", value: "20759" },
    {
      label: "COMPLETE ADDRESS WITH PIN CODE",
      value:
        "Guru Har Sahai Mukatsar Road, New Modal Town,firozpur, PUNJAB - 152022",
    },
    { label: "PRINCIPAL NAME", value: "PARTAP SINGH" },
    { label: "PRINCIPAL QUALIFICATION", value: "B.A. B.ed., M.A. M.ed" },
    { label: "SCHOOL EMAIL ID", value: "GTBPUBLICSCHOOL794@GMAIL.COM" },
    { label: "CONTACT DETAILS (LANDLINE/MOBILE)", value: "9855430984" },
  ];

  // Documents and Information
  const documents = [
    {
      label:
        "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
      link: "https://drive.google.com/file/d/1vUaPo2cQqPlUYHtzfFKVl8k6ztBjgLbl/view?usp=sharingg",
    },
    {
      label:
        "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
      link: "https://drive.google.com/file/d/1D8GLdxPFR-ythzkfxITu-hOCXN5Ox4MX/view?usp=sharing",
    },
    {
      label:
        "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
      link: "https://drive.google.com/file/d/1WMxdEEmKbk7JdAtu8aV7npF2TJRy14Z9/view?usp=sharing",
    },
    {
      label:
        "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE",
      link: "https://drive.google.com/file/d/1sUyX0KqGSu8wfdgMWWG7WI8mLNUQrjpA/view?usp=sharing",
    },
    {
      label:
        "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
      link: "https://drive.google.com/file/d/14nvgZVHO-gDDqyWVt-9O-ys6w9fffotF/view?usp=sharing",
    },
    {
      label:
        "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
      link: "https://drive.google.com/file/d/13kwjjzEFM-KYtiNvj751RREJR-TqFqhC/view?usp=sharing",
    },
    {
      label:
        "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION",
      link: "https://drive.google.com/file/d/1AHemCH9p_ZnNJY9VItf2ugT_42lLPQpe/view?usp=sharing",
    },
    {
      label: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
      link: "https://drive.google.com/file/d/1lfmfKuElFkjtA8lWSrpGGRlhUGmKDFqX/view?usp=sharing",
    },
  ];

  // Result and Academics
  const academics = [
    {
      label: "FEE STRUCTURE OF THE SCHOOL",
      link: "https://drive.google.com/file/d/1iRwqh8b3FAHHb994349w9ordaB1bGDjy/view?usp=sharing",
    },
    {
      label: "ANNUAL ACADEMIC CALENDER",
      link: "https://drive.google.com/file/d/1ZoZZPgcV-WlRzNt4lPPJjKLUNYitq1kc/view?usp=sharing",
    },
    {
      label: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
      link: "https://drive.google.com/file/d/1bavg7ZpNlB12Hha6oP_kp2V7lx_wUv9m/view?usp=sharing",
    },
    {
      label: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
      link: "",
    },
    {
      label:
        "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
      link: "",
    },
  ];

  // Teaching Staff
  const teachingStaff = [
    { label: "PRINCIPAL", value: "PARTAP SINGH" },
    { label: "TOTAL NO. OF TEACHERS", value: "48" },
    { label: "PGT", value: "18" },
    { label: "TGT", value: "10" },
    { label: "PRT", value: "20" },
    { label: "TEACHERS SECTION RATIO", value: "1:15" },
    { label: "DETAILS OF SPECIAL EDUCATOR", value: "2" },
    {
      label: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER",
      value: "1",
    },
  ];

  // Results
  const classXResults = [
    {
      year: "2022",
      registered: "58",
      passed: "58",
      percentage: "100",
      remarks: "GOOD",
    },
  ];

  const classXIIResults = [
    {
      year: "2022",
      registered: "68",
      passed: "68",
      percentage: "100",
      remarks: "GOOD",
    },
  ];

  // Infrastructure
  const infrastructure = [
    { label: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)", value: "8159" },
    {
      label: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)",
      value: "64 & 27",
    },
    {
      label: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)",
      value: "8 & 26",
    },
    { label: "INTERNET FACILITY", value: "YES" },
    { label: "NO. OF GIRLS TOILETS", value: "2" },
    { label: "NO. OF BOYS TOILETS", value: "2" },
    {
      label:
        "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL",
      value: "https://youtu.be/mXCoT4K9dnU",
    },
  ];

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            MANDATORY PUBLIC DISCLOSURE
          </h1>
          <p className="text-sm mt-2">
            As per government and education board requirements
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* General Information */}
        <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-800 text-white px-6 py-4">
            <h2 className="text-xl font-bold">A : GENERAL INFORMATION</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {generalInfo.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                        {item.label}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Documents and Information */}
        <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-800 text-white px-6 py-4">
            <h2 className="text-xl font-bold">B : DOCUMENTS AND INFORMATION</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {documents.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 w-1/3">
                        {item.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <button
                          onClick={() => handleLinkClick(item.link)}
                          className="flex items-center hover:underline"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          {item.link}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-sm text-yellow-700 font-semibold">
                NOTE: THE SCHOOL NEEDS TO UPLOAD THE SELF ATTESTED COPIES OF
                ABOVE LISTED DOCUMENTS BY CHAIRMAN/MANAGER/SECRETARY AND
                PRINCIPAL. IN CASE, IT IS NOTICED AT LATER STAGE THAT UPLOADED
                DOCUMENTS ARE NOT GENUINE THEN SCHOOL SHALL BE LIABLE FOR ACTION
                AS PER NORMS.
              </p>
            </div>
          </div>
        </section>

        {/* Result and Academics */}
        <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-800 text-white px-6 py-4">
            <h2 className="text-xl font-bold">C : RESULT AND ACADEMICS</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {academics.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 w-1/3">
                        {item.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <button
                          onClick={() => handleLinkClick(item.link)}
                          className="flex items-center hover:underline"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          {item.link}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Staff (Teaching) */}
        <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-800 text-white px-6 py-4">
            <h2 className="text-xl font-bold">D : STAFF (TEACHING)</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {teachingStaff.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                        {item.label}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Results Tables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Class X Results */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-800 text-white px-6 py-4">
              <h2 className="text-xl font-bold">RESULT CLASS: X</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        YEAR
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        REGISTERED
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        PASSED
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        PERCENTAGE
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        REMARKS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {classXResults.map((result, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.year}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.registered}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.passed}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.percentage}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.remarks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Class XII Results */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-800 text-white px-6 py-4">
              <h2 className="text-xl font-bold">RESULT CLASS: XII</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        YEAR
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        REGISTERED
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        PASSED
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        PERCENTAGE
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        REMARKS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {classXIIResults.map((result, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.year}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.registered}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.passed}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.percentage}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.remarks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* School Infrastructure */}
        <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-800 text-white px-6 py-4">
            <h2 className="text-xl font-bold">E : SCHOOL INFRASTRUCTURE</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {infrastructure.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                        {item.label}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.label.includes("LINK") ? (
                          <button
                            onClick={() => handleLinkClick(item.value)}
                            className="flex items-center text-blue-600 hover:underline"
                          >
                            <FaExternalLinkAlt className="mr-2" />
                            {item.value}
                          </button>
                        ) : (
                          item.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-blue-800" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Address</h4>
                <p className="text-gray-700">
                  GTB Road, Guruharsahai Ferozepur, Punjab 152022 India
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaPhone className="text-blue-800" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Phone</h4>
                <p className="text-gray-700">+91 9855430984</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-blue-800" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Email</h4>
                <p className="text-gray-700">gtbschool794@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;

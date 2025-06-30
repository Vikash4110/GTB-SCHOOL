// import React from "react";
// import {
//   FaEnvelope,
//   FaExternalLinkAlt,
//   FaMapMarkerAlt,
//   FaPhone,
// } from "react-icons/fa";

// const MandatoryDisclosure = () => {
//   // General Information
//   const generalInfo = [
//     {
//       label: "NAME OF THE SCHOOL",
//       value: "G.T.B. Public School",
//     },
//     { label: "AFFILIATION NO.(IF APPLICABLE)", value: "1630785" },
//     { label: "SCHOOL CODE (IF APPLICABLE)", value: "20759" },
//     {
//       label: "COMPLETE ADDRESS WITH PIN CODE",
//       value:
//         "Guru Har Sahai Mukatsar Road, New Modal Town, Ferozpur, Punjab - 152022",
//     },
//     { label: "PRINCIPAL NAME", value: "PARTAP SINGH" },
//     { label: "PRINCIPAL QUALIFICATION", value: "B.A. B.ed., M.A. M.ed" },
//     { label: "SCHOOL EMAIL ID", value: "GTBPUBLICSCHOOL794@GMAIL.COM" },
//     { label: "CONTACT DETAILS (LANDLINE/MOBILE)", value: "9855430984" },
//   ];

//   // Documents and Information
//   const documents = [
//     {
//       label:
//         "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
//       link: "https://drive.google.com/file/d/1vUaPo2cQqPlUYHtzfFKVl8k6ztBjgLbl/view?usp=sharingg",
//     },
//     {
//       label:
//         "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
//       link: "https://drive.google.com/file/d/1D8GLdxPFR-ythzkfxITu-hOCXN5Ox4MX/view?usp=sharing",
//     },
//     {
//       label:
//         "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
//       link: "https://drive.google.com/file/d/1WMxdEEmKbk7JdAtu8aV7npF2TJRy14Z9/view?usp=sharing",
//     },
//     {
//       label:
//         "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE",
//       link: "https://drive.google.com/file/d/1sUyX0KqGSu8wfdgMWWG7WI8mLNUQrjpA/view?usp=sharing",
//     },
//     {
//       label:
//         "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
//       link: "https://drive.google.com/file/d/14nvgZVHO-gDDqyWVt-9O-ys6w9fffotF/view?usp=sharing",
//     },
//     {
//       label:
//         "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
//       link: "https://drive.google.com/file/d/13kwjjzEFM-KYtiNvj751RREJR-TqFqhC/view?usp=sharing",
//     },
//     {
//       label:
//         "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION",
//       link: "https://drive.google.com/file/d/1AHemCH9p_ZnNJY9VItf2ugT_42lLPQpe/view?usp=sharing",
//     },
//     {
//       label: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
//       link: "https://drive.google.com/file/d/1lfmfKuElFkjtA8lWSrpGGRlhUGmKDFqX/view?usp=sharing",
//     },
//   ];

//   // Result and Academics
//   const academics = [
//     {
//       label: "FEE STRUCTURE OF THE SCHOOL",
//       link: "https://drive.google.com/file/d/1iRwqh8b3FAHHb994349w9ordaB1bGDjy/view?usp=sharing",
//     },
//     {
//       label: "ANNUAL ACADEMIC CALENDER",
//       link: "https://drive.google.com/file/d/1ZoZZPgcV-WlRzNt4lPPJjKLUNYitq1kc/view?usp=sharing",
//     },
//     {
//       label: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
//       link: "https://drive.google.com/file/d/1bavg7ZpNlB12Hha6oP_kp2V7lx_wUv9m/view?usp=sharing",
//     },
//     {
//       label: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
//       link: "",
//     },
//     {
//       label:
//         "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
//       link: "",
//     },
//   ];

//   // Teaching Staff
//   const teachingStaff = [
//     { label: "PRINCIPAL", value: "PARTAP SINGH" },
//     { label: "TOTAL NO. OF TEACHERS", value: "48" },
//     { label: "PGT", value: "18" },
//     { label: "TGT", value: "10" },
//     { label: "PRT", value: "20" },
//     { label: "TEACHERS SECTION RATIO", value: "1:15" },
//     { label: "DETAILS OF SPECIAL EDUCATOR", value: "2" },
//     {
//       label: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER",
//       value: "1",
//     },
//   ];

//   // Results
//   const classXResults = [
//     {
//       year: "2022",
//       registered: "58",
//       passed: "58",
//       percentage: "100",
//       remarks: "GOOD",
//     },
//   ];

//   const classXIIResults = [
//     {
//       year: "2022",
//       registered: "68",
//       passed: "68",
//       percentage: "100",
//       remarks: "GOOD",
//     },
//   ];

//   // Infrastructure
//   const infrastructure = [
//     { label: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)", value: "8159" },
//     {
//       label: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)",
//       value: "64 & 27",
//     },
//     {
//       label: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)",
//       value: "8 & 26",
//     },
//     { label: "INTERNET FACILITY", value: "YES" },
//     { label: "NO. OF GIRLS TOILETS", value: "2" },
//     { label: "NO. OF BOYS TOILETS", value: "2" },
//     {
//       label:
//         "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL",
//       value: "https://youtu.be/mXCoT4K9dnU",
//     },
//   ];

//   const handleLinkClick = (url) => {
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="font-sans bg-gray-50">
//       {/* Header */}
//       <header className="bg-blue-900 text-white py-6">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl md:text-3xl font-bold">
//             MANDATORY PUBLIC DISCLOSURE
//           </h1>
//           <p className="text-sm mt-2">
//             As per government and education board requirements
//           </p>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-8">
//         {/* General Information */}
//         <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-blue-800 text-white px-6 py-4">
//             <h2 className="text-xl font-bold">A : GENERAL INFORMATION</h2>
//           </div>
//           <div className="p-6">
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {generalInfo.map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
//                         {item.label}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {item.value}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         {/* Documents and Information */}
//         <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-blue-800 text-white px-6 py-4">
//             <h2 className="text-xl font-bold">B : DOCUMENTS AND INFORMATION</h2>
//           </div>
//           <div className="p-6">
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {documents.map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-900 w-1/3">
//                         {item.label}
//                       </td>
//                       <td className="px-6 py-4 text-sm text-blue-600">
//                         <button
//                           onClick={() => handleLinkClick(item.link)}
//                           className="flex items-center hover:underline"
//                         >
//                           <FaExternalLinkAlt className="mr-2" />
//                           {item.link}
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
//               <p className="text-sm text-yellow-700 font-semibold">
//                 NOTE: THE SCHOOL NEEDS TO UPLOAD THE SELF ATTESTED COPIES OF
//                 ABOVE LISTED DOCUMENTS BY CHAIRMAN/MANAGER/SECRETARY AND
//                 PRINCIPAL. IN CASE, IT IS NOTICED AT LATER STAGE THAT UPLOADED
//                 DOCUMENTS ARE NOT GENUINE THEN SCHOOL SHALL BE LIABLE FOR ACTION
//                 AS PER NORMS.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Result and Academics */}
//         <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-blue-800 text-white px-6 py-4">
//             <h2 className="text-xl font-bold">C : RESULT AND ACADEMICS</h2>
//           </div>
//           <div className="p-6">
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {academics.map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-900 w-1/3">
//                         {item.label}
//                       </td>
//                       <td className="px-6 py-4 text-sm text-blue-600">
//                         <button
//                           onClick={() => handleLinkClick(item.link)}
//                           className="flex items-center hover:underline"
//                         >
//                           <FaExternalLinkAlt className="mr-2" />
//                           {item.link}
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         {/* Staff (Teaching) */}
//         <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-blue-800 text-white px-6 py-4">
//             <h2 className="text-xl font-bold">D : STAFF (TEACHING)</h2>
//           </div>
//           <div className="p-6">
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {teachingStaff.map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
//                         {item.label}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {item.value}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         {/* Results Tables */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//           {/* Class X Results */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="bg-blue-800 text-white px-6 py-4">
//               <h2 className="text-xl font-bold">RESULT CLASS: X</h2>
//             </div>
//             <div className="p-6">
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         YEAR
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         REGISTERED
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         PASSED
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         PERCENTAGE
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         REMARKS
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {classXResults.map((result, index) => (
//                       <tr key={index}>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {result.year}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {result.registered}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {result.passed}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {result.percentage}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {result.remarks}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Class XII Results */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="bg-blue-800 text-white px-6 py-4">
//               <h2 className="text-xl font-bold">RESULT CLASS: XII</h2>
//             </div>
//             <div className="p-6">
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         YEAR
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         REGISTERED
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         PASSED
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         PERCENTAGE
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         REMARKS
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {classXIIResults.map((result, index) => (
//                       <tr key={index}>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {result.year}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {result.registered}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {result.passed}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {result.percentage}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {result.remarks}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* School Infrastructure */}
//         <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-blue-800 text-white px-6 py-4">
//             <h2 className="text-xl font-bold">E : SCHOOL INFRASTRUCTURE</h2>
//           </div>
//           <div className="p-6">
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {infrastructure.map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
//                         {item.label}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {item.label.includes("LINK") ? (
//                           <button
//                             onClick={() => handleLinkClick(item.value)}
//                             className="flex items-center text-blue-600 hover:underline"
//                           >
//                             <FaExternalLinkAlt className="mr-2" />
//                             {item.value}
//                           </button>
//                         ) : (
//                           item.value
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         {/* Contact Information */}
//         <section className="bg-blue-50 rounded-lg p-6">
//           <h3 className="text-xl font-bold text-blue-900 mb-4">
//             Contact Information
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="flex items-start">
//               <div className="bg-blue-100 p-3 rounded-full mr-4">
//                 <FaMapMarkerAlt className="text-blue-800" />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-blue-900">Address</h4>
//                 <p className="text-gray-700">
//                   Guru Har Sahai Mukatsar Road, New Modal Town, Ferozpur, Punjab
//                   - 152022
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="bg-blue-100 p-3 rounded-full mr-4">
//                 <FaPhone className="text-blue-800" />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-blue-900">Phone</h4>
//                 <p className="text-gray-700">+91 9855430984</p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="bg-blue-100 p-3 rounded-full mr-4">
//                 <FaEnvelope className="text-blue-800" />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-blue-900">Email</h4>
//                 <p className="text-gray-700">gtbschool794@gmail.com</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
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
import { Link } from "react-router-dom";

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
        "Guru Har Sahai Mukatsar Road, New Modal Town, Ferozpur, Punjab - 152022",
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
      path: "/affiliation-certificate",
      docName:
        "https://www.gtbcambridgeworldschool.com/affiliation-certificate",
    },
    {
      label:
        "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
      path: "/society-registration",
      docName: "https://www.gtbcambridgeworldschool.com/society-registration ",
    },
    {
      label:
        "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
      path: "/noc-certificate",
      docName: "https://www.gtbcambridgeworldschool.com/noc-certificate",
    },
    {
      label:
        "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE",
      path: "/rte-certificate",
      docName: "https://www.gtbcambridgeworldschool.com/rte-certificate",
    },
    {
      label:
        "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
      path: "/building-safety-certificate",
      docName:
        "https://www.gtbcambridgeworldschool.com/building-safety-certificate",
    },
    {
      label:
        "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
      path: "/fire-safety-certificate",
      docName:
        "https://www.gtbcambridgeworldschool.com/fire-safety-certificate",
    },
    {
      label:
        "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION",
      path: "/self-certification",
      docName: "https://www.gtbcambridgeworldschool.com/self-certification",
    },
    {
      label: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
      path: "/water-health-certificate",
      docName:
        "https://www.gtbcambridgeworldschool.com/water-health-certificate",
    },
  ];

  // Result and Academics
  const academics = [
    {
      label: "FEE STRUCTURE OF THE SCHOOL",
      path: "/fee-structure",
      docName: "https://www.gtbcambridgeworldschool.com/fee-structure",
    },
    {
      label: "ANNUAL ACADEMIC CALENDER",
      path: "/academic-calendar",
      docName: "https://www.gtbcambridgeworldschool.com/academic-calendar",
    },
    {
      label: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
      path: "/smc-list",
      docName: "https://www.gtbcambridgeworldschool.com/smc-list",
    },
    {
      label: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
      path: "/pta-list",
      docName: "https://www.gtbcambridgeworldschool.com/pta-list",
    },
    {
      label:
        "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
      path: "/result",
      docName: "https://www.gtbcambridgeworldschool.com/result",
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
                        {item.path ? (
                          <Link
                            to={item.path}
                            className="flex items-center hover:underline"
                          >
                            <FaExternalLinkAlt className="mr-2" />
                            {item.docName}
                          </Link>
                        ) : (
                          <span className="text-gray-500">Not available</span>
                        )}
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
                        {item.path ? (
                          <Link
                            to={item.path}
                            className="flex items-center hover:underline"
                          >
                            <FaExternalLinkAlt className="mr-2" />
                            View {item.docName}
                          </Link>
                        ) : (
                          <span className="text-gray-500">Not available</span>
                        )}
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
                          <a
                            href={item.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:underline"
                          >
                            <FaExternalLinkAlt className="mr-2" />
                            {item.value}
                          </a>
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
                  Guru Har Sahai Mukatsar Road, New Modal Town, Ferozpur, Punjab
                  - 152022
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

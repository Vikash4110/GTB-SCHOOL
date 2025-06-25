import React from 'react';
import { FaFilePdf, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const MandatoryDisclosure = () => {
  // Certificate data with Google Drive links
  const certificates = [
    {
      title: "Prospectus",
      description: "Official school prospectus containing all academic information",
      link: "https://drive.google.com/file/d/1DGdxN_xv0Wp43xHgUPkNwU6QBAt0iuug/view?usp=sharing",
      type: "PDF",
      size: "2.4 MB"
    },
    {
      title: "Land Certificate",
      description: "Document proving ownership of school land",
      link: "https://drive.google.com/file/d/1mUku4-AdQVZPz9Kpp2z6TEJY7ZnfR0AV/view?usp=sharing",
      type: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Bank Certificate",
      description: "Bank certification document for school accounts",
      link: "https://drive.google.com/file/d/1Dp6gx_soAX1fyCXyWrwZ9EGIEDYLyfEv/view?usp=sharing",
      type: "PDF",
      size: "1.2 MB"
    },
    {
      title: "NOC (No Objection Certificate)",
      description: "Government issued No Objection Certificate",
      link: "https://drive.google.com/file/d/1WMxdEEmKbk7JdAtu8aV7npF2TJRy14Z9/view?usp=sharing",
      type: "PDF",
      size: "3.1 MB"
    },
    {
      title: "Affiliation Certificate",
      description: "Certificate of affiliation with CBSE",
      link: "https://drive.google.com/file/d/1vUaPo2cQqPlUYHtzfFKVl8k6ztBjgLbl/view?usp=sharingg",
      type: "PDF",
      size: "2.0 MB"
    },
    {
        title: "Analysis Report of Water Samples",
        description: "Water supply & sanitation District level water testing.",
        link: "https://drive.google.com/file/d/1YJLXYBunPHfTzLKkSDwgQWHy6DjHHHaF/view?usp=sharing",
        type: "PDF",
        size: "1.5 MB"
      },
      {
        title: "Certificate of Registration of Societies",
        description: "Certificate of Registration of Societies",
        link: "https://drive.google.com/file/d/1D8GLdxPFR-ythzkfxITu-hOCXN5Ox4MX/view?usp=sharing",
        type: "PDF",
        size: "1.5 MB"
      },
      {
        title: "Safe Drinking Water and Sanitory Conditon Certificate",
        description: "Performa Regrading Safe Drinking Water AND Sanitory Conditon Certificate",
        link: "https://drive.google.com/file/d/1Cpca8TJBNKHSIlcMO2WpFf3eXmMblxmG/view?usp=sharing",
        type: "PDF",
        size: "1.5 MB"
      }

  ];

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mandatory Disclosures</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Official documents and certificates as required by education authorities
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              LEGAL DOCUMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              School <span className="text-yellow-600">Certificates</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All mandatory documents as per government and education board requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaFilePdf className="text-blue-900 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">{certificate.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span>{certificate.type}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{certificate.description}</p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleDownload(certificate.link)}
                      className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View Document
                    </button>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">About Mandatory Disclosures</h3>
            <p className="text-gray-700 mb-4">
              GTB Cambridge World School complies with all regulatory requirements for educational institutions. 
              These documents are made publicly available as per government guidelines and education board norms.
            </p>
            <p className="text-gray-700">
              For any queries regarding these documents, please contact our administration office.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosure;
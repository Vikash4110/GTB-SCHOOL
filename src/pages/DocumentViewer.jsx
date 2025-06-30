// // src/Components/DocumentViewer.js
// import React, { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { useParams } from "react-router-dom";

// // Set the worker path using the imported worker
// // For React-PDF v5.x
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// const DocumentViewer = () => {
//   const { docId } = useParams();
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pdfError, setPdfError] = useState(false);

//   const documentData = {
//     "affiliation-certificate": {
//       title: "Affiliation Certificate",
//       file: "/documents/affiliation-certificate.pdf",
//     },
//     "society-registration": {
//       title: "Society Registration Certificate",
//       file: "/documents/society-registration.pdf",
//     },
//     "noc-certificate": {
//       title: "No Objection Certificate",
//       file: "/documents/noc-certificate.pdf",
//     },
//     "rte-certificate": {
//       title: "RTE Recognition Certificate",
//       file: "/documents/rte-certificate.pdf",
//     },
//     "building-safety-certificate": {
//       title: "Building Safety Certificate",
//       file: "/documents/building-safety-certificate.pdf",
//     },
//     "fire-safety-certificate": {
//       title: "Fire Safety Certificate",
//       file: "/documents/fire-safety-certificate.pdf",
//     },
//     "self-certification": {
//       title: "Self Certification",
//       file: "/documents/self-certification.pdf",
//     },
//     "water-health-certificate": {
//       title: "Water Health Certificate",
//       file: "/documents/water-health-certificate.pdf",
//     },
//     "fee-structure": {
//       title: "Fee Structure",
//       file: "/documents/fee-structure.pdf",
//     },
//     "academic-calendar": {
//       title: "Academic Calendar",
//       file: "/documents/academic-calendar.pdf",
//     },
//     "smc-list": {
//       title: "SMC List",
//       file: "/documents/smc-list.pdf",
//     },
//     "pta-list": {
//       title: "PTA List",
//       file: "/documents/pta-list.pdf",
//     },
//     result: {
//       title: "Last 3-Year Result",
//       file: "/documents/result.pdf",
//     },
//   };

//   const document = documentData[docId] || {
//     title: "Document Not Found",
//     file: null,
//   };

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPdfError(false);
//   }

//   function onDocumentLoadError(error) {
//     console.error("PDF loading error:", error);
//     setPdfError(true);
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-2xl font-bold text-blue-900 mb-6">
//           {document.title}
//         </h1>

//         {pdfError ? (
//           <div className="bg-red-50 border-l-4 border-red-400 p-4">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg
//                   className="h-5 w-5 text-red-400"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-red-700">
//                   Failed to load the PDF document. Please try again later.
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : document.file ? (
//           <div className="border border-gray-200 p-4 rounded-lg">
//             <Document
//               file={document.file}
//               onLoadSuccess={onDocumentLoadSuccess}
//               onLoadError={onDocumentLoadError}
//               loading={
//                 <div className="flex justify-center items-center h-64">
//                   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//                 </div>
//               }
//             >
//               <Page pageNumber={pageNumber} />
//             </Document>
//             {numPages && (
//               <div className="flex justify-between items-center mt-4">
//                 <button
//                   onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
//                   disabled={pageNumber <= 1}
//                   className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300"
//                 >
//                   Previous
//                 </button>
//                 <p className="text-gray-600">
//                   Page {pageNumber} of {numPages}
//                 </p>
//                 <button
//                   onClick={() =>
//                     setPageNumber(Math.min(numPages, pageNumber + 1))
//                   }
//                   disabled={pageNumber >= numPages}
//                   className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300"
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg
//                   className="h-5 w-5 text-yellow-400"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-yellow-700">
//                   This document is not currently available.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DocumentViewer;

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Link, useParams } from "react-router-dom";

// Set the worker path
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DocumentViewer = () => {
  const { docId } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(true);

  const documentData = {
    "affiliation-certificate": {
      title: "Affiliation Certificate",
      file: "/documents/affiliation-certificate.pdf",
    },
    "society-registration": {
      title: "Society Registration Certificate",
      file: "/documents/society-registration.pdf",
    },
    "noc-certificate": {
      title: "No Objection Certificate",
      file: "/documents/noc-certificate.pdf",
    },
    "rte-certificate": {
      title: "RTE Recognition Certificate",
      file: "/documents/rte-certificate.pdf",
    },
    "building-safety-certificate": {
      title: "Building Safety Certificate",
      file: "/documents/building-safety-certificate.pdf",
    },
    "fire-safety-certificate": {
      title: "Fire Safety Certificate",
      file: "/documents/fire-safety-certificate.pdf",
    },
    "self-certification": {
      title: "Self Certification",
      file: "/documents/self-certification.pdf",
    },
    "water-health-certificate": {
      title: "Water Health Certificate",
      file: "/documents/water-health-certificate.pdf",
    },
    "fee-structure": {
      title: "Fee Structure",
      file: "/documents/fee-structure.pdf",
    },
    "academic-calendar": {
      title: "Academic Calendar",
      file: "/documents/academic-calendar.pdf",
    },
    "smc-list": {
      title: "SMC List",
      file: "/documents/smc-list.pdf",
    },
    "pta-list": {
      title: "PTA List",
      file: "/documents/pta-list.pdf",
    },
    result: {
      title: "Last 3-Year Result",
      file: "/documents/result.pdf",
    },
  };

  const document = documentData[docId] || {
    title: "Document Not Found",
    file: null,
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPdfError(false);
    setPdfLoading(false);
  }

  function onDocumentLoadError(error) {
    console.error("PDF loading error:", error);
    setPdfError(true);
    setPdfLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            {document.title}
          </h1>
          <p className="text-lg text-gray-600">Official School Document</p>
        </div>

        {/* Document Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Document Status Bar */}
          <div className="bg-blue-700 px-4 py-3 flex justify-between items-center">
            <span className="text-white font-medium">{document.title}</span>
            {numPages && (
              <span className="text-blue-100">
                Page {pageNumber} of {numPages}
              </span>
            )}
          </div>

          {/* Document Content */}
          <div className="p-4">
            {pdfError ? (
              <div className="bg-red-50 rounded-lg p-6 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <svg
                    className="h-6 w-6 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-red-800">
                  Document Loading Error
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    We couldn't load the requested document. Please try again
                    later or contact support if the problem persists.
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Retry
                  </button>
                </div>
              </div>
            ) : document.file ? (
              <div className="flex flex-col items-center">
                {pdfLoading && (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                    <p className="text-gray-600">Loading document...</p>
                  </div>
                )}
                <div className={`w-full ${pdfLoading ? "hidden" : "block"}`}>
                  <div className="flex justify-center mb-4">
                    <Document
                      file={document.file}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={onDocumentLoadError}
                      loading={
                        <div className="flex justify-center items-center h-64">
                          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                      }
                    >
                      <Page
                        pageNumber={pageNumber}
                        className="shadow-md"
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        width={Math.min(800, window.innerWidth - 100)}
                      />
                    </Document>
                  </div>
                  {numPages && numPages > 1 && (
                    <div className="flex items-center justify-center space-x-4 mt-4">
                      <button
                        onClick={() =>
                          setPageNumber(Math.max(1, pageNumber - 1))
                        }
                        disabled={pageNumber <= 1}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Previous
                      </button>
                      <span className="text-gray-700">
                        Page {pageNumber} of {numPages}
                      </span>
                      <button
                        onClick={() =>
                          setPageNumber(Math.min(numPages, pageNumber + 1))
                        }
                        disabled={pageNumber >= numPages}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
                      >
                        Next
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-yellow-50 rounded-lg p-6 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
                  <svg
                    className="h-6 w-6 text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-yellow-800">
                  Document Not Available
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    This document is not currently available. Please check back
                    later or contact the school administration.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 text-center">
          <Link
            to="/mandatory"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Mandatory Disclosures
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;

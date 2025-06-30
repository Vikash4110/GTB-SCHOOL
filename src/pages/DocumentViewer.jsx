// // src/Components/DocumentViewer.js
// import React, { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { useParams } from "react-router-dom";

// // Configure PDF.js worker path
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const DocumentViewer = () => {
//   const { docId } = useParams();
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

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
//   };

//   const document = documentData[docId] || {
//     title: "Document Not Found",
//     file: null,
//   };

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-2xl font-bold text-blue-900 mb-6">
//           {document.title}
//         </h1>

//         {document.file ? (
//           <div className="border border-gray-200 p-4 rounded-lg">
//             <Document
//               file={document.file}
//               onLoadSuccess={onDocumentLoadSuccess}
//             >
//               <Page pageNumber={pageNumber} />
//             </Document>
//             <p className="text-gray-600 mt-2">
//               Page {pageNumber} of {numPages}
//             </p>
//           </div>
//         ) : (
//           <p className="text-red-500">Document not found or not available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DocumentViewer;

// src/Components/DocumentViewer.js
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";

// Set the worker path using the imported worker
// For React-PDF v5.x
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const DocumentViewer = () => {
  const { docId } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(false);

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
  }

  function onDocumentLoadError(error) {
    console.error("PDF loading error:", error);
    setPdfError(true);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">
          {document.title}
        </h1>

        {pdfError ? (
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  Failed to load the PDF document. Please try again later.
                </p>
              </div>
            </div>
          </div>
        ) : document.file ? (
          <div className="border border-gray-200 p-4 rounded-lg">
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
              <Page pageNumber={pageNumber} />
            </Document>
            {numPages && (
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                  disabled={pageNumber <= 1}
                  className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300"
                >
                  Previous
                </button>
                <p className="text-gray-600">
                  Page {pageNumber} of {numPages}
                </p>
                <button
                  onClick={() =>
                    setPageNumber(Math.min(numPages, pageNumber + 1))
                  }
                  disabled={pageNumber >= numPages}
                  className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  This document is not currently available.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentViewer;

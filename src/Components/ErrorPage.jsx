// src/Components/NotFound.js
import React from "react";
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-blue-900 mb-4">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Page Not Found
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="mt-10 bg-white py-8 px-4 shadow rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
              <svg
                className="h-10 w-10 text-red-600"
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
            <h3 className="mt-4 text-xl font-medium text-gray-900">
              What to do next?
            </h3>
            <div className="mt-6">
              <Link
                to="/"
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaHome className="mr-2" />
                Return to Homepage
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="text-sm font-medium text-gray-500">
              Need help? Contact us:
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <FaPhone className="flex-shrink-0 h-5 w-5 text-gray-400" />
                <span className="ml-3 text-base text-gray-700">
                  +91 9855430984
                </span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="flex-shrink-0 h-5 w-5 text-gray-400" />
                <span className="ml-3 text-base text-gray-700">
                  gtbschool794@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

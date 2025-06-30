import { useEffect, useState } from "react";
import Logo from "../assets/logo-Picsart-AiImageEnhancer copy.jpg";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        {/* Logo with animation */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-900 border-t-transparent animate-spin"></div>

          {/* School logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={Logo}
              alt="GTB Public School Logo"
              className="w-3/4 h-3/4 object-contain animate-pulse"
            />
          </div>

          {/* Inner circle */}
          <div className="absolute inset-4 rounded-full border-4 border-yellow-500 border-b-transparent animate-spin animation-delay-200"></div>
        </div>

        {/* Loading text with animated dots */}
        <div className="text-blue-900 font-semibold text-xl flex items-center">
          Loading
          <div className="flex ml-1 space-x-1">
            <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce animation-delay-100"></div>
            <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce animation-delay-200"></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow-500 to-blue-900 rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

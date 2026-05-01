import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 px-4">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 text-center max-w-lg w-full text-white">
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-6xl text-yellow-300 animate-bounce" />
        </div>

        <h1 className="text-7xl font-extrabold tracking-widest">404</h1>

        <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>

        <p className="text-gray-200 mt-3">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link to="/">
            <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-200 transition">
              Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 border border-white rounded-xl hover:bg-white hover:text-purple-600 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-500 mt-24">
      <div className="container py-4 text-center">
        <div className="flex items-center justify-center text-white text-[14px]">
          <Link
            to="/"
            className="uppercase"
          >
            policy privacy
          </Link>
          <div className="w-0.5 h-4 bg-gray-500 mr-12 ml-12"></div>
          <Link
            to="/"
            className="uppercase"
          >
            Read more
          </Link>
          <div className="w-0.5 h-4 bg-gray-500 mr-12 ml-12"></div>
          <Link
            to="/"
            className="uppercase"
          >
            about us
          </Link>
        </div>
        <span className="text-white text-[14px]">&copy; 2024 Inter-Lap</span>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa"; // Importing React icons

const TopNavbar = () => {
  return (
    <div className="bg-black text-white text-sm py-2 hidden lg:block"> {/* Hide on screens lg and above */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Left-aligned phone and email */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaPhoneAlt className="h-5 w-5" />
            <p className="text-gray-300">+123 456 7890</p> {/* Fake phone number */}
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope className="h-5 w-5" />
            <p className="text-gray-300">example@email.com</p> {/* Fake email */}
          </div>
        </div>

        {/* Centered follow us message */}
        <div className="flex items-center justify-center space-x-1 flex-grow">
          <p>Follow Us and get a chance to win 80% off!</p>
        </div>

        {/* Right-aligned social media icons */}
        <div className="flex items-center space-x-4 ml-auto">
          <p>Follow Us:</p>
          <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram className="h-5 w-5 text-gray-300 hover:text-blue-400" />
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            <FaYoutube className="h-5 w-5 text-gray-300 hover:text-blue-400" />
          </Link>
          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebook className="h-5 w-5 text-gray-300 hover:text-blue-400" />
          </Link>
          <Link href="https://www.twitter.com" target="_blank">
            <FaTwitter className="h-5 w-5 text-gray-300 hover:text-blue-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

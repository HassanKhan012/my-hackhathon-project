import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing social media icons from React Icons

const Footer: React.FC = () => {
  const companyInfoLinks = [
    { name: "About Us", link: "#" },
    { name: "Carrier", link: "#" },
    { name: "We are hiring", link: "#" },
    { name: "Blog", link: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", link: "#" },
    { name: "Terms of Service", link: "#" },
    { name: "Cookies", link: "#" },
  ];

  const featuresLinks = [
    { name: "Business Marketing", link: "#" },
    { name: "User Analytics", link: "#" },
    { name: "Live Chat", link: "#" },
    { name: "Unlimited Support", link: "#" },
  ];

  const socialMediaLinks = [
    { name: "Facebook", icon: <FaFacebookF />, link: "#", color: "text-blue-600" },
    { name: "Instagram", icon: <FaInstagram />, link: "#", color: "text-pink-500" },
    { name: "Twitter", icon: <FaTwitter />, link: "#", color: "text-blue-400" },
  ];

  // Resources Titles Only
  const resources = [
    { title: "IOS & Android", link: "#" },
    { title: "Watch a Demo", link: "#" },
    { title: "Customers", link: "#" },
    { title: "API", link: "#" },
  ];

  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          {/* Brand Name */}
          <h2 className="text-xl font-bold text-gray-800">Bandage</h2>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socialMediaLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                aria-label={social.name}
                className={`text-lg ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2">
              {companyInfoLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="hover:underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="hover:underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              {featuresLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="hover:underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch (Newsletter) */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md border border-gray-300 mb-4"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        Made With Love By Finland All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
  
import React from "react";

const NeuralUniverseBanner: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-100 py-10 px-6 md:px-12">
      {/* Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="/images/neuralbanner.png" // Replace with your image path
          alt="Man and woman with scarf"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Summer 2020
        </p>
        <h2 className="text-2xl font-bold text-gray-800">
          Part of the Neural Universe
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600 transition">
            Buy Now
          </button>
          <button className="border border-green-500 text-green-500 px-6 py-2 rounded shadow hover:bg-green-500 hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeuralUniverseBanner;

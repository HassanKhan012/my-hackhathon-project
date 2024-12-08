import React from 'react';
import Image from 'next/image';

const BottomBanner = () => {
  const data = {
    title: "Vita Classic Product",
    subtitle: "We know how large objects will act. We know how are objects will act. We know",
    price: "$16.48",
    buttonText: "Add to Cart",
    imageUrl: "/images/bottombanner.png"
    // src="/images/banner.jpeg"
  };

  return (
    <div className="bg-green-500 text-white py-8 flex flex-col md:flex-row justify-between items-center px-8">
      {/* Text Section */}
      <div className="text-left w-full md:w-1/2">
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <p className="mt-2">{data.subtitle}</p>
        <div className="flex items-center gap-4 mt-4">
          <span className="text-lg font-semibold">{data.price}</span>
          <button className="bg-white text-green-500 px-6 py-2 rounded-md font-medium hover:bg-gray-100">
            {data.buttonText}
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src={data.imageUrl}
          alt="Banner Illustration"
          width={300}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default BottomBanner;

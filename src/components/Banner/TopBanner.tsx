import React from 'react';
import Image from 'next/image';

const TopBanner = () => {
  return (
    <div
      className="relative flex items-center justify-between p-12 bg-cover bg-center min-h-[600px]"  // Adjusted height
      style={{
        backgroundImage: 'url(/images/banner.jpeg)',  // Background image set from public folder
      }}
    >
      <div className="flex flex-col items-start max-w-[500px] z-10">
        <h2 className="text-xl font-normal text-white mb-2">SUMMER 2020</h2>
        <h1 className="text-5xl font-bold text-white mb-4">NEW COLLECTION</h1>
        <p className="text-base font-normal text-white mb-5">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="px-8 py-4 bg-[#00d870] text-white font-semibold rounded-lg hover:bg-[#00c260]">
          SHOP NOW
        </button>
      </div>
      <div className="relative w-full h-full z-0">
        <Image
          src="/images/banner.jpeg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </div>
  );
};

export default TopBanner;

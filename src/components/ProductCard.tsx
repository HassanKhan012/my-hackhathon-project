import React from "react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  discountPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  discountPrice,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Product Image */}
      <div className="relative h-80">
        <Image
          src={image} // Image URL
          alt={title} // Accessibility description
          layout="fill" // Fill the parent container
          objectFit="cover" // Maintain aspect ratio
          className="rounded-t-lg"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

        {/* Pricing */}
        <div className="flex items-center mb-4">
          <span className="text-gray-600 text-sm line-through mr-2">${price}</span>
          <span className="text-lg font-semibold text-gray-800">${discountPrice}</span>
        </div>

        {/* Learn More Button */}
        <a
          href="#"
          className="text-blue-500 hover:underline font-medium text-sm"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import Image from "next/image";

interface Product {
  title: string;
  department: string;
  price: number;
  discountPrice: number;
  imageUrl: string;
}

const FeaturedProducts: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured
      </h2>
      <h2 className="text-3xl font-bold mb-8 text-center">
        BESTSELLER PRODUCTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {" "}
        {/* Changed lg:grid-cols-3 to lg:grid-cols-4 */}
        {products.map((product) => (
          <div key={product.title} className="border rounded-md p-4 shadow-md">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={400}
              className="rounded-md"
            />
            <h3 className="text-xl font-bold mt-4">{product.title}</h3>
            <p className="text-gray-600">{product.department}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${product.discountPrice.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

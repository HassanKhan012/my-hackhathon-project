import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  title: string;
  image: string;
  items: number;
}

const products: Product[] = [
  {
    title: "CLOTHS",
    image: "/images/secondpagefirst.png",
    items: 5,
  },
  {
    title: "CLOTHS",
    image: "/images/secondsecond.png",
    items: 5,
  },
  {
    title: "CLOTHS",
    image: "/images/secondthirs.png",
    items: 5,
  },
  {
    title: "CLOTHS",
    image: "/images/secondfourth.png",
    items: 5,
  },
  {
    title: "CLOTHS",
    image: "/images/secondfifth.png",
    items: 5,
  },
];

const Shop = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <Link href={`/shop/${product.title}`} key={index}>
            <div className="cursor-pointer block rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="object-cover w-full h-48"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;

import React from "react";
import ProductCard from "@/components/ProductCard"; // Import the ProductCard component
import Filter from "@/components/filter/Filter";
import Footer from "@/components/Footer/Footer";
import Logos from "@/components/logos/logos";
import Shop from "@/components/Shop/Shop";
import Pagination from "@/components/Pagination";
// import { Pagination } from "@mui/material";

const products = [
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/YellowSuit.jpeg",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/whiteshirt-male.jpeg",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/pinkshirt.jpeg",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/brownjacket.jpeg",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/grayjacket.jpeg",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/yellow-white.jpeg",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/red-white.jpeg",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/blackwhite.jpeg",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/YellowSuit.jpeg",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/whiteshirt-male.jpeg",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/pinkshirt.jpeg",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: "/images/brownjacket.jpeg",
  },
];

const Page = () => {
  return (
    <div>
      {/* Components for the page */}
      <Shop />
      <Filter />
      <Logos />
      <Footer />
      {/* Display Product Cards in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.imageUrl}
            title={product.title}
            price={product.price}
            discountPrice={product.discountPrice}
          />
        ))}
      </div>
      <Pagination/>
    </div>
  );
};

export default Page;

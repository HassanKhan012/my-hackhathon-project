import BottomBanner from "@/components/Banner/BottomBanner";
import NeuralUniverseBanner from "@/components/Banner/NeuralUniverseBanner";
import TopBanner from "@/components/Banner/TopBanner";
import FeaturedPosts from "@/components/Card/FeaturedPost";
import Footer from "@/components/Footer/Footer";
import EditorPick from "@/components/Products/EditorPick";
import FeaturedProducts from "@/components/Products/FeaturedProducts";
import React from "react";


const products = [
  {
    title: 'Graphic Design',
    department: 'English Department',
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: '/images/YellowSuit.jpeg',
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    price: 16.48,
    discountPrice: 6.48, imageUrl: '/images/whiteshirt-male.jpeg',
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: '/images/pinkshirt.jpeg',
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: '/images/brownjacket.jpeg',
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: '/images/grayjacket.jpeg',
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: '/images/yellow-white.jpeg',
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: '/images/red-white.jpeg',
  },  {
    title: 'Graphic Design',
    department: 'English Department',
    price: 16.48,
    discountPrice: 6.48,
    imageUrl: '/images/blackwhite.jpeg',
  },
];

const Main = () => {
  return (
    <div>
      <TopBanner />
      <EditorPick/>
      <FeaturedProducts products={products} />
      <BottomBanner/>
      <NeuralUniverseBanner/>
      <FeaturedPosts/>
      <Footer />
    </div>
  );
};

export default Main;

import React from "react";
import PostCard from "./PostCard";


const FeaturedPosts: React.FC = () => {
  const posts = [
    {
      image: "/images/firstcard.jpeg", // Update with actual image paths
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["google", "trending", "new"],
    },
    {
      image: "/images/secondcard.jpeg",
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["google", "trending", "new"],
    },
    {
      image: "/images/thirdcard.jpeg",
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["google", "trending", "new"],
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <p className="text-blue-500 uppercase font-medium tracking-wide">
          Practice Advice
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Posts</h2>
        <p className="text-gray-600">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;

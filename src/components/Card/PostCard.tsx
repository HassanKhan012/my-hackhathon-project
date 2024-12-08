import React from "react";

interface PostCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  comments: number;
  tags: string[];
}

const PostCard: React.FC<PostCardProps> = ({
  image,
  title,
  description,
  date,
  comments,
  tags,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative h-80"> {/* Increased height */}
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
          NEW
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
          {tags.map((tag, index) => (
            <span key={index} className="capitalize">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <span>{date}</span>
            <span>•</span>
            <span>{comments} comments</span>
          </div>
          <a
            href="#"
            className="text-blue-500 hover:underline font-medium text-sm"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

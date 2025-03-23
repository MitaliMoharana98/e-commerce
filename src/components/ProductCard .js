import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, category }) => {
  return (
    <div className="relative group w-64 h-96 mx-auto">
      <img
        src={image}
        alt={category}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center rounded-lg">
      <Link to={'/shopnow'} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
          Shop Now
        </Link>
        <span className="text-white text-lg font-semibold">{category}</span>
      </div>
    </div>
  );
};


export default ProductCard;
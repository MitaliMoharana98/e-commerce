import React from "react";

function ProductShop ({ image, name, price, rating }) {
  return (
    <>
     <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
      <div className="bg-white rounded shadow hover:shadow-lg transition duration-300">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-t"
        />
        <div className="p-4">
          <h3 className="text-md font-semibold">{name}</h3>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </div>
          </div>
          <p className="text-lg font-bold mt-2">{price}</p>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default ProductShop;

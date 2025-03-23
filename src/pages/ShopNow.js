import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "../components/ProductCard ";
import ProductShop from "../components/ProductShop.js";
import FilterSidebar from "../components/FilterSidebar.js";

function ShopNow() {
  const { products } = useContext(ProductContext);

  console.log(products);

  // get only men's and women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing" ||
      item.category === "jewelery"
    );
  });
  const productList = [
    {
      id: 1,
      name: "Knitted Jumper",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29z8h7Rb8F9g3aTJKlAbw2DNq6OafH8LRbA&s",
      price: "$30.00",
      rating: 5,
    },
    {
      id: 2,
      name: "Knitted Jumper",
      image:
        "https://media3.newlookassets.com/i/newlook/880513610/womens/clothing/knitwear/white-cable-knit-v-neck-varsity-jumper.jpg?strip=true&qlt=50&w=720",
      price: "$30.00",
      rating: 4,
    },
    {
      id: 3,
      name: "Knitted Jumper",
      image:
        "https://images.asos-media.com/products/topshop-knitted-fluffy-relaxed-ultimate-jumper-in-leopard-print/206872296-1-multi/?$n_480w$&wid=476&fit=constrain",
      price: "$30.00",
      rating: 5,
    },
    {
      id: 4,
      name: "Knitted Jumper",
      image:
        "https://i.pinimg.com/564x/31/b4/f0/31b4f03877b3d390d93aa1ee3f23ce6e.jpg",
      price: "$30.00",
      rating: 5,
    },
    // {
    //   id: 5,
    //   name: "Knitted Jumper",
    //   image:
    //     "https://d1it09c4puycyh.cloudfront.net/707x1000/catalog/product/3/0/302Z-KHAKI_1.jpg",
    //   price: "$30.00",
    //   rating: 5,
    // },
    // {
    //   id: 6,
    //   name: "Knitted Jumper",
    //   image:
    //     "https://armorlux-armorlux-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/624/780/b6503508bf1e7b73a44572b9ed8c56ae2a8aba49_67602_12878_K7H_233510.jpeg",
    //   price: "$30.00",
    //   rating: 5,
    // },
    // {
    //   id: 7,
    //   name: "Knitted Jumper",
    //   image:
    //     "https://www.smittenmerino.com/cdn/shop/products/CableJumper_Ivory.jpg?v=1719726899&width=1200",
    //   price: "$30.00",
    //   rating: 5,
    // },
    // {
    //   id: 8,
    //   name: "Knitted Jumper",
    //   image:
    //     "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/685293/01/mod03/fnd/IND/fmt/png/TAPE-MINIMAL-GOLD-Women's-Hoodie",
    //   price: "$30.00",
    //   rating: 5,
    // },
  ];
  
  return (
    <>
     <div className="min-h-screen">
      <header className="bg-white shadow p-6">
        <h1 className="text-2xl font-bold text-center">Shop With Us</h1>
        <p className="text-center mt-2 text-gray-600">
          Browse from 230 latest items
        </p>
      </header>
      <div className="container mx-auto px-4 lg:px-8 py-8 flex flex-wrap">
        <FilterSidebar />
        
        <div className="w-full lg:w-3/4 flex flex-wrap">
          {productList.map((product, index) => (
            <ProductShop
              key={index}
              image={product.image}
              title={product.name}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {filteredProducts.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6">NEW ARRIVAL</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-medium">{product.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{product.price}</p>
                <div className="flex items-center">
                  {[...Array(product.rating)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-3.09 1.62.59-3.42L5 9.97l3.45-.5L10 6.41l1.55 3.06 3.45.5-2.5 2.23.59 3.42L10 15z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopNow;

import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import {
  ClockIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  TruckIcon,
} from "@heroicons/react/16/solid";
import ProductCard from "../components/ProductCard ";

const Home = () => {
  // get products from product context
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
    {
      id: 5,
      name: "Knitted Jumper",
      image:
        "https://d1it09c4puycyh.cloudfront.net/707x1000/catalog/product/3/0/302Z-KHAKI_1.jpg",
      price: "$30.00",
      rating: 5,
    },
    {
      id: 6,
      name: "Knitted Jumper",
      image:
        "https://armorlux-armorlux-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/624/780/b6503508bf1e7b73a44572b9ed8c56ae2a8aba49_67602_12878_K7H_233510.jpeg",
      price: "$30.00",
      rating: 5,
    },
    {
      id: 7,
      name: "Knitted Jumper",
      image:
        "https://www.smittenmerino.com/cdn/shop/products/CableJumper_Ivory.jpg?v=1719726899&width=1200",
      price: "$30.00",
      rating: 5,
    },
    {
      id: 8,
      name: "Knitted Jumper",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/685293/01/mod03/fnd/IND/fmt/png/TAPE-MINIMAL-GOLD-Women's-Hoodie",
      price: "$30.00",
      rating: 5,
    },
  ];
  const features = [
    {
      id: 1,
      icon: <TruckIcon className="h-12 w-12 text-green-500" />,
      title: "Fast & Free Delivery",
      description: "Free delivery on all orders",
      rating: 5,
    },
    {
      id: 2,
      icon: <CreditCardIcon className="h-12 w-12 text-green-500" />,
      title: "Secure Payments",
      description: "Safe and reliable payment methods",
    },
    {
      id: 3,
      icon: <CurrencyDollarIcon className="h-12 w-12 text-green-500" />,
      title: "Money-Back Guarantee",
      description: "30-day money-back guarantee",
    },
    {
      id: 4,
      icon: <ClockIcon className="h-12 w-12 text-green-500" />,
      title: "24/7 Support",
      description: "We’re here to help you anytime",
    },
  ];

  const productImage = [
    {
      image:
        "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-cruise-25-femme/folder-digital-push/verys1fxr10a0/44555260-1-eng-GB/verys1fxr10a0_1440_1200.jpg?imwidth=3000", // Replace with your image URL
      category: "Glasses",
    },
    {
      image:
        "https://justintime.in/cdn/shop/articles/Comprehensive_Elegance__A_Complete_List_of_Women_s_Watches_Brands_Mobile.png?v=1716205834", // Replace with your image URL
      category: "Watches",
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/685293/01/mod03/fnd/IND/fmt/png/TAPE-MINIMAL-GOLD-Women's-Hoodie",
      category: "Hoodies",
    },
    {
      image:
        "https://rubans.in/cdn/shop/files/voguish-22k-gold-plated-stainless-steel-tarnish-free-waterproof-modern-textured-bracelet-bracelet-36890621280430.jpg?v=1726319965&width=1080",
      category: "Jewelleries",
    },
  ];

  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="flex flex-wrap justify-center gap-5 p-4">
          {productImage.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            OUR PRODUCTS
          </h1>
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
        <div className="bg-gray-50 p-20 ">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="text-center flex flex-col items-center"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

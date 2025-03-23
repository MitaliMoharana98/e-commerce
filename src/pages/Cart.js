import React, { useState } from "react";

const Cart = () => {
  // Sample product data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/b72de6bb9145f74da58a5d4492055166.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
      name: "Sneakers Shoes For Men",
      price: 44.99,
      quantity: 2,
    },
    {
      id: 2,
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/685293/01/mod03/fnd/IND/fmt/png/TAPE-MINIMAL-GOLD-Women's-Hoodie",
      name: "Knitted Jumper",
      price: 30.99,
      quantity: 1,
    },
    {
      id: 3,
      image: "https://d1it09c4puycyh.cloudfront.net/707x1000/catalog/product/3/0/302Z-KHAKI_1.jpg",
      name: "Knitted Jumper",
      price: 35.5,
      quantity: 1,
    },
    {
      id: 4,
      image: "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-cruise-25-femme/folder-digital-push/verys1fxr10a0/44555260-1-eng-GB/verys1fxr10a0_1440_1200.jpg?imwidth=3000",
      name: "Glasses",
      price: 76.99,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, value) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, value) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping Cart</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white rounded shadow-lg">
          <thead>
            <tr className="bg-green-200 text-left">
              <th className="p-4">Select</th>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total</th>
              <th className="p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4 text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-4 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500 text-sm">Fugiat voluptate quasi nemo.</p>
                  </div>
                </td>
                <td className="p-4">${item.price.toFixed(2)}</td>
                <td className="p-4">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                    className="w-16 p-2 border rounded text-center"
                  />
                </td>
                <td className="p-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-4 text-red-500 cursor-pointer">
                  <button onClick={() => handleRemoveItem(item.id)} className="hover:underline">
                    ✖
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50">
              <td colSpan="4" className="p-4 text-right font-bold">Total:</td>
              <td colSpan="2" className="p-4 font-bold">${calculateTotal()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;

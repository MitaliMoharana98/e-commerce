import React from "react";

const Footer = () => {
  return (
    <footer
      className=" text-white py-10"
      style={{ backgroundColor: "#252A2E" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shopping E-commerce</h2>
            <p className="text-sm text-gray-300">
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Image Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop Category</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Image Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Image Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span>911524896327</span>
              </li>
              <li>
                <span>softreeTech@gmail.com</span>
              </li>
              <li>
                <span>CDA Sec 10, Cuttack, Odisha</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          Copyright ©2024 All rights reserved by Softree Technology
        </div>
      </div>
    </footer>
  );
};

export default Footer;

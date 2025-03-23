import React from "react";

function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 justify-center items-center bg-gray-100">
        <div className="flex shadow-lg rounded-md overflow-hidden bg-white w-4/5 lg:w-3/5">
          {/* Left Section */}
          <div className="w-1/2 bg-blue-100 p-8  lg:flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-green-600">Login</h1>
            <p className="mt-4 text-green-700">
              Get access to your Orders, Wishlist, and Recommendations
            </p>
            <img
              src="https://static.wixstatic.com/media/3f3442_b3f824d52c1645a887290ea49529c153~mv2.png/v1/fill/w_372,h_373,al_c,q_85,enc_auto/3f3442_b3f824d52c1645a887290ea49529c153~mv2.png"
              alt="Placeholder"
              className="mt-8"
            />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-xl font-semibold mb-4">
              Enter Email/Mobile number
            </h2>
            <input
              type="text"
              placeholder="Email/Mobile number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md">
              Request OTP
            </button>
            <p className="text-sm text-gray-500 mt-4">
              By continuing, you agree to E-commerce{" "}
              <a href="#" className="text-blue-500">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
              .
            </p>
            <div className="mt-6">
              <p className="text-gray-500">
                New to E-commerce?{" "}
                <a href="#" className="text-blue-500">
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

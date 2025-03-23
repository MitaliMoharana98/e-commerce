import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-4xl p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509083!2d-122.4194154846818!3d37.774929779759664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df09f3bf%3A0x3b85b7d3c8db1157!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1614721817168!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h1>
        <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg">
          {/* Form Section */}
          <div className="flex-1 p-8">
            <form className="space-y-6">
              <textarea
                placeholder="Enter Message"
                className="w-full h-32 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="flex-1 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700"
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 p-8 bg-gray-50 rounded-r-lg">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Cuttack, Odisha</p>
                  <p className="text-gray-500">CDA, Sector 10</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">+918634579520</p>
                  <p className="text-gray-500">Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">
                    softreetech@gmail.com
                  </p>
                  <p className="text-gray-500">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

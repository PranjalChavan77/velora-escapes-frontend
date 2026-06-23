import React from "react";
import { assets, testimonials, roomCommonData } from "../assets/assets";

const Experience = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="font-playfair text-4xl sm:text-5xl font-medium text-gray-900 mb-4">
          The Velora Experience
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          We bridge the gap between world-class destination gateways and
          seamless, curated luxury. Discover the pillars of our elite
          hospitality.
        </p>
      </div>

      {/* Hospitality Pillars (Centered Grid) */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {roomCommonData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 bg-gray-900/5 flex items-center justify-center rounded-full mb-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-6 h-6 object-contain"
              />
            </div>
            <h3 className="font-playfair text-xl font-medium text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm max-w-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Testimonials Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-playfair text-3xl font-medium text-gray-900 mb-2">
          Stories From Our Guests
        </h2>
        <p className="text-gray-500 text-sm">
          Verified stays curated across our luxury portfolio.
        </p>
      </div>

      {/* Guest Reviews Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((guest) => (
          <div
            key={guest.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-0.5 mb-3 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < guest.rating
                        ? assets.starIconFilled
                        : assets.starIconOutlined
                    }
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm italic mb-6">
                "{guest.review}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
              <img
                src={guest.image}
                alt={guest.name}
                className="w-10 h-10 rounded-full object-cover bg-slate-100"
                loading="lazy"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800">
                  {guest.name}
                </p>
                <p className="text-xs text-gray-400">{guest.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

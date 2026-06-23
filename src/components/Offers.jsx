import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const Offers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-15 pb-20 bg-blue-50">
      <div className="flex flex-col md:flex-row items-center w-full justify-between">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of limited-time packages and special deals crafted for memorable stays."
        />

        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-8">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15 w-full">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col justify-between min-h-70 rounded-2xl overflow-hidden text-white bg-cover bg-center p-6"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>

            <p className="relative z-10 px-3 py-1 w-fit text-xs bg-white text-gray-800 font-medium rounded-full">
              {item.priceOff}% OFF
            </p>

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-playfair font-medium">
                {item.title}
              </h3>

              <p className="text-sm text-white/90 mt-2">{item.description}</p>

              <p className="text-xs text-white/90 mt-3">
                Valid until {item.expiryDate}
              </p>

              <button className="flex items-center gap-2 font-medium cursor-pointer mt-5">
                View Offer
                <img
                  className="invert group-hover:translate-x-1 transition-all"
                  src={assets.arrowIcon}
                  alt="arrow-icon"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;

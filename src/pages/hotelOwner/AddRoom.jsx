import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: "",
    amenities: {
      "Free WiFi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <div className="flex items-center justify-center w-full py-8 bg-gray-50 px-4 sm:px-6 pb-10">
      {/* Form Container Card */}
      <form className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
        <Title
          align="left"
          font="outfit"
          title="Add Room"
          subTitle="Provide information to set up a new room listing"
        />

        {/* Images Section */}
        <p className="text-gray-800 font-medium mt-8">Images</p>
        <div className="grid grid-cols-4 gap-4 my-3">
          {Object.keys(images).map((key) => (
            <label
              htmlFor={`roomImage${key}`}
              key={key}
              className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-2 hover:bg-gray-50 cursor-pointer transition"
            >
              <img
                className="max-h-12 object-contain opacity-80"
                src={
                  images[key]
                    ? URL.createObjectURL(images[key])
                    : assets.uploadArea
                }
                alt=""
              />
              <input
                type="file"
                id={`roomImage${key}`}
                accept="image/*"
                hidden
                onChange={(e) =>
                  setImages({ ...images, [key]: e.target.files[0] })
                }
              />
            </label>
          ))}
        </div>

        {/* Room Type & Price Row */}
        <div className="w-full flex flex-col sm:flex-row gap-4 mt-6">
          <div className="flex-1">
            <p className="text-gray-800 font-medium mb-1">Room Type</p>
            <select
              value={inputs.roomType}
              onChange={(e) =>
                setInputs({ ...inputs, roomType: e.target.value })
              }
              className="border border-gray-300 rounded-lg p-2.5 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="">Select Room Type</option>
              <option value="Room">Standard Room</option>
              <option value="Suite">Premium Suite</option>
              <option value="Villa">Luxury Villa</option>
              <option value="Retreat">Boutique Retreat</option>
            </select>
          </div>

          <div>
            <p className="text-gray-800 font-medium mb-1">
              Price <span className="text-xs text-gray-500">/night</span>
            </p>
            <input
              type="number"
              placeholder="0"
              className="border border-gray-300 rounded-lg p-2.5 w-full sm:w-32 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              onChange={(e) =>
                setInputs({ ...inputs, pricePerNight: e.target.value })
              }
              value={inputs.pricePerNight}
            />
          </div>
        </div>

        {/* Amenities Section */}
        <p className="text-gray-800 font-medium mt-6 mb-2">Amenities</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
          {Object.keys(inputs.amenities).map((amenity, index) => (
            <div key={index} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                id={`amenities${index + 1}`}
                className="w-4 h-4 rounded text-primary border-gray-300 focus:ring-primary"
                checked={inputs.amenities[amenity]}
                onChange={() =>
                  setInputs({
                    ...inputs,
                    amenities: {
                      ...inputs.amenities,
                      [amenity]: !inputs.amenities[amenity],
                    },
                  })
                }
              />
              <label
                htmlFor={`amenities${index + 1}`}
                className="text-sm text-gray-600 select-none cursor-pointer"
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white font-medium py-3 rounded-lg mt-8 hover:bg-gray-800 transition cursor-pointer"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;

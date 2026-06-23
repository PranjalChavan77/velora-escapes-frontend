import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
        className="w-4 h-4 accent-slate-900 cursor-pointer"
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        checked={selected}
        name="sortOption"
        onChange={() => onChange(label)}
        className="w-4 h-4 accent-slate-900 cursor-pointer"
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const amenities = [
  "Free WiFi",
  "Free Breakfast",
  "Room Service",
  "Pool Access",
  "Mountain View",
];

const Rooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  // Filter selection states
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedSort, setSelectedSort] = useState("Price Low to High");

  // Dynamic state driving UI listings
  const [filteredRooms, setFilteredRooms] = useState(roomsDummyData);

  const roomTypes = ["Suite", "Room", "Villa", "Retreat"];

  const priceRanges = ["200 to 400", "400 to 600", "600 to 1000"];

  const sortOption = ["Price Low to High", "Price High to Low", "Newest First"];

  const handleCheckboxChange = (checked, label, state, setState) => {
    if (checked) {
      setState([...state, label]);
    } else {
      setState(state.filter((item) => item !== label));
    }
  };

  const applyFilters = () => {
    let updatedList = [...roomsDummyData];

    // 1. Filter by Room Type
    if (selectedRoomTypes.length > 0) {
      updatedList = updatedList.filter((room) =>
        selectedRoomTypes.some((type) =>
          room.roomType.toLowerCase().includes(type.toLowerCase()),
        ),
      );
    }

    // 2. Filter by Amenities
    if (selectedAmenities.length > 0) {
      updatedList = updatedList.filter((room) =>
        selectedAmenities.every((amenity) => room.amenities.includes(amenity)),
      );
    }

    // 3. Filter by Price Range
    if (selectedPriceRanges.length > 0) {
      updatedList = updatedList.filter((room) => {
        return selectedPriceRanges.some((rangeString) => {
          const cleanString = rangeString.replace("$ ", "");
          const [min, max] = cleanString.split(" to ").map(Number);
          return room.pricePerNight >= min && room.pricePerNight <= max;
        });
      });
    }

    // 4. Sorting Core Logic
    if (selectedSort === "Price Low to High") {
      updatedList.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (selectedSort === "Price High to Low") {
      updatedList.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (selectedSort === "Newest First") {
      updatedList.sort((a, b) => b._id.localeCompare(a._id));
    }

    setFilteredRooms(updatedList);
    setOpenFilters(false);
  };

  const handleClearAll = () => {
    setSelectedRoomTypes([]);
    setSelectedPriceRanges([]);
    setSelectedAmenities([]);
    setSelectedSort("Price Low to High");
    setFilteredRooms(roomsDummyData);
  };

  return (
    <div className="flex bg-[#EEF4F7] flex-col-reverse lg:flex-row md:px-16 items-start justify-between pt-28 md:pt-35 px-4 lg:px-24 xl:px-32 pb-24">
      <div className="w-full lg:flex-1">
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">All Rooms</h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 pb-5 max-w-3xl">
            Discover handpicked luxury suites, boutique retreats, and premium
            stays across the world's most sought-after destinations.
          </p>
        </div>

        {filteredRooms.length === 0 ? (
          <div className="w-full bg-white rounded-3xl py-16 px-5 border border-slate-100 text-center shadow-sm">
            <p className="text-xl font-medium text-gray-700">
              No rooms match your criteria.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Try clearing filters or broadening your search options.
            </p>
            <button
              onClick={handleClearAll}
              className="mt-5 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredRooms.map((room) => (
            <div
              key={room._id}
              className="flex flex-col md:flex-row items-start py-10 gap-6 bg-white rounded-3xl px-5 mb-6 border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  window.scrollTo(0, 0);
                }}
                src={room.images[0]}
                alt="hotel-img"
                title="View Room Details"
                className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer w-full"
              />

              <div className="md:w-1/2 flex flex-col gap-2">
                <p className="text-gray-500">{room.hotel.city}</p>
                <p
                  className="text-3xl cursor-pointer text-gray-800 font-playfair hover:text-blue-600 transition"
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  {room.hotel.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <img
                    src={assets.starIconFilled}
                    alt="rating"
                    className="w-4"
                  />
                  <span className="font-medium text-gray-700">4.8</span>
                  <span className="text-gray-500">(200+ Reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{room.hotel.address}</span>
                </div>
                <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                  {room.amenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100"
                    >
                      {facilityIcons[item] && (
                        <img
                          src={facilityIcons[item]}
                          alt={item}
                          className="w-5 h-5"
                        />
                      )}
                      <p className="text-xs font-medium text-gray-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xl font-medium text-gray-800">
                  ${room.pricePerNight} /night
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Filter Sidebar Layout */}
      <div className="bg-white w-full lg:w-[320px] border border-gray-200 rounded-2xl shadow-sm text-gray-800 max-lg:mb-8 lg:mt-16 lg:ml-10 self-start">
        <div
          className={`flex items-center justify-between px-5 py-2.5 lg:border-b border-gray-300 ${openFilters ? "border-b" : ""}`}
        >
          <p className="text-base font-medium text-gray-900">Filters</p>
          <div className="text-xs cursor-pointer select-none">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden font-medium text-slate-700"
            >
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <span
              onClick={handleClearAll}
              className="hidden lg:block font-medium text-gray-400 hover:text-red-500 transition"
            >
              CLEAR ALL
            </span>
          </div>
        </div>

        <div
          className={`${openFilters ? "h-auto" : "h-0 lg:h-auto overflow-hidden transition-all duration-700"}`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox
                key={index}
                label={room}
                selected={selectedRoomTypes.includes(room)}
                onChange={(checked, label) =>
                  handleCheckboxChange(
                    checked,
                    label,
                    selectedRoomTypes,
                    setSelectedRoomTypes,
                  )
                }
              />
            ))}
          </div>

          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox
                key={index}
                label={`$ ${range}`}
                selected={selectedPriceRanges.includes(`$ ${range}`)}
                onChange={(checked, label) =>
                  handleCheckboxChange(
                    checked,
                    label,
                    selectedPriceRanges,
                    setSelectedPriceRanges,
                  )
                }
              />
            ))}
          </div>

          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Amenities</p>
            {amenities.map((item, index) => (
              <CheckBox
                key={index}
                label={item}
                selected={selectedAmenities.includes(item)}
                onChange={(checked, label) =>
                  handleCheckboxChange(
                    checked,
                    label,
                    selectedAmenities,
                    setSelectedAmenities,
                  )
                }
              />
            ))}
          </div>

          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOption.map((option, index) => (
              <RadioButton
                key={index}
                label={option}
                selected={selectedSort === option}
                onChange={(label) => setSelectedSort(label)}
              />
            ))}
          </div>

          <div className="px-5 pb-6 pt-4">
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleClearAll}
                className="flex-1 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all cursor-pointer"
              >
                Reset
              </button>

              <button
                onClick={applyFilters}
                className="flex-1 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;

import React, { useEffect, useState } from "react";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
  userDummyData, 
} from "../assets/assets";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // Read search values from url query strings

  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const [checkIn, setCheckIn] = useState(searchParams.get("checkIn") || "");
  const [checkOut, setCheckOut] = useState(searchParams.get("checkOut") || "");
  const [guests, setGuests] = useState(searchParams.get("guests") || "2");

  useEffect(() => {
    const foundRoom = roomsDummyData.find((room) => room._id === id);

    if (foundRoom) {
      setRoom(foundRoom);
      setMainImage(foundRoom.images[0]);
    }
  }, [id]);

  const handleCheckAvailability = (e) => {
    e.preventDefault();

    // Night stay delta generation math
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const diffTime = Math.abs(date2 - date1);
    const totalNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

    // Use pricePerNight or a fallback number to calculate pricing
    const priceNightly = room.pricePerNight || room.price || 300; 
    const baseTotal = priceNightly * totalNights;
    const taxes = Math.round(baseTotal * 0.1); // 10% standard tax 
    const grandTotal = baseTotal + taxes;

    // Package item configuration metadata data values 
    const tentativeStayDetails = {
      hotelId: room._id,
      hotelName: room.hotel.name,
      hotelAddress: room.hotel.address,
      roomType: room.roomType,
      roomImage: room.images[0],
      checkIn,
      checkOut,
      guests,
      totalNights,
      pricing: {
        pricePerNight: priceNightly,
        baseTotal,
        taxes,
        grandTotal
      }
    };

    localStorage.setItem("velora_pending_booking", JSON.stringify(tentativeStayDetails));

    navigate("/booking");
    window.scrollTo(0, 0);
  };

  return (
    room && (
      <div className="py-24 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#EFEAE3] min-h-screen text-slate-800 antialiased">
        
        {/* Header Label */}
        <div className="flex flex-col items-start mb-3 max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-slate-500">
            Velora Signature Stay
          </p>
        </div>

        {/* Title and Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300/60 pb-6 max-w-5xl mx-auto">
          <div>
            <h1 className="font-playfair text-4xl md:text-5xl font-medium text-slate-900 leading-tight">
              {room.hotel.name}
              <span className="font-inter text-lg font-normal text-slate-500 block sm:inline sm:ml-3 mt-1 sm:mt-0">
                — {room.roomType}
              </span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
              <div className="flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-md shadow-sm">
                <img src={assets.starIconFilled} alt="rating" className="w-4" />
                <span className="font-semibold text-slate-800">4.8</span>
                <span className="text-slate-500 font-light">(200+ Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                <img src={assets.locationIcon} alt="location" className="w-4 opacity-70" />
                <span>{room.hotel.address}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="inline-block text-xs font-bold uppercase tracking-wider py-2 px-4 text-white bg-orange-600 rounded-full shadow-sm shadow-orange-600/20">
              20% OFF
            </p>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="flex flex-col lg:flex-row mt-8 gap-4 max-w-5xl mx-auto w-full lg:h-96">
          <div className="lg:w-7/12 w-full h-72 sm:h-80 lg:h-full">
            <img
              src={mainImage}
              alt="Room main preview"
              className="rounded-2xl w-full h-full shadow-md object-cover border border-white/40"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 lg:w-5/12 w-full h-auto lg:h-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  alt={`Room preview ${index + 1}`}
                  onClick={() => setMainImage(image)}
                  className={`w-full h-36 sm:h-40 lg:h-full rounded-2xl shadow-sm object-cover cursor-pointer transition-all duration-300 border ${
                    mainImage === image
                      ? "border-slate-900 ring-4 ring-slate-900/10 scale-[1.01]"
                      : "border-transparent hover:scale-[1.01] opacity-80 hover:opacity-100"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 mt-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column */}
          <div className="w-full lg:w-7/12 space-y-10">
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-medium text-slate-900">
                Premium Amenities & Comfort
              </h2>
              <p className="text-slate-600 mt-2 text-sm md:text-base leading-relaxed">
                Thoughtfully designed spaces with modern comforts and luxury
                services to elevate every stay.
              </p>
              <div className="flex flex-wrap items-center mt-4 gap-2.5">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-4 h-4 opacity-80"
                    />
                    <p className="text-xs font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roomCommonData.map((spec, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/40 rounded-2xl border border-white/50 shadow-sm">
                  <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-200/60 shrink-0">
                    <img src={spec.icon} alt="" className="w-5 h-5 opacity-80" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{spec.title}</p>
                    <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{spec.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="py-6 border-y border-slate-300/60">
              <p className="leading-7 text-slate-700 text-base font-light italic">
                "Experience exceptional hospitality in one of our carefully curated
                accommodations. Enjoy premium amenities, elegant interiors, and
                convenient access to nearby attractions."
              </p>
            </div>
          </div>

          <div className="w-full lg:w-5/12 lg:sticky lg:top-28">
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-xl shadow-slate-900/5">
              <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-slate-100">
                <span className="text-slate-500 text-sm font-medium">Price per night</span>
                <p className="text-3xl font-semibold text-slate-900">
                  ${room.pricePerNight || room.price}
                  <span className="text-sm font-normal text-slate-400"> / night</span>
                </p>
              </div>

              <form onSubmit={handleCheckAvailability} className="space-y-4">
                <div className="grid grid-cols-2 border border-slate-200 rounded-xl overflow-hidden divide-x divide-slate-200">
                  <div className="p-3 hover:bg-slate-50/50 transition-colors">
                    <label htmlFor="checkInDate" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Check-In
                    </label>
                    <input
                      type="date"
                      id="checkInDate"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-xs font-medium text-slate-800 bg-transparent mt-1 outline-none cursor-pointer"
                      required
                    />
                  </div>
                  <div className="p-3 hover:bg-slate-50/50 transition-colors">
                    <label htmlFor="checkOutDate" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Check-Out
                    </label>
                    <input
                      type="date"
                      id="checkOutDate"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full text-xs font-medium text-slate-800 bg-transparent mt-1 outline-none cursor-pointer"
                      required
                    />
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-3 hover:bg-slate-50/50 transition-colors">
                  <label htmlFor="guests" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="2 guests"
                    min="1"
                    max="10"
                    className="w-full text-sm font-medium text-slate-800 bg-transparent mt-1 outline-none placeholder-slate-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 active:scale-[0.99] transition-all text-white font-medium rounded-xl py-3.5 text-base cursor-pointer shadow-md shadow-slate-900/10 mt-2"
                >
                  Check Availability
                </button>
              </form>
              <p className="text-center text-[11px] text-slate-400 mt-4">You won't be charged yet</p>
            </div>
          </div>
        </div>

        {/* HOST SECTION */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={room.hotel.owner?.image || userDummyData.image}
                alt="host avatar"
                className="h-18 w-18 rounded-full object-cover border border-slate-100 bg-slate-100"
              />
              <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Property Host</p>
              <h3 className="text-lg font-semibold text-slate-900 mt-0.5">
                Hosted by {room.hotel.owner?.username || userDummyData.username}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Professional Host • 200+ Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all cursor-pointer text-sm shadow-sm"
            >
              Contact Host
            </button>
            <button
              type="button"
              onClick={() => navigate("/rooms")}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-700 hover:bg-slate-50 transition-all cursor-pointer text-sm shadow-sm"
            >
              View More Rooms
            </button>
          </div>
        </div>

      </div>
    )
  );
};

export default RoomDetails;
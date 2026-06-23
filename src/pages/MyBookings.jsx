import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  // Initialize state by combining localStorage creations with fallback dummy data
  const [bookings, setBookings] = useState(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("velora_user_bookings")) || [];
    return [...savedBookings, ...userBookingsDummyData];
  });

  // Action handler to switch status from "Unpaid" to "Paid"
  const handlePayNow = (bookingId) => {
    // 1. Update component UI state
    const updatedBookings = bookings.map((b) => {
      if (b._id === bookingId) {
        return { ...b, isPaid: true };
      }
      return b;
    });
    setBookings(updatedBookings);

    // 2. Sync changes back into localStorage if it was a user-created booking
    const localSaved =
      JSON.parse(localStorage.getItem("velora_user_bookings")) || [];
    const updatedLocal = localSaved.map((b) => {
      if (b._id === bookingId) {
        return { ...b, isPaid: true };
      }
      return b;
    });
    localStorage.setItem("velora_user_bookings", JSON.stringify(updatedLocal));
  };

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen bg-[#FAF9F6]">
      <Title
        title="My Bookings"
        subTitle="Review your upcoming trips, manage reservations, and track your stay history."
        align="left"
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800 bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm">
        {/* Desktop Header Row */}
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-sm tracking-wider uppercase text-gray-400 py-3 gap-4">
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {/* Bookings List */}
        {bookings.length === 0 ? (
          <p className="text-center text-gray-400 py-12 text-sm">
            No bookings found.
          </p>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] items-center w-full border-b border-gray-200 py-6 last:border-b-0 gap-6 md:gap-4 hover:bg-slate-50/40 transition-colors px-2 rounded-xl"
            >
              {/* Column 1: Hotel Details */}
              <div className="flex flex-col sm:flex-row items-start">
                <img
                  src={booking.room?.images?.[0] || booking.roomImage}
                  alt="room-img"
                  className="w-full sm:w-44 h-28 rounded-xl shadow-sm object-cover shrink-0 border"
                />
                <div className="flex flex-col gap-1.5 mt-3 sm:mt-0 sm:ml-4">
                  <h3 className="font-playfair text-xl font-bold text-slate-900 flex flex-wrap items-center gap-2 leading-tight">
                    {booking.hotel?.name || booking.hotelName}
                    <span className="font-inter text-[10px] font-semibold tracking-wide uppercase bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">
                      {booking.room?.roomType || booking.roomType}
                    </span>
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500 text-xs font-medium mt-1">
                    <img
                      src={assets.locationIcon}
                      alt="location"
                      className="w-3.5 h-3.5 opacity-70"
                    />
                    <span>
                      {booking.hotel?.address || booking.hotelAddress}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs font-medium">
                    <img
                      src={assets.guestsIcon}
                      alt="guest"
                      className="w-3.5 h-3.5 opacity-70"
                    />
                    <span>Guests: {booking.guests}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 mt-2">
                    Total:{" "}
                    <span className="text-amber-600">
                      ${booking.totalPrice || booking.price}
                    </span>
                  </p>
                </div>
              </div>

              {/* Column 2: Date and timing */}
              <div className="flex flex-row md:flex-col justify-between md:justify-center md:gap-4 bg-gray-50/60 md:bg-transparent p-3.5 md:p-0 rounded-xl border border-gray-100 md:border-0">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider md:mb-0.5">
                    Check-In
                  </p>
                  <p className="text-gray-800 text-xs font-semibold">
                    {new Date(
                      booking.checkInDate || booking.checkIn,
                    ).toDateString()}
                  </p>
                </div>
                <div className="text-right md:text-left">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider md:mb-0.5">
                    Check-Out
                  </p>
                  <p className="text-gray-800 text-xs font-semibold">
                    {new Date(
                      booking.checkOutDate || booking.checkOut,
                    ).toDateString()}
                  </p>
                </div>
              </div>

              {/* Column 3: Payment status */}
              <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center md:gap-2 pt-1">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${booking.isPaid ? "bg-emerald-500" : "bg-red-500"}`}
                  ></div>
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${booking.isPaid ? "text-emerald-600" : "text-red-500"}`}
                  >
                    {booking.isPaid ? "Paid" : "Unpaid"}
                  </p>
                </div>
                {!booking.isPaid && (
                  <button
                    onClick={() => handlePayNow(booking._id)}
                    className="px-4 py-1.5 text-xs border border-gray-300 rounded-full hover:bg-slate-900 hover:text-white transition-all cursor-pointer font-bold text-gray-700 bg-white shadow-sm"
                  >
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookings;

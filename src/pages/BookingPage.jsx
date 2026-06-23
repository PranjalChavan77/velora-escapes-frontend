import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();
  const [stayData, setStayData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("velora_pending_booking");
    if (data) {
      setStayData(JSON.parse(data));
    } else {
      navigate("/rooms");
    }
  }, [navigate]);

  const handleConfirmReservation = (e) => {
    e.preventDefault();

    // Generate random mock tracking ID
    const randomBookingId = "BK-" + Math.floor(100000 + Math.random() * 900000);

    // Format clean calendar text structures
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const checkInFormatted = new Date(stayData.checkIn).toLocaleDateString(
      "en-US",
      options,
    );
    const checkOutFormatted = new Date(stayData.checkOut).toLocaleDateString(
      "en-US",
      options,
    );

    const completeNewReceipt = {
      _id: randomBookingId,
      hotelName: stayData.hotelName,
      hotelAddress: stayData.hotelAddress,
      roomType: stayData.roomType,
      roomImage: stayData.roomImage,
      checkIn: checkInFormatted,
      checkOut: checkOutFormatted,
      guests: stayData.guests,
      price: stayData.pricing.grandTotal, 
      status: "Unpaid",
    };

    // Append to live storage trace collection records
    const localDatabaseHistory =
      JSON.parse(localStorage.getItem("velora_user_bookings")) || [];
    localStorage.setItem(
      "velora_user_bookings",
      JSON.stringify([completeNewReceipt, ...localDatabaseHistory]),
    );

    // Route back straight to dashboard view to see the addition live
    localStorage.removeItem("velora_pending_booking");
    navigate("/my-bookings");
    window.scrollTo(0, 0);
  };

  if (!stayData) return null;

  return (
    <div className="py-28 px-4 md:px-16 lg:px-24 bg-[#FAF9F6] min-h-screen text-slate-800 flex flex-col lg:flex-row gap-10">
      
      <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl border border-slate-200/60 shadow-sm">
        <h2 className="text-2xl font-playfair font-semibold text-slate-900 mb-1">
          Confirm and Guarantee Stay
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          Review your parameters before committing verification parameters.
        </p>

        <form onSubmit={handleConfirmReservation} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                required
                className="w-full mt-1 border border-slate-200 p-2.5 rounded-xl outline-none text-sm text-slate-800"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                required
                className="w-full mt-1 border border-slate-200 p-2.5 rounded-xl outline-none text-sm text-slate-800"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              placeholder="johndoe@velora.com"
              required
              className="w-full mt-1 border border-slate-200 p-2.5 rounded-xl outline-none text-sm text-slate-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium p-3.5 rounded-xl mt-4 cursor-pointer transition-colors"
          >
            Complete Reservation Detail
          </button>
        </form>
      </div>

      {/* Pricing breakdowns overview details layout metrics panel */}
      <div className="w-full lg:w-96 bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm h-fit space-y-5">
        <div className="flex gap-4 items-center">
          <img
            src={stayData.roomImage}
            alt=""
            className="w-20 h-20 object-cover rounded-xl shadow-inner border"
          />
          <div>
            <h3 className="font-playfair font-semibold text-base text-slate-900 leading-tight">
              {stayData.hotelName}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {stayData.hotelAddress}
            </p>
          </div>
        </div>

        <hr className="border-slate-100" />

        <div className="space-y-2 text-xs text-slate-600">
          <div className="flex justify-between">
            <span>Stay Length:</span>
            <span className="font-semibold text-slate-800">
              {stayData.totalNights} Night(s)
            </span>
          </div>
          <div className="flex justify-between">
            <span>Check-In:</span>
            <span className="font-semibold text-slate-800">
              {stayData.checkIn}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Check-Out:</span>
            <span className="font-semibold text-slate-800">
              {stayData.checkOut}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Guests:</span>
            <span className="font-semibold text-slate-800">
              {stayData.guests} Guest(s)
            </span>
          </div>
        </div>

        <hr className="border-slate-100" />

        <div className="space-y-2.5 text-xs">
          <div className="flex justify-between text-slate-500">
            <span>
              Base Room Fee (${stayData.pricing.pricePerNight} $\times${" "}
              {stayData.totalNights} nights)
            </span>
            <span>${stayData.pricing.baseTotal}</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Estimated Local Taxes (10%)</span>
            <span>${stayData.pricing.taxes}</span>
          </div>
          <hr className="border-slate-100" />
          <div className="flex justify-between text-sm font-bold text-slate-900 pt-1">
            <span>Total Stay Amount</span>
            <span className="text-amber-600">
              ${stayData.pricing.grandTotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setdashboardData] = useState(dashboardDummyData);
  const bookingsList =
    dashboardData.bookings || dashboardData.recentBookings || [];

  return (
    <div className="space-y-8 pr-2 animate-fade-in pb-10">
      <div>
        <Title
          title="Dashboard"
          font="outfit"
          align="left"
          subTitle="Overview of your property performance"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Total Bookings Card */}
        <div className="bg-blue-50/40 border border-blue-100/70 rounded-2xl flex items-center p-6 shadow-sm hover:shadow-md transition-all duration-200 group">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-200 shadow-sm">
            <img
              src={assets.totalBookingIcon}
              alt="booking-icon"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
              Total Bookings
            </p>
            <p className="text-blue-900 text-2xl font-bold mt-0.5">
              {dashboardData.totalBookings || 0}
            </p>
          </div>
        </div>

        {/* Total Revenue Card */}
        <div className="bg-emerald-50/40 border border-emerald-100/70 rounded-2xl flex items-center p-6 shadow-sm hover:shadow-md transition-all duration-200 group">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:scale-110 transition-transform duration-200 shadow-sm">
            <img
              src={assets.totalRevenueIcon}
              alt="revenue-icon"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
              Total Revenue
            </p>
            <p className="text-emerald-900 text-2xl font-bold mt-0.5">
              ${dashboardData.totalRevenue?.toLocaleString() || "0"}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings Container */}
      <div className="bg-slate-50/60 border border-slate-200/60 rounded-2xl shadow-sm p-6">
        <h2 className="text-lg text-slate-800 font-bold mb-4 tracking-tight">
          Recent Bookings
        </h2>

        {/* Responsive Table Wrapper */}
        <div className="w-full overflow-x-auto rounded-xl border border-slate-200/50 max-h-96 overflow-y-auto shadow-inner bg-white">
          <table className="w-full border-collapse text-left">
            <thead className="bg-slate-100/80 sticky top-0 backdrop-blur-sm border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-5 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                  User Name
                </th>
                <th className="py-3.5 px-5 text-slate-500 font-semibold text-xs uppercase tracking-wider max-sm:hidden">
                  Room Type
                </th>
                <th className="py-3.5 px-5 text-slate-500 font-semibold text-xs uppercase tracking-wider text-center">
                  Total Amount
                </th>
                <th className="py-3.5 px-5 text-slate-500 font-semibold text-xs uppercase tracking-wider text-center">
                  Payment Status
                </th>
              </tr>
            </thead>

            <tbody className="text-sm divide-y divide-slate-100 font-normal text-slate-700 bg-white">
              {bookingsList.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50/80 transition-colors duration-150"
                >
                  <td className="py-3.5 px-5 font-medium text-slate-800">
                    {item.user?.username || "Guest"}
                  </td>
                  <td className="py-3.5 px-5 max-sm:hidden text-slate-600">
                    {item.room?.roomType || "Standard"}
                  </td>
                  <td className="py-3.5 px-5 text-center font-semibold text-slate-800">
                    ${item.totalPrice}
                  </td>
                  <td className="py-3.5 px-5 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${
                        item.isPaid
                          ? "bg-emerald-100/70 text-emerald-800 border border-emerald-200/30"
                          : "bg-amber-100/70 text-amber-800 border border-amber-200/30"
                      }`}
                    >
                      {item.isPaid ? "Completed" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}

              {bookingsList.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="py-8 text-center text-slate-400 font-light bg-white"
                  >
                    No recent bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

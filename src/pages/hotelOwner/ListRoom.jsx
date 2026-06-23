import React from "react";
import { roomsDummyData } from "../../assets/assets";
import { useState } from "react";
import Title from "../../components/Title";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  return (
    <div className="flex items-center justify-center w-full py-8 bg-gray-50 px-4 sm:px-6">
      <div className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
        <Title
          align="left"
          font="outfit"
          title="Room Listings"
          subTitle="View and manage all active hotel rooms"
        />

        <p className="text-gray-500 mt-8 font-medium">All Rooms</p>

        <div className="w-full overflow-x-auto rounded-xl border border-slate-200/50 max-h-96 overflow-y-auto shadow-inner bg-white mt-3">
          <table className="w-full border-collapse text-left">
            <thead className="bg-slate-100 sticky top-0 z-10 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-5 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                  Name
                </th>
                <th className="py-3.5 px-5 text-slate-500 font-semibold text-xs uppercase tracking-wider max-sm:hidden">
                  Facility
                </th>
                <th className="py-3.5 px-5 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                  Price / Night
                </th>
                <th className="py-3.5 px-5 text-slate-500 font-semibold text-xs uppercase tracking-wider min-w-30 text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {rooms.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-4 px-5 text-gray-700 border-t border-slate-100 font-medium">
                    {item.roomType}
                  </td>
                  <td className="py-4 px-5 text-gray-600 border-t border-slate-100 max-sm:hidden">
                    {item.amenities.join(", ")}
                  </td>
                  <td className="py-4 px-5 text-gray-700 border-t border-slate-100 font-medium">
                    ${item.pricePerNight}
                  </td>
                  <td className="py-4 px-5 border-t border-slate-100 text-center pr-6">
                    <label className="inline-flex relative items-center cursor-pointer text-gray-900">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={item.isAvailable}
                        readOnly
                      />
                      <div className='w-11 h-6 bg-slate-200 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200 after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full'></div>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListRoom;

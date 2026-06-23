import React from "react";
import { assets, userDummyData } from "../assets/assets";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl font-medium text-gray-900 mb-3">
            Connect With Our Concierge
          </h1>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Whether planning your next getaway or inquiring about an existing
            reservation, our elite team is standing by.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left md:pr-8 md:border-r border-gray-100">
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Corporate Office
              </h3>
              <p className="text-gray-800 font-medium">Velora Escapes Ltd.</p>
              <p className="text-gray-500 text-sm">
                Champs-Élysées, Paris, France
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Direct Channels
              </h3>
              <p className="text-gray-800 text-sm mb-1">
                <span className="text-gray-400 font-medium">Email: </span>
                {userDummyData.email}
              </p>
              <p className="text-gray-800 text-sm">
                <span className="text-gray-400 font-medium">Hotline: </span>
                +1 (800) 835-6727
              </p>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto md:mx-0 bg-slate-50/80 p-8 rounded-2xl border border-slate-100 shadow-sm">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="E.g., Ava Mitchell"
                  className="w-full border-b border-gray-200 bg-transparent py-2 focus:border-gray-800 outline-none text-gray-800 transition-all placeholder:text-gray-300 text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-b border-gray-200 bg-transparent py-2 focus:border-gray-800 outline-none text-gray-800 transition-all placeholder:text-gray-300 text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">
                  Message Details
                </label>
                <textarea
                  placeholder="Tell us about your custom stay requirements..."
                  rows="4"
                  className="w-full border-b border-gray-200 bg-transparent py-2 focus:border-gray-800 outline-none text-gray-800 transition-all placeholder:text-gray-300 text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gray-950 text-white py-3 px-6 rounded-lg hover:bg-gray-800 font-medium text-sm tracking-wide transition-all mt-2 cursor-pointer shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

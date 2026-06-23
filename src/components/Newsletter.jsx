import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-slate-600 py-14 px-6 text-center text-white flex flex-col items-center">
      <p className="text-amber-400 mb-3 font-medium tracking-wide">
        VELORA PRIVILEGE CLUB
      </p>

      <h2 className="max-w-3xl mx-auto text-4xl md:text-5xl font-playfair font-semibold mt-3 text-balance leading-tight">
        Be First to Discover Exceptional Destinations
      </h2>

      <p className="max-w-2xl text-slate-300 mt-4">
        Receive curated hotel recommendations, luxury travel inspiration, and
        members-only offers delivered directly to your inbox.
      </p>

      <div className="flex flex-col sm:flex-row items-center mt-8 border mb-3 border-slate-700 rounded-full p-1 max-w-xl w-full bg-slate-900/50">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 bg-transparent outline-none px-5 py-3 text-white placeholder:text-slate-500"
        />

        <button className="bg-white text-black font-medium rounded-full px-8 py-3 hover:scale-105 transition-all cursor-pointer">
          Get Exclusive Access
        </button>
      </div>

      <p className="mt-3 text-sm text-gray-400">
        Join 10,000+ travelers receiving weekly destination inspiration.
      </p>
    </div>
  );
};

export default Newsletter;

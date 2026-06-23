import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 py-20 lg:px-24 bg-slate-200">
      <div className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
        Featured Collection
      </div>
      <Title
        title="Velora Escapes"
        subTitle="Discover exceptional stays, elegant retreats, and unforgettable experiences across the world's most captivating destinations."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 items-center justify-center">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className="
mt-12
px-6 py-3
text-sm font-medium
rounded-full
border border-slate-300
bg-white
hover:bg-slate-900
hover:text-white
transition-all duration-300
cursor-pointer
shadow-sm
"
      >
        View All Destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;

import React from "react";
import { testimonials } from "../assets/assets";

const Testimonial = () => {
  const rows = [
    { start: 0, end: 4, className: "animate-scroll" },
    { start: 4, end: 8, className: "animate-scroll-reverse" },
  ];

  const renderCard = (testimonial, index) => (
    <div
      key={index}
      className="bg-orange-100 border-amber-500 hover:border-slate-300 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 shrink-0 w-87"
    >
      <div className="flex mb-4">
        {Array(testimonial.rating)
          .fill(0)
          .map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star text-transparent fill-[#737373]"
              aria-hidden="true"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          ))}
      </div>
      <p className="text-neutral-700 text-sm leading-relaxed mb-6">
        {testimonial.review}
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
        />
        <div>
          <p className="font-medium text-neutral-900 text-sm">
            {testimonial.name}
          </p>
          <p className="text-neutral-600 text-sm">{testimonial.address}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>
        {`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    @keyframes scrollReverse {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }
                   .animate-scroll {
    animation: scroll 28s linear infinite;
}

.animate-scroll-reverse {
    animation: scrollReverse 28s linear infinite;
}
                `}
      </style>
      <section className="bg-linear-to-b from-white to-slate-50 pt-8 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-neutral-100 border border-neutral-400 rounded-full px-4 py-1 mb-3">
              <span className="text-xs text-neutral-600">
                Trusted by Travelers
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">
              Memories Shared by Our Guests
            </h2>
            <p className="text-neutral-600 text-sm max-w-96 mx-auto">
              Real experiences from travelers who discovered memorable stays
              through Velora.
            </p>
          </div>

          <div className="space-y-6">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-28 bg-linear-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-28 bg-linear-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

                <div className={`flex gap-6 ${row.className}`}>
                  {[
                    ...testimonials.slice(row.start, row.end),
                    ...testimonials.slice(row.start, row.end),
                  ].map((testimonial, index) => renderCard(testimonial, index))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

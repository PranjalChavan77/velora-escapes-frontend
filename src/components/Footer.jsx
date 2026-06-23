import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-white pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <img src={assets.veloraLogo} alt="logo" className="mb-4 h-8 md:h-9" />
          <p className="text-sm text-gray-100/80">
            Discover handpicked hotels, luxury escapes, and unforgettable travel
            experiences with Velora. Your next exceptional stay begins here.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {/* Instagram */}
            <img
              src={assets.instagramIcon}
              alt="instagram-icon"
              className="w-6"
            />
            {/* Facebook */}
            <img
              src={assets.facebookIcon}
              alt="facebook-icon"
              className="w-6"
            />
            {/* Twitter */}
            <img src={assets.twitterIcon} alt="twitter-icon" className="w-6" />
            {/* LinkedIn */}
            <img
              src={assets.linkendinIcon}
              alt="linkedin-icon"
              className="w-6"
            />
          </div>
        </div>

        <div>
          <p className="text-lg text-white">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm ">
            <li>
              <a href="#">About Velora</a>
            </li>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Travel Guides</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div>
          <p className=" text-lg">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Booking Support</a>
            </li>
            <li>
              <a href="#">Cancellation Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className=" border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} Velora. All rights reserved.</p>
        <ul className="flex items-center gap-4 text-sm">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

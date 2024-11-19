
"use client";
import Image from "next/image";
import React from "react";

const MaintenancePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-950 animate-pulse">
      <div className="text-center p-6">
        {/* Logo Section */}
        <div className="mb-8 flex justify-center">
         <Image  src="/logo.svg" width={500} height={500}/>
        </div>

        {/* Title and Subtitle */}
        <h1 className="text-2xl font-light text-white">We’re Still</h1>
        <h2 className="text-3xl font-bold text-orange-500 mt-2">
          Cooking Our Website
        </h2>
        <p className="text-gray-400 mt-4">
          We are going to launch our website very soon. Stay Tuned.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center mt-6 space-x-4">
  <button
    className="p-2 transition-transform transform hover:scale-110"
    onClick={() => window.open("https://www.linkedin.com/company/smatik-gmbh", "_blank")}
  >
    <img
      src="/Linkedin.svg"
      alt="LinkedIn"
      className="h-6 w-6 filter-orange"
    />
  </button>
  <button
    className="p-2 transition-transform transform hover:scale-110"
    onClick={() => window.open("https://www.facebook.com/profile.php?id=61569088738583", "_blank")}
  >
    <img
      src="/Facebook.svg"
      alt="Facebook"
      className="h-6 w-6 filter-orange"
    />
  </button>
  <button
    className="p-2 transition-transform transform hover:scale-110"
    onClick={() => window.open("https://x.com/smatikgmbh", "_blank")}
  >
    <img
      src="/Twitter X.svg"
      alt="Twitter"
      className="h-6 w-6 filter-orange"
    />
  </button>
  <style jsx>{`
    .filter-orange {
      filter: brightness(0) saturate(100%) invert(52%) sepia(66%) saturate(2012%) hue-rotate(8deg) brightness(97%) contrast(102%);
    }
  `}</style>
</div>

      </div>
    </div>
  );
};

export default MaintenancePage;

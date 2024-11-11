import React from "react";
import mosque from "../assets/mosque.svg";
import bannerImage from "../assets/alkawsar-banner-230px.png";
import coverOne from "../assets/cover-1.jpg";
import coverTwo from "../assets/cover-2.jpg";
import coverThree from "../assets/cover-3.jpg";
import coverFour from "../assets/cover-4.jpg";
import coverFive from "../assets/cover-5.jpg";
import coverSix from "../assets/cover-6.png";

// Helper function to truncate description

// Helper function to limit title to 5 words with line break if needed

const Faq = () => {
  return (
    <div
      className="font-bengali pt-24
    "
    >
      {/* Banner Section */}
      <div
        className="relative min-w-full bg-cover bg-top w-full h-60 flex items-center font-bengali"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-4 md:px-8 w-full">
          <div className="p-6">
            <div className="w-full md:w-[40%] text-center md:text-left font-bengali">
              <div className="flex items-center">
                <h2 className="text-xl md:text-3xl flex-grow text-white font-bold pb-[10px] border-b border-yellow-500">
                  বিভাগ
                </h2>
                {/* Mosque Icon */}
                <img
                  src={mosque}
                  alt="mosque"
                  className="w-12 h-auto -ml-[44px] hidden md:block"
                />
              </div>
              {/* Subtitle Text */}
              <p className="mt-4 text-2xl">আপনি যা জানতে চেয়েছেন</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0  md:gap-4 p-8">
          {/* Left Column with Articles and Right Border */}
          <div className="md:col-span-2 space-y-6 pr-4 relative">
            <h2 className="font-bold text-2xl">কোনো প্রবন্ধ পাওয়া যায়নি</h2>
            <div className="absolute top-0 right-0 h-[474px] border-r-2 border-gray-200"></div>
          </div>

          {/* Right Column with Recent Covers */}
          <div>
            <div className="flex items-center">
              <h2 className="text-2xl pt-1 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
                প্রসঙ্গসমূহ »
              </h2>
              <img
                src={mosque}
                alt="mosque"
                className="w-8 h-auto -ml-[30px]"
              />
            </div>

            <div className="">
              <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 ">
                {[
                  coverOne,
                  coverTwo,
                  coverThree,
                  coverFour,
                  coverFive,
                  coverSix,
                ].map((cover, index) => (
                  <div key={index} className="relative group">
                    {/* Image */}
                    <img
                      src={cover}
                      alt={`Cover ${index + 1}`}
                      className="w-full h-auto"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

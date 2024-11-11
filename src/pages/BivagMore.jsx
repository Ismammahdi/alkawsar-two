import React from "react";
import mosque from "../assets/mosque.svg";
import bannerImage from "../assets/alkawsar-banner-230px.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BivagMore = () => {
  const items = [
    { text: "সম্পাদকীয়", path: "/ismam" },
    { text: "আনওয়ারুল কুরআন", path: "/anwarul-quran" },
    { text: "প্রচলিত ভুল", path: "/common-mistakes" },
    { text: "আপনি যা জানতে চেয়েছেন", path: "/faq" },
    { text: "শিক্ষার্থীদের পাতাঃ", path: "/student-page" },
    { text: "শিক্ষা পরামর্শ", path: "/education-advice" },
    { text: "শিশু-কিশোর", path: "/youth" },
    { text: "পর্দানশীন", path: "/women" },
    { text: "ফিলহাল", path: "/current" },
    { text: "মারকাযের দিনরাত", path: "/center-day-night" },
    { text: "পাঠকের পাতা", path: "/reader-page" },
    { text: "খবর ... অতঃপর ...", path: "/news" },
  ];
  return (
    <div className="pt-24">
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
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10">
          <div className="item col-span-2 space-y-4 pt-10">
            {items.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="py-4 flex items-center border-b border-gray-300  px-4 hover:bg-gray-100"
              >
                <FaArrowRight className="text-yellow-600 mr-3 text-3xl font-bold" />
                <span className="text-gray-800 hover:text-green-600 text-lg">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
          <div>{/* Right column content can go here */}</div>
        </div>
      </div>
    </div>
  );
};

export default BivagMore;

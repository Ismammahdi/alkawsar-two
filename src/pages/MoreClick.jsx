import React, { useState } from "react";
import bannerImage from "../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../assets/mosque.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const MoreClick = () => {
  // State to keep track of the active page
  const [activePage, setActivePage] = useState(1);

  // Array of page numbers for demonstration
  const handlePageClick = (page) => {
    if (page !== "...") {
      setActivePage(page);
    }
  };
  const items = [
    { id: 1, text: "রজব ১৪৪৩ / ফেব্রুয়ারি ২০২২" },
    { id: 2, text: "জুমাদাল আখিরাহ ১৪৪৩ / জানুয়ারি ২০২২" },
    { id: 3, text: "জুমাদাল উলা ১৪৪৩ / ডিসেম্বর ২০২১" },
    { id: 4, text: "রবিউল আখির ১৪৪৩ / নভেম্বর ২০২১" },
    { id: 5, text: "রবিউল আউয়াল ১৪৪৩ / অক্টোবর ২০২১" },
    { id: 6, text: "সফর ১৪৪৩ / সেপ্টেম্বর ২০২১" },
    { id: 7, text: "মুহাররম ১৪৪৩ / আগস্ট ২০২১" },
    { id: 8, text: "যিলহজ্ব ১৪৪২ / জুলাই ২০২১" },
    { id: 9, text: "যিলকদ ১৪৪২ / জুন ২০২১" },
    { id: 10, text: "শাওয়াল ১৪৪২ / মে ২০২১" },
    { id: 11, text: "শাবান-রমযান ১৪৪২ / মার্চ-এপ্রিল ২০২১" },
    { id: 12, text: "রজব ১৪৪২ / ফেব্রুয়ারি ২০২১" },
    { id: 13, text: "জুমাদাল উলা-জুমাদাল আখিরাহ ১৪৪২ / জানুয়ারি ২০২১" },
    { id: 14, text: "রবিউল আখির ১৪৪২ / ডিসেম্বর ২০২০" },
    { id: 15, text: "রবিউল আউয়াল ১৪৪২ / নভেম্বর ২০২০" },
    { id: 16, text: "সফর ১৪৪২ / অক্টোবর ২০২০" },
    { id: 17, text: "মুহাররম ১৪৪২ / সেপ্টেম্বর ২০২০" },
    { id: 18, text: "যিলহজ্ব ১৪৪১ / আগস্ট ২০২০" },
    { id: 19, text: "যিলকদ ১৪৪১ / জুলাই ২০২০" },
    { id: 20, text: "শাওয়াল ১৪৪১ / জুন ২০২০" },
    { id: 21, text: "শাবান-রমযান-১৪৪১ / এপ্রিল- মে ২০২০" },
    { id: 22, text: "রজব ১৪৪১ / মার্চ ২০২০" },
    { id: 23, text: "জুমাদাল আখিরাহ ১৪৪১ / ফেব্রুয়ারি ২০২০" },
    { id: 24, text: "জুমাদাল উলা ১৪৪১ / জানুয়ারি ২০২০" },
    { id: 25, text: "রবিউস আখির ১৪৪১ / ডিসেম্বর ২০১৯" },
    { id: 26, text: "রবিউল আউয়াল ১৪৪১ / নভেম্বর ২০১৯" },

    { id: 27, text: "সফর ১৪৪১ / অক্টোবর ২০১৯" },
    { id: 28, text: "মুহাররম ১৪৪১ / সেপ্টেম্বর ২০১৯" },
    { id: 29, text: "যিলহজ্ব ১৪৪০ / আগস্ট ২০১৯" },
    { id: 29, text: "যিলকদ ১৪৪০ / জুলাই ২০১৯" },
  ];
  return (
    <div className="pt-24 font-bengali">
      <div
        className="relative min-w-full bg-cover bg-top w-full h-60 flex items-center font-bengali "
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-2 md:px-8 w-full">
          <div className="p-2 md:p-6">
            <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between md:space-x-4">
              {/* Left Section with text and border */}
              <div className="w-full md:w-[40%] font-bengali text-center md:text-left">
                <div className="flex flex-col items-center md:flex-row md:items-center">
                  <h2 className="text-4xl  text-white font-bold pb-1 md:pb-[10px] flex-grow border-b border-yellow-500">
                    সকল সংখ্যা
                  </h2>
                  {/* Mosque Icon */}
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-6 h-auto mt-2 md:mt-0 md:w-12 md:-ml-4 hidden md:block"
                  />
                </div>
                {/* Subtitle Text */}
              </div>

              {/* Right Section with institution text */}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="item-map px-6 md:px-24 pt-6 md:pt-14 font-sans col-span-2">
          <div className="dropdown mb-4">
            <select className="px-4 py-4 text-2xl border border-gray-300 rounded">
              <option>সকল বছর</option>
            </select>
          </div>

          <ul className="item-list space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="item flex items-center border-b border-gray-200 py-4" // Increased padding to py-4
              >
                <FaBook className="w-6 h-6 text-yellow-600 mr-4" />
                <span className="text-lg text-gray-800 hover:text-green-500">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
      <div className="pt-10 px-7 lg:px-16 flex gap-2 item-click">
        {/* Previous Button */}
        <div
          onClick={() => handlePageClick(activePage > 1 ? activePage - 1 : 1)}
          className={`px-3 py-2 border border-yellow-600 ${
            activePage === 1
              ? "text-gray-400"
              : "text-black hover:text-white hover:bg-yellow-600"
          } inline-block cursor-pointer`}
        >
          <FaChevronLeft />
        </div>

        {/* Page 1 */}
        <Link
          to={"/more"}
          onClick={() => handlePageClick(1)}
          className={`px-3 py-2 cursor-pointer border border-yellow-600 ${
            activePage === 1
              ? "bg-yellow-600 text-white"
              : "text-black hover:bg-yellow-600 hover:text-white"
          } inline-block`}
        >
          1
        </Link>

        {/* Page 2 */}
        <div
          onClick={() => handlePageClick(2)}
          className={`px-3 py-2 cursor-pointer border border-yellow-600 ${
            activePage === 2
              ? "bg-yellow-600 text-white"
              : "text-black hover:bg-yellow-600 hover:text-white"
          } inline-block`}
        >
          2
        </div>

        {/* Page 3 */}
        <div
          onClick={() => handlePageClick(3)}
          className={`px-3 py-2 cursor-pointer border border-yellow-600 ${
            activePage === 3
              ? "bg-yellow-600 text-white"
              : "text-black hover:bg-yellow-600 hover:text-white"
          } inline-block`}
        >
          3
        </div>

        {/* Ellipsis */}
        <div className="px-3 py-2 border border-yellow-600 text-black inline-block cursor-default">
          ...
        </div>

        {/* Page 5 */}
        <div
          onClick={() => handlePageClick(5)}
          className={`px-3 py-2 cursor-pointer border border-yellow-600 ${
            activePage === 5
              ? "bg-yellow-600 text-white"
              : "text-black hover:bg-yellow-600 hover:text-white"
          } inline-block`}
        >
          5
        </div>

        {/* Page 6 */}
        <div
          onClick={() => handlePageClick(6)}
          className={`px-3 py-2 cursor-pointer border border-yellow-600 ${
            activePage === 6
              ? "bg-yellow-600 text-white"
              : "text-black hover:bg-yellow-600 hover:text-white"
          } inline-block`}
        >
          6
        </div>

        {/* Page 7 */}
        <div
          onClick={() => handlePageClick(7)}
          className={`px-3 py-2 cursor-pointer border border-yellow-600 ${
            activePage === 7
              ? "bg-yellow-600 text-white"
              : "text-black hover:bg-yellow-600 hover:text-white"
          } inline-block`}
        >
          7
        </div>

        {/* Next Button */}
        <div
          onClick={() => handlePageClick(activePage < 7 ? activePage + 1 : 7)}
          className={`px-3 py-2 border border-yellow-600 ${
            activePage === 7
              ? "text-gray-400"
              : "text-black hover:text-white hover:bg-yellow-600"
          } inline-block cursor-pointer`}
        >
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default MoreClick;

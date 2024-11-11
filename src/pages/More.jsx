import React, { useState } from "react";
import bannerImage from "../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../assets/mosque.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const More = () => {
  // State to keep track of the active page
  const [activePage, setActivePage] = useState(1);

  // Array of page numbers for demonstration
  const handlePageClick = (page) => {
    if (page !== "...") {
      setActivePage(page);
    }
  };
  const items = [
    { id: 1, text: "রবিউল আউয়াল ১৪৪৬ / অক্টোবর ২০২৩" },
    { id: 2, text: "রবিউল আওয়াল ১৪৪৬ / সেপ্টেম্বর ২০২৩" },
    { id: 3, text: "সফর ১৪৪৬ / আগস্ট ২০২৩" },
    { id: 4, text: "মুহাররম ১৪৪৬ / জুলাই ২০২৩" },
    { id: 5, text: "জিলহজ ১৪৪৫ / জুন ২০২৩" },
    { id: 6, text: "যিলকদ ১৪৪৫ / মে ২০২৪" },
    { id: 7, text: "শাওয়াল ১৪৪৫ / এপ্রিল ২০২৪" },
    { id: 8, text: "রমযান ১৪৪৫ / মার্চ ২০২৪" },
    { id: 9, text: "শাবান ১৪৪৫ / ফেব্রুয়ারি ২০২৪" },
    { id: 10, text: "রজব ১৪৪৫ / জানুয়ারি ২০২৪" },
    { id: 11, text: "জুমাদাল উলা-জুমাদাল আখিরাহ ১৪৪৫ / ডিসেম্বর ২০২৩" },
    { id: 12, text: "রবিউল আখির ১৪৪৫ / নভেম্বর ২০২৩" },
    { id: 13, text: "রবিউল আউয়াল ১৪৪৫ / অক্টোবর ২০২৩" },
    { id: 14, text: "সফর ১৪৪৫ / সেপ্টেম্বর ২০২৩" },
    { id: 15, text: "মুহাররম ১৪৪৫ / আগস্ট ২০২৩" },
    { id: 16, text: "যিলহজ্ব ১৪৪৪ / জুলাই ২০২৩" },
    { id: 17, text: "যিলকদ ১৪৪৪ / জুন ২০২৩" },
    { id: 18, text: "শাওয়াল ১৪৪৪ / মে ২০২৩" },
    { id: 19, text: "শাবান-রমযান ১৪৪৪ / মার্চ-এপ্রিল ২০২৩" },
    { id: 20, text: "রজব ১৪৪৪ / ফেব্রুয়ারি ২০২৩" },
    { id: 21, text: "জুমাদাল আখিরাহ ১৪৪৪ / জানুয়ারি ২০২৩" },
    { id: 22, text: "জুমাদাল উলা ১৪৪৪ / ডিসেম্বর ২০২২" },
    { id: 23, text: "রবিউল আখির ১৪৪৪ / নভেম্বর ২০২২" },
    { id: 24, text: "রবিউল আউয়াল ১৪৪৪ / অক্টোবর ২০২২" },
    { id: 25, text: "সফর ১৪৪৪ / সেপ্টেম্বর ২০২২" },
    { id: 26, text: "মুহাররম ১৪৪৪ / আগস্ট ২০২২" },

    { id: 27, text: "যিলহজ্ব ১৪৪৩ / জুলাই ২০২২" },
    { id: 28, text: "শাওয়াল ১৪৪৩ / মে ২০২২" },
    { id: 29, text: "যিলকদ ১৪৪৩ / জুন ২০২২" },
    { id: 29, text: "শাবান-রমযান ১৪৪৩ / মার্চ-এপ্রিল ২০২২" },
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
        <div
          onClick={() => handlePageClick(1)}
          className={`px-3 py-2 cursor-pointer border border-yellow-600 ${
            activePage === 1
              ? "bg-yellow-600 text-white"
              : "text-black hover:bg-yellow-600 hover:text-white"
          } inline-block`}
        >
          1
        </div>

        {/* Page 2 */}
        <Link
          to={"/moreclick"}
          onClick={() => handlePageClick(2)}
          className={`px-3 py-2 cursor-pointer border border-yellow-600 ${
            activePage === 2
              ? "bg-yellow-600 text-white"
              : "text-black hover:bg-yellow-600 hover:text-white"
          } inline-block`}
        >
          2
        </Link>

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

export default More;

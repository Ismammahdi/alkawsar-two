import React, { useState } from "react";
import bannerImage from "../../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../../assets/mosque.svg";
import { HiPencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LekhokBrindo = () => {
  const authors = [
    { author: "মুফতি আবুল হাসান মুহাম্মদ আব্দুল্লাহ", path: "/lekhok" },
    { author: "মাওলানা মুহাম্মদ আব্দুল মালেক", path: "/malek" },
    { author: "মাওলানা আবুল বাশার মুহাম্মদ সাইফুল ইসলাম", path: "/saiful" },
    { author: "মাওলানা আব্দুল মতিন", path: "/motin" },
    { author: "মাওলানা মুহাম্মদ বাকেরিয়া আব্দুল্লাহ", path: "/al-abdulah" },
    { author: "মাওলানা শরীফ মুহাম্মদ", path: "/sorif" },
    { author: "মুহাম্মাদ আশিক বিল্লাহ তানভীর", path: "/tanjim" },
    { author: "মাওলানা মুহাম্মাদ তাওহীদুল ইসলাম তায়্যিব", path: "/tajib" },
  ];
  const otherAuthors = [
    { author: "মাওলানা সায়্যেদ আবুল হাসান আলী নদভী রাহ.", path: "/nadvi" },
    { author: "সাইয়েদ মুহাম্মাদ ওয়াযেহ রশীদ হাসানী নদভী", path: "/hasan" },
    { author: "মুফতি মুহাম্মাদ রফী উছমানী", path: "/usman" },
    { author: "হযরত মাওলানা মুফতি তকী উছমানী", path: "/toki" },
    { author: "হযরত মাওলানা আব্দুল হাই পাহাড়পুরী", path: "/hai" },
    { author: "মাওলানা আবু তাহের মেসবাহ", path: "/mesbah" },
    { author: "মাওলানা আবদুল্লাহ বিন সাঈদ জালালাবাদী", path: "/said" },
    { author: "মাওলানা আবু সাবের আব্দুল্লাহ", path: "/saber" },
    { author: "ইসহাক ওবায়দী", path: "/obayed" },
    { author: "অধ্যাপক ড. আ ফ ম খালিদ হোসেন", path: "/khalid" },
    { author: "মাওলানা মুহাম্মাদ হেমায়েত উদ্দীন", path: "/hemayet" },
    { author: "মুহাম্মাদ ফজলুল বারী", path: "/fojlul" },
    { author: "মাওলানা মুহাম্মাদ ইয়াহইয়া", path: "/yahia" },
    { author: "মাওলানা সাঈদ আহমদ", path: "/sayed-ahmed" },
    { author: "মাওলানা শিব্বীর আহমদ", path: "/sabbir-ahmed" },
    { author: "জহির উদ্দিন বাবর", path: "/johir" },
    { author: "মুহাম্মাদ ত্বহা হুসাইন", path: "/toha" },
    { author: "মুহাম্মাদ আব্দুল্লাহ ফাহাদ", path: "/fahad" },
    { author: "মুহাম্মাদ হাসীবুর রহমান", path: "/hasibur" },
    { author: "মুহাম্মাদ এনামুল হাসান", path: "/enamul" },
    { author: "মুহাম্মাদ দিলাওয়ার বিন গাজী", path: "/diloar" },
    { author: "মুহাম্মাদ সাইফুল ইসলাম", path: "/saifulislam" },
  ];

  const [activePage, setActivePage] = useState(1); // Keep activePage as a number
  const totalPages = 9;

  const pages = [1, 2, 3, "...", 7, 8, 9]; // Page numbers with "..."

  const handlePageClick = (page) => {
    if (page !== "...") {
      setActivePage(page);
    }
  };
  const toBengaliNumber = (num) => {
    const bengaliNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return String(num)
      .split("")
      .map((digit) => bengaliNumbers[Number(digit)])
      .join("");
  };

  const goToPreviousPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const goToNextPage = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };
  return (
    <div className="pt-24 font-bengali">
      <div
        className="relative w-screen bg-cover bg-top h-60 flex items-center font-bengali "
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-2 md:px-8 w-full">
          <div className="p-2 md:p-6">
            <div className="flex flex-col md:flex-row items-center md:space-y-0 justify-between md:space-x-4">
              {/* Left Section with text and border */}

              <div className="w-full md:w-[40%] text-center font-bengali">
                <div className="flex items-center">
                  <h2 className="text-xl md:text-3xl flex-grow md:text-left text-white font-bold pb-[10px] border-b border-yellow-500">
                    লেখকবৃন্দ
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

              {/* Right Section with institution text */}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <h2 className="font-bold text-2xl mb-6">
              যাঁরা নিয়মিত লিখে থাকেন:
            </h2>
            <div className="space-y-2">
              {authors.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="flex items-center hover:text-green-600 ml-6 py-4 space-x-3 border-b border-gray-200"
                >
                  <HiPencilSquare className="w-8 h-8 text-yellow-600" />
                  <Link to={item.path || "#"} className="text-xl ">
                    {item.author}
                  </Link>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <h2 className="font-bold text-2xl mb-6">আরো যাঁরা লিখে থাকেন:</h2>
              <div className="space-y-2">
                {otherAuthors.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    className="flex items-center hover:text-green-600 ml-6 py-4 space-x-3 border-b border-gray-200"
                  >
                    <HiPencilSquare className="w-8 h-8 text-yellow-600" />
                    <Link to={item.path || "#"} className="text-xl ">
                      {item.author}
                    </Link>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 p-5 md:px-14">
          {/* Previous Button */}
          <button
            onClick={goToPreviousPage}
            className={`w-10 h-10 border border-yellow-600 flex items-center justify-center ${
              activePage === 1
                ? "text-gray-400"
                : "text-black hover:bg-yellow-600 hover:text-white"
            }`}
            disabled={activePage === 1}
          >
            <FaChevronLeft />
          </button>

          {/* Page Numbers */}
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(page)}
              className={`w-10 h-10 border border-yellow-600 flex items-center justify-center ${
                activePage === page
                  ? "bg-yellow-600 text-white"
                  : "text-black hover:bg-yellow-600 hover:text-white"
              }`}
            >
              {page === "..." ? "..." : toBengaliNumber(page)}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={goToNextPage}
            className={`w-10 h-10 border border-yellow-600 flex items-center justify-center ${
              activePage === totalPages
                ? "text-gray-400"
                : "text-black hover:bg-yellow-600 hover:text-white"
            }`}
            disabled={activePage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LekhokBrindo;

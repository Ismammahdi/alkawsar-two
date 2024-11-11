import React, { useState } from "react";
import mosque from "../../assets/mosque.svg";
import bannerImage from "../../assets/alkawsar-banner-230px.png";
import coverOne from "../../assets/cover-1.jpg";
import coverTwo from "../../assets/cover-2.jpg";
import coverThree from "../../assets/cover-3.jpg";
import coverFour from "../../assets/cover-4.jpg";
import coverFive from "../../assets/cover-5.jpg";
import coverSix from "../../assets/cover-6.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const articles = [
  {
    date: "রজব ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title:
      "মাহে রমজানে ইসলাম-কল্যাণী বোয়ালেম রমজান কাত্তানির আলোকে আলজেরিয়া-আলসাস",
    description:
      "মাহে রমজানের গুরুত্ব এবং ইসলামের সুমহান শিক্ষাগুলির আলোকে বোয়ালেম রমজান কাত্তানির বক্তব্যে আলজেরিয়া ও আলসাসের জন্য একটি শিক্ষণীয় দৃষ্টান্ত।",
    author: "মাওলানা আব্দুল কাদের",
  },
  {
    date: "শাবান ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title: "কুরআনের মাধুর্য বোঝার উপকারিতা অত্যন্ত মূল্যবান",
    description:
      "আলজেরিয়ার জনগণকে কুরআনের মাধুর্য বোঝার গুরুত্ব সম্পর্কে শিক্ষিত করা গুরুত্বপূর্ণ। এটি আল্লাহর প্রতি প্রেম ও ভক্তির জন্ম দেয়।",
    author: "মাওলানা মুহাম্মাদ হাসান",
  },
  {
    date: "রজব ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title: "কুরআনের নৈতিক শিক্ষা প্রত্যেককে উন্নত মানবিকতায় পৌঁছায়",
    description:
      "কুরআনের শিক্ষা মানুষকে উন্নত নৈতিকতায় পৌঁছানোর পাথেয় হিসেবে কাজ করে। এটি সমাজে ন্যায়বিচার ও সহমর্মিতা প্রতিষ্ঠার জন্য গুরুত্বপূর্ণ।",
    author: "মাওলানা মুহাম্মাদ হাসান",
  },
  {
    date: "রবিউল আউয়াল ১৪৪৫",
    title: "নবীদের অনুগামী হওয়া এবং পরকালের সফলতা",
    description:
      "নবীদের অনুসরণ করে পরকালে সফলতা অর্জন করা সম্ভব। নবীদের জীবনযাপন আমাদের জন্য একটি পূর্ণাঙ্গ উদাহরণ।",
    author: "মাওলানা আব্দুল কাদের",
  },
  {
    date: "শাওয়াল ১৪৪৫",
    title: "নারীদের ওপর দায়িত্ব জীবনের পাঠ থেকে...",
    description:
      "নারীদের জীবনযাপনের ওপর দায়িত্ব পালন ও উত্তম চরিত্রের শিক্ষা কুরআনের শিক্ষা দ্বারা সম্ভব। ইসলামে নারীদের ভূমিকা অত্যন্ত গুরুত্বপূর্ণ।",
    author: "মাওলানা শফিকুল ইসলাম",
  },
  {
    date: "মুহাররম ১৪৪৬",
    title: "আমাদের জীবনকে আল্লাহর কাছে উৎসর্গ করা উচিত",
    description:
      "আল্লাহর পথে নিজেকে উৎসর্গ করাই জীবনের সার্থকতা। এটি আল্লাহর সন্তুষ্টি অর্জনের জন্য অপরিহার্য।",
    author: "মাওলানা আবু বকর",
  },
  {
    date: "রবিউস সানি ১৪৪৬",
    another: "আলজেরায় কুরআন",
    title: "সৌভাগ্য ও শান্তির জন্য আমাদের প্রার্থনা",
    description:
      "আল্লাহর কাছে প্রার্থনার মাধ্যমে সৌভাগ্য ও শান্তি অর্জিত হয়। ইসলামের শিক্ষা এই পথে আমাদের নির্দেশনা দেয়।",
    author: "মাওলানা মুহাম্মাদ হাসান",
  },
  {
    date: "বিকান্দ ১৪৪৪",
    another: "আলজেরায় কুরআন",
    title: "কুরআনে মাজীদ চিন্তাভাবনার গুরুত্ব ও ফযীলত",
    description:
      "কুরআনে মাজীদ চিন্তা ও গবেষণার গুরুত্ব সম্পর্কে বহুবার আলোচনা করা হয়েছে। আল্লাহর প্রতি বিশ্বাস ও তাওয়াক্কুলের পথই সঠিক পথ।",
    author: "মাওলানা আব্দুল হাকিম",
  },
  {
    date: "শাবান-রমজান ১৪৪৫",
    title: "মাহে রমজানের মubarক তাকওয়ার নীতি: জীবনের উন্নতি থেকে মুমিনের জীবন",
    description:
      "মাহে রমজানের গুরুত্বপূর্ণ দিক হলো মুমিনের জীবনকে কুরআনের আলোকে গঠন করা। আত্মার পূর্ণতা অর্জনের জন্য এটি অপরিহার্য।",
    author: "মাওলানা মুহাম্মাদ আলী",
  },
  {
    date: "রজব ১৪৪৫",
    title: "কুরআন-হাদীসে ইমার ও জিহাদ : বর্ণনা ও শিক্ষা",
    description:
      "ইমার ও জিহাদের বর্ণনা ও শিক্ষা কুরআন ও হাদীসে বিস্তৃতভাবে বর্ণিত হয়েছে। এটি মুসলিমদের জীবনের একটি গুরুত্বপূর্ণ অংশ।",
    author: "মাওলানা আবু ইউসুফ",
  },
  {
    date: "মুহাররম ১৪৪৫",
    title: "মুমিনদের ঈমান ও আখলাক : গুরুত্ব ও ফযীলত",
    description:
      "ঈমান ও আখলাকের গুরুত্ব সম্পর্কে কুরআনে আল্লাহ বারবার নির্দেশ দিয়েছেন। এটি মুসলিম জীবনযাপনের ভিত্তি।",
    author: "মাওলানা মুহাম্মাদ হাসান",
  },
  {
    date: "বিকান্দ ১৪৪৫",
    title:
      "বিদায়ে ও বিদায়ের প্রথম দর্শন যে কারো দিল বা চিন্তা পরিবর্তন করতে পারে",
    description:
      "বিদায়ের মুহূর্তে আল্লাহর প্রতি একাগ্রতা ও তাওয়াক্কুলই মুমিনের জীবনকে সঠিক পথে পরিচালিত করতে সহায়ক।",
    author: "মাওলানা আব্দুল করিম",
  },
  {
    date: "শাবান-রমজান ১৪৪৫",
    title: "শাবান রমজান ঈদ : কিছু নিবেদন",
    description:
      "শাবান এবং রমজান মাস মুসলিমদের জন্য বিশেষ তাৎপর্যপূর্ণ মাস। এই মাসগুলোতে সঠিক ইবাদত আল্লাহর নৈকট্য লাভের মাধ্যম হিসেবে কাজ করে।",
    author: "মাওলানা আব্দুল হান্নান",
  },
  {
    date: "রবিউল আখির ১৪৪২",
    title:
      "মির্যা গোলাম আহমদ কাদিয়ানী (মৃত্যু : ১৯০৮ ঈসাব্দ, ১৩২৫ হিজরী) নবুওতের মিথ্যা দাবির কিছু নমুনা",
    description:
      "উনবিংশ শতাব্দীর শেষ থেকে অদ্যাবধি চলে আসা ইসলানবিরোধী একটি মতবাদের নাম কাদিয়ানিয়াত বা কাদিয়ানীবাদ। এটি একটি জঘন্য এবং ভয়াবহ কুফরী ফেতনা। ইসলামের মোকাবেলায় দাঁড় করানো এ মতবাদের...",
    author: "মাওলানা মুহাম্মাদ হাসান",
  },
  {
    date: "রবিউল আউয়াল ১৪৪২",
    title: "দরূদ ও সালাম বর্ষিত হোক তাঁর প্রতি",
    description:
      "আল্লাহ রাব্বুল আলামীন আরবের জন্যে রহমাতুল্লিন আলামীন হিসাবে প্রেরণ করেছেন খাতামুন নাবিয়ীন সাইয়্যিদুল মুরসালীন হযরত মুহাম্মাদ সাল্লাল্লাহু আলাইহি ওয়াসাল্লামকে।",
    author: "মাওলানা আব্দুল কাদের",
  },
];

// Helper function to truncate description
const truncateDescription = (text, wordLimit = 35) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + " ..."
    : text;
};

// Helper function to limit title to 5 words with line break if needed
const formatTitle = (text, wordLimit = 5) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return (
      <>
        {words.slice(0, wordLimit).join(" ")}
        <br />
        {words.slice(wordLimit).join(" ")}
      </>
    );
  }
  return text;
};

const Fojlul = () => {
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
    <div className="font-bengali pt-24">
      {/* Banner Section */}
      <div
        className="relative min-w-full bg-cover bg-top w-full h-60 flex items-center font-bengali"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white  px-4 md:px-8 w-full">
          <div className="p-6">
            <div className="flex flex-col  md:flex-row items-center justify-between space-x-4">
              {/* Left Section with text and border */}
              <div className="w-full md:w-[40%] text-center md:text-left font-bengali">
                <div className="flex items-center">
                  <h2 className="text-3xl flex-grow text-white font-bold pb-[10px] border-b border-yellow-500">
                    লেখক
                  </h2>
                  {/* Mosque Icon */}
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-12 h-auto -ml-[44px] hidden md:block"
                  />
                </div>
                {/* Subtitle Text */}
                <p className="mt-4 text-3xl">মুহাম্মাদ ফজলুল বারী</p>
              </div>

              {/* Right Section with institution text */}
              <div className="w-[50%] font-bengali"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0  md:gap-4 p-8">
          {/* Left Column with Articles and Right Border */}
          <div className="md:col-span-2 space-y-6 pr-4 relative">
            {/* Short right border */}
            <div className="absolute top-0 right-0 h-[474px] border-r-2 border-gray-200"></div>

            {/* Map through articles data */}
            {articles.map((article, index) => (
              <div key={index} className="border-b border-gray-300 pb-4 p-3">
                <div className="flex gap-0 md:gap-4 items-center">
                  <h3 className="text-white text-sm inline-block px-3 py-2 bg-yellow-600">
                    {article.date}
                  </h3>
                  {article.another && (
                    <h3 className="text-sm text-white px-3 py-2 bg-yellow-600  hover:bg-yellow-700">
                      {article.another}
                    </h3>
                  )}
                </div>
                <h4 className="text-xl my-5 hover:text-green-600">
                  {typeof formatTitle(article.title) === "string" ? (
                    formatTitle(article.title)
                  ) : (
                    <span>{formatTitle(article.title)}</span>
                  )}
                </h4>
                <p className="text-gray-700 ">
                  {truncateDescription(article.description)}
                </p>
                <p className="text-gray-600 text-sm pt-3">{article.author}</p>
              </div>
            ))}
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

        {/* Pagination */}
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
    </div>
  );
};

export default Fojlul;

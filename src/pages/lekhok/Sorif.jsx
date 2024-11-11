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
    title: "কুরআন : শিক্ষা ও পথ নির্দেশ",
    description:
      "কুরআন কারীম শুধুমাত্র একটি গ্রন্থ নয়, বরং এটি মানুষের জীবন বিধানের জন্য একটি পূর্ণাঙ্গ নির্দেশনা। এ শিক্ষাগ্রহণ করা মুসলিমদের জন্য অপরিহার্য।",
    author: "মাওলানা জাকারিয়া",
  },
  {
    date: "শাবান ১৪৪৫",
    title: "ইসলামের আদর্শ পরিপালন করতে হবে",
    description:
      "ইসলামের আদর্শ জীবনের প্রতিটি ক্ষেত্রে প্রযোজ্য। আল্লাহর পথে চলতে হলে ইসলামের প্রতিটি আদেশ পালনের চেষ্টা করতে হবে।",
    author: "মাওলানা আব্দুল্লাহ",
  },
  {
    date: "শাওয়াল ১৪৪৫",
    title: "শয়তানের থেকে বাঁচতে আমাদের করণীয়",
    description:
      "শয়তানের কুমন্ত্রণা থেকে বাঁচতে কুরআন ও হাদীসের পরামর্শ মেনে চলা অত্যন্ত গুরুত্বপূর্ণ। আল্লাহর পথে চলার জন্য প্রয়োজনীয় পদক্ষেপ...",
    author: "মাওলানা আব্দুল মতিন",
  },
  {
    date: "জিলকদ ১৪৪৫",
    title: "তাকওয়ার পথে সফলতার সোপান",
    description:
      "তাকওয়ার মাধ্যমে ব্যক্তি তার জীবনকে আল্লাহর পথে পরিচালিত করতে পারে এবং সফলতার সোপান অতিক্রম করতে পারে। তাকওয়ার জন্য প্রয়োজন...",
    author: "মাওলানা মুহাম্মাদ সাইফুল্লাহ",
  },
  {
    date: "মুহাররম ১৪৪৬",
    title: "অলসতা কাটানোর দোয়া ও দাওয়ায় কার্যকর পদ্ধতি",
    description:
      "কুরআন ও সুন্নাহর আলোকে অলসতা কাটানোর জন্য কিছু দোয়া ও দাওয়ায় কার্যকর পদ্ধতি রয়েছে। এগুলো নিয়মিত পাঠ করলে ইনশাআল্লাহ অলসতা দূর হবে...",
    author: "মাওলানা আবুল হাসান",
  },
  {
    date: "সফর ১৪৪৬",
    title: "নিয়ামত অস্বীকারের খারাপ পরিণাম",
    description:
      "নিয়ামত অস্বীকারকারীদের জন্য আল্লাহ তাআলা কুরআনে বহু সতর্কবাণী দিয়েছেন। তাঁর দেয়া নিয়ামতের কৃতজ্ঞতাবোধ থাকতে হবে...",
    author: "মাওলানা ফয়জুল্লাহ",
  },
  {
    date: "রবিউল আউয়াল ১৪৪৬",
    title: "দুনিয়ার আরামের জন্য জীবনের উদ্দেশ্য ভুলে গেলে চলবে না",
    description:
      "দুনিয়ার আরামের জন্য জীবনের মূল উদ্দেশ্য ভুলে গেলে আখিরাতে পরিণাম অত্যন্ত ভয়াবহ হতে পারে। আল্লাহর পথে চলতে হবে...",
    author: "মাওলানা মুহাম্মাদুল্লাহ মাসুম",
  },
  {
    date: "রবিউস সানি ১৪৪৬",
    title: "কুরআনের শিক্ষায় জীবন গড়ুন",
    description:
      "কুরআনের শিক্ষায় জীবন গড়ার মাধ্যমে এক মহান লক্ষ্য অর্জন করা সম্ভব। কুরআনের প্রতিটি শিক্ষাই মানুষকে সঠিক পথে পরিচালিত করতে সাহায্য করে...",
    author: "মাওলানা আব্দুল মালেক",
  },
  {
    date: "জুমাদাল আউয়াল ১৪৪৬",
    title: "শয়তানের দৃষ্টান্ত আমাদের জন্য সতর্কবাণী",
    description:
      "শয়তানের বিদ্রোহ এবং তার পরিণতি মানুষের জন্য বড় সতর্কবার্তা। শয়তানের প্রতি আল্লাহর পক্ষ থেকে কঠোর নির্দেশনা দেওয়া হয়েছে...",
    author: "মাওলানা মুহাম্মাদ আবু বকর",
  },
  {
    date: "জুমাদাল উলা ১৪৪৬",
    title: "তাকওয়া অর্জনের পদ্ধতি",
    description:
      "তাকওয়া অর্জনের জন্য কুরআনের নির্দেশনা মেনে চলা অত্যন্ত গুরুত্বপূর্ণ। তাকওয়ার জন্য প্রয়োজনীয় কিছু বিশেষ পরামর্শ আছে...",
    author: "মাওলানা শফিকুল ইসলাম",
  },
  {
    date: "রজব ১৪৪৬",
    title: "নাফসের সাথে জিহাদ একটি প্রশংসনীয় কাজ",
    description:
      "নাফসের সাথে জিহাদ হলো এমন একটি কাজ যা মুমিনের ঈমানকে মজবুত করে এবং তাকওয়ার দিকে নিয়ে যায়। এটি কুরআন ও হাদীসের আলোকে...",
    author: "মাওলানা মুহাম্মাদ সাঈদ",
  },
  {
    date: "শাবান ১৪৪৬",
    title: "ইসলামের প্রতি আন্তরিকতা : কিছু কথা",
    description:
      "ইসলামের প্রতি আন্তরিকতা থাকা খুবই গুরুত্বপূর্ণ। আল্লাহর পথে চলতে হলে ইসলামের প্রতি আন্তরিকভাবে নিবেদিত থাকতে হবে...",
    author: "মাওলানা আবুল হাসান",
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

const Sorif = () => {
  const [activePage, setActivePage] = useState(1);
  const pages = ["১", "২", "৩", "...", "৭", "৮", "৯"];

  const handlePageClick = (page) => {
    if (page !== "...") {
      setActivePage(page);
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
                <p className="mt-4 text-3xl">মাওলানা শরীফ মুহাম্মাদ</p>
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
              onClick={() =>
                handlePageClick(activePage > 1 ? activePage - 1 : 1)
              }
              className={`w-10 h-10 border border-yellow-600 flex items-center justify-center ${
                activePage === 1
                  ? "text-gray-400"
                  : "text-black hover:bg-yellow-600 hover:text-white"
              }`}
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
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() =>
                handlePageClick(activePage < 9 ? activePage + 1 : 9)
              }
              className={`w-10 h-10 border border-yellow-600 flex items-center justify-center ${
                activePage === 9
                  ? "text-gray-400"
                  : "text-black hover:bg-yellow-600 hover:text-white"
              }`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorif;

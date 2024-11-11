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
    date: "মুহাররম ১৪৪৬",
    title: "বিদায়বেলায় পড়ব যে দোয়া",
    description:
      "জীবনের অবশেষে বিদায়ের বেলায় একটি গুরুত্বপূর্ণ নামাজ বিদায়। বিশেষ সময়ের বিভিন্ন উপাসনায় এই বিদায়বেলায় সঠিক আমল করা উচিত।",
    author: "মাওলানা আব্দুল কাদের",
  },
  {
    date: "বিকান্দ ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title: "কুরআনের ভাষায় শাসকের কয়েকটি গুণ",
    description:
      "আলজেরার বিশেষ কিছু পরিস্থিতির ভাষায় শাসকের প্রভাব কুরআনের নির্দেশে এসেছে। শাসনের গুরুত্বপূর্ণ দায়িত্ব পালন অত্যন্ত গুরুত্বপূর্ণ।",
    author: "মাওলানা আব্দুল্লাহ",
  },
  {
    date: "বিকান্দ ১৪৪৫",
    title: "একটুখানি শীতল পানি",
    description:
      "চলছে শীতকাল। দিনের প্রথম বেলায় ঠান্ডা পানির তাজা অনুভূতি সবার জন্য উপকারী। রূপক অর্থে এই প্রশান্তি আমাদের জীবনে আনে নতুন জীবনের দিশা।",
    author: "মাওলানা শফিকুল ইসলাম",
  },
  {
    date: "শাবান ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title: "আমি কি জান্নাতে সঙ্গী-পরিবার নিয়ে থাকতে চাই!",
    description:
      "পরিবারসহ জান্নাতে প্রবেশের প্রত্যাশা প্রত্যেক মুসলিমের মনোবাসনা। আল্লাহর পথে চললে পরিবারসহ জান্নাতে থাকা সম্ভব।",
    author: "মাওলানা মুহাম্মাদ হাসান",
  },
  {
    date: "রবিউল আখির ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title: "কুরআন কারীমে ইহূদী জাতির চরিত্র",
    description:
      "ইহুদীদের মধ্যে আল্লাহ তাআলা বহু নবি-রাসূল পাঠিয়েছেন। তাদেরকে আল্লাহ বিশেষত্ব দিয়েছেন। তাই তাদের কথা হবেই কুরআনে। কুরআনে তাদের চরিত্রের কিছু দিক তুলে ধরা হয়েছে।",
    author: "মাওলানা আব্দুল্লাহ",
  },
  {
    date: "রবিউল আউয়াল ১৪৪৫",
    title: "কিসের অপেক্ষা?",
    description:
      "মৃত্যুর কাঁটা থেকে কেউ মুক্ত নয়। জীবনটি অস্থায়ী। এটি সঠিক পথে পরিচালিত করতে এবং আত্মার শান্তির জন্য প্রস্তুতি নেওয়া প্রয়োজন।",
    author: "মাওলানা আব্দুল কাদের",
  },
  {
    date: "মুহাররম ১৪৪৬",
    another: "আলজেরায় কুরআন",
    title: "একটি আয়াত : কিছু শিক্ষা কিছু বার্তা",
    description:
      "সূরা বাকারা ১৮৬ নম্বর আয়াতে আল্লাহ তাআলা দোয়া এবং তাওয়াক্কুলের মাধ্যমে আত্মবিশ্বাসের শিক্ষা দিয়েছেন। এতে আল্লাহর উপর নির্ভরশীলতার গুরুত্ব বর্ণিত হয়েছে।",
    author: "মাওলানা মুহাম্মাদ হাসান",
  },
  {
    date: "বিকান্দ ১৪৪৪",
    another: "আলজেরায় কুরআন",
    title: "কুরআন কারীমে জুমুআর বিশেষ অর্থ",
    description:
      "জুমুআ মুসলমানদের জন্য বিশেষ দিনে পরিণত হয়েছে। এটি আল্লাহর নির্দেশ এবং মুমিনদের জন্য বিশেষ ইবাদত। জুমুআর মাধ্যমে একতাবদ্ধ হওয়ার শিক্ষা বর্ণিত।",
    author: "মাওলানা শফিকুল ইসলাম",
  },
  {
    date: "শাওয়াল ১৪৪৫",
    title: "মুসলিম মুমিনদের জীবন থেকে আমানতদারির কিছু দৃষ্টান্ত",
    description:
      "এই পৃথিবীতে নানা শ্রেণির নানা পেশার মানুষের বসবাস। জীবনের প্রতিটি অবস্থায় আমাদেরকে বিভিন্ন রূপে ও পেশায় দেখা দেয়। কাজের ধরণ, কাজের ধরনে, এবং নৈতিকতার ক্ষেত্রে আমানতদারির ভূমিকা গুরুত্বপূর্ণ।",
    author: "মাওলানা আব্দুল্লাহ",
  },
  {
    date: "জুমাদাল উলা ১৪৪৫",
    title: "ওয়াক্তের বিভিন্ন রূপ বেঁচে থাকার চেষ্টা করিব",
    description:
      "মুমিনদের ঈমানী জীবনে একান্ত প্রয়োজন সময়ের পূর্ণ ব্যবহার। রাসূল কুরআনের মাধ্যমে সময় ব্যবস্থাপনার গুরুত্ব বুঝিয়েছেন।",
    author: "মাওলানা মুহাম্মাদ আলী",
  },
  {
    date: "জুমাদাল উলা ১৪৪৫",
    title: "পথের কষ্টগুলোকে সহ্য করতে বলা হয়েছে",
    description:
      "জান্নাতের পথে যাওয়ার জন্য কঠোর অধ্যাবসায় প্রয়োজন। আমাদেরকে অনেক কষ্ট সহ্য করতে হবে, আল্লাহর নির্দেশে চলতে হবে।",
    author: "মাওলানা আবু বকর",
  },
  {
    date: "রবিউস সানি ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title: "কুরআনের পরগাছা অন্যদের পক্ষে গ্রহণযোগ্য নয়",
    description:
      "এটি আমাদের জীবনকে সঠিক পথে পরিচালিত করে এবং আমাদের অভ্যন্তরীণ আত্মা ও ঈমানকে শক্তিশালী করতে সহায়ক। কুরআনের পরগাছা বিষয়টি ব্যাখ্যা করে।",
    author: "মাওলানা শফিকুল ইসলাম",
  },
  {
    date: "রবিউল আউয়াল ১৪৪৪",
    title: "সততা ও আমানতদারির উজ্জ্বল দৃষ্টান্ত",
    description:
      "রোযায়ময় এই পৃথিবীতে প্রতিদিনই কত কিছুই না ঘটে! সব কি তার সবার নজর কাড়ে? কিন্তু কিছু বিষয় ব্যতিক্রম, সততার দৃষ্টান্ত আকর্ষণ করে। হৃদয়কে আলোকিত করে। চেতনার প্রদীপ জ্বলে যায়।",
    author: "মাওলানা আব্দুল্লাহ",
  },
  {
    date: "বিকান্দ ১৪৪৩",
    title: "সাচর্চা থেকে শিক্ষা",
    description:
      "তিনি ছিলেন সাহস ও স্থিতধীরতার প্রতীক। তাঁর মহানায়কের একটি বিশদ সংগ্রহ এবং সুপরিচিত। বিশিষ্ট সাহাবি মুয়াদ বিন জাবাল থেকে শিক্ষার আহ্বান এসেছে।",
    author: "মাওলানা মুহাম্মাদ আলী",
  },
  {
    date: "সফর ১৪৪৩",
    title: "দান-অনুদান : যে বিষয়গুলো লক্ষ্য রাখা জরুরি",
    description:
      "দান করতে গেলে কিছু গুরুত্বপূর্ণ বিষয়ের প্রতি নজর রাখা জরুরি। দানে অনেক ফজিলত বর্ণিত হয়েছে কুরআন-হাদিসে। ইসলামের অপরিসীম অবদান দানের মধ্যে নিহিত।",
    author: "মাওলানা শফিকুল ইসলাম",
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

const Masum = () => {
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
                <p className="mt-4 text-3xl">মাওলানা মুহাম্মাদুল্লাহ মাসুম</p>
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

export default Masum;

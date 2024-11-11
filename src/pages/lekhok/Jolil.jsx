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
    date: "সবর ১৪৪৫",
    title: "এক টুকরো জমি",
    description:
      "সে রাতে আকাশটা টাঙা ছিল। কিন্ত আলোর ছোটো চুরাইস নগর বের হয়ে আসছিল। এই গ্রামের এত সুন্দর নাম কিভাবে হয়েছে জানা নেইই। স্টারের আলোর এমন রাত দেখে সূর্য্যরে প্রতিফলিত আলো এসে পৌঁছাই।...",
  },
  {
    date: "মুহররম ১৪৪৬",
    title: "একটি সুন্দর সকাল",
    description:
      "বায়ে বায়ে এমন সোনালিভ নান্দি হয়, না সম্পানকে হারা মানান। বৃষ্টি পৃথিবী চমক হয়ে ওঠে। আলোর রহস্যতে আধোতে হয়ে খানি। ধোদা তুমি বাদামতে এটি তালাশাতা। বাদাম হাত ফাদে। এর পর এই সময়...",
  },
  {
    date: "বিকাদ ১৪৪৬",
    title: "শ্রমিকের অধিকার সব সময়ের",
    description:
      "এক পল্লকা েএ। সূর্যের এই ঠাটা লাগত। পকাপি পোশাক ৩৬ ভি সেলিব্রিশন। কিন্ত মনে হয় বাতাসে তাপমাত্রা অনেক বেশি। উচ্চ দাদানতে মনে হচ্ছে চায়নাল জেলিতে যায়। ফুল লেও মিশাও যারা...",
  },
  {
    date: "শাবান ১৪৪৬",
    title: "যে মৃত্যু ভাবিয়ে তোলে",
    description:
      "চিরকাল থেকে ১৪৪৬ মুহররমকে ধরে নাটকের প্রধান দেওরানে কাহানী হয়, প্রধান কাহানী করে, কোনো স্ত্রীর খ্রিস্টান গুতির প্রকান্যের খ্যাতি আর দেয়। ফখরের ভূমিকা জায়গায় অর্থবাণীর জন্য...",
  },
  {
    date: "রমযান ১৪৪৫",
    title: "মাওলানা আব্দুল্লাহ বিন সাদেক জালালাবাদী রাহ.",
    description:
      "উপমহাদেশের ইসলামী ও দাওয়াতী ইতিহাসের এক জীবন্ত লাইব্রেরি [জন্ম: ২৯ মে ১৯২৯, ওফাত: ১৯ জানুয়ারি ২০১৪ ঈসায়ী]",
    summary:
      "১৯ জানুয়ারি ২০১৪ ঈসায়ী দুনিয়ার মায়া ত্যাগ করে মহামার মাওলানা আব্দুল্লাহ বিন সাদেক রাহ. কবরের গর্ভে শায়িত হলেন। তাহার আদর্শের ধ্বজা...",
  },
  {
    date: "রমযান ১৪৪৫",
    title: "রমযান : যে মাসে নবীজি দু'হাত ভরে দান করতেন",
    description:
      "রমযান দান, ইবাদত ও সহানুভূতির মাস। এই মাসে রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম সবার চেয়ে বেশি দানশীল হয়ে উঠতেন। এ মাসে মুসলমানগণকে তাওবায়ে ফিরে আসতে উৎসাহিত করা হয়।",
  },
  {
    date: "রজবিয় ১৪৪৫",
    title: "ফিকাহিক : অভ্যন্তরীণ থেকে বাহ্যিক",
    description:
      "ধার্মিক হওয়ার জন্য, তাওহীদ তথা একত্ববাদ এর উপর পূর্ণরূপে অভ্যন্তরীণ ও বাহ্যিক আদর্শে অভ্যন্তরীণ নির্ভর করে। ফিকাহিক প্রয়োজনের মানসিক দৃঢ়তা প্রয়োজন।",
  },
  {
    date: "রবিউস সানি ১৪৪৫",
    title: "রবিউ শমানে দেখা পৃথিবী",
    description:
      "মহান সৃষ্টিকর্তা এক অদ্বিতীয় পৃথিবী সৃষ্টি করেছেন যার বাহির রূপ যেমন মনোমুগ্ধকর তেমনি অভ্যন্তরীণ রূপে অনিন্দ্য সুন্দর। স্রষ্টার সৃষ্টিতে কোন দোষ নেই; প্রতিটি কণা সুন্দরভাবে সাজানো...",
  },
  {
    date: "জুমাদাল উলা ১৪৪৫",
    title: "হ্যালোইন : বিজাতীয় উৎসব, পৌত্তলিক সংস্কৃতি",
    description:
      "একটি বিজাতীয় মরমী উৎসবকে মানুষ ধীরে ধীরে সমাজের এ প্রান্ত থেকে ও প্রান্তে ছড়িয়ে দিচ্ছে। সে উৎসবের আলোচনা এখানেই থেমে থাকছে। সেই পথ ও আলোকের সুশিক্ষায় আদর্শ জীবনের প্রহাস-প্রহিন।",
  },
  {
    date: "রবিউস আখির ১৪৪৪",
    title: "প্রতিবেশী সম্প্রদায়কে দেখ...",
    description:
      "সুবর্ণনাগর আদর্শ আসল। পৃথিবীতে আদর্শিক ব্যবস্থায় আদর্শ ও সুশিক্ষা মূ-ক পাঠ্যক্রমে। সমাজের প্রয়োজনীয় জীবনে শিক্ষকের প্রয়োজনীয় সব শিক্ষা দেয়া হয়েছে সমাজের শিক্ষায় সমাজের মানো চিত্র ফেরা আছে।",
  },
  {
    date: "জুমাদাল আখির ১৪৪৪",
    title: "আল্লাহ তায়ালা অবকাশ দেয়ার পর",
    description:
      "ফসলটির হক পূরণ করা হয়েছে, ফলে এখন খোদার খেলা আর পুনরায় আমজাদ ফসল আনা আছে। আল্লাহর প্রতিষ্ঠানের নাম রত দিয়াপরটির জন্য পুনরায় ফসল আনলে ফলটি দিক। আল্লাহ পরিণত ফসলের বিচার করবে সঠিক সময়ে।",
  },
  {
    date: "জুমাদাল আখির ১৪৪৪",
    title: "কুরআন আমাদের পথ দেখিয়েছে < একটি উপায় যা জীবন বদলে দিয়েছিল",
    description:
      "মায়েদের - একটি বড় পৃথিবী সহবাস মাঙ্গলে। আল্লাহর আদেশ পালনে আল্লাহর আদেশ পালনটি পূরণ করার মহান অর্জন। এর বেশি কিছু নয়। কোর একবার বাবার-মায়ের চিরের মাঝে মানব শিশুর জন্ম প্রদান করেছে।",
  },
  {
    date: "রবিউস আখির ১৪৪৬",
    title: "আসাম : এ যেন গণহত্যার এক নীলাভূমি",
    description:
      "ব্রহ্মপুত্র নদীর শাখা হলো, যুবরা নদী। এই নদীরই একটি পাড়ে মুসাফিরদের বসবাস। গ্রামের নাম ধোপাপুর, জেলার নাম দরা। ২৩ ডিসেম্বর এই ধোপাপুরে ঘটে যাওয়া হচ্ছে ইতিহাস। সারা গুণাহিতে...",
  },
  {
    date: "সফর ১৪৪৬",
    title: "অবিস্মৃত দাঈ শায়েখ নেয়ামতুল্লাহ খোজা রাহ.",
    description:
      "[জন্ম : ১৯৩৯ ঈ. - মৃত্যু : ২০২১ ঈ.] বার ও ক্যালিফোর্নিয়াতে যিনি দ্বীনের দাওয়াত পৌঁছে দিয়েছেন। যারা যাদিক করে মহান আল্লাহর ইবাদত করে জীবনে নিজেকে নিঃশেষ করে ফেলেছেন। দ্বার-মন-মওক-বাচিত যারা নেযাম। যে গুণাহেরা ছড়ায় ফজিলাত আনতে পারে।",
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

const Jolil = () => {
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
                <p className="mt-4 text-3xl">ওয়ালিউল্লাহ আব্দুল জলীল</p>
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

export default Jolil;

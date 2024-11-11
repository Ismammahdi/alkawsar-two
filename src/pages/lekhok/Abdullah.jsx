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
    date: "জুমাদাল উখরা-জুমাদাল আখিরাহ ১৪৪৫",
    another: "",
    title: "নামাজের গুরুত্ব",
    description:
      "নামাজের আদায়কারীর জন্য চিন্তা করার বিষয় হলো, নামাজ কত বড় প্রভাবক বিষয়। মুসলিম যদি সচেতনভাবে নিয়মিত নামাজ আদায় করে, তাহলে অবশ্যই নামাজ তাকে তাওহীদ-বিরোধী সব কিছু থেকে রক্ষা করবে এবং তার জীবন আলোকিত করবে...",
    author: "মাওলানা আব্দুল মালেক",
  },
  {
    date: "রবিউল আখির ১৪৪৫",
    another: "",
    title: "বেলফোর ঘোষণা শতবর্ষপূর্তি উদযাপন",
    description:
      "২ নভেম্বর ১৯১৭ সালে ব্রিটিশ পররাষ্ট্রমন্ত্রী আর্থার বেলফোরের বিখ্যাত একটি ইহুদী-অধিকার প্রতিষ্ঠার ঘোষণা দিয়ে জায়নিস্ট নেতা লর্ড রথশাইল্ডকে (Lord Rothschild) এক চিঠি লিখেছিলেন।...",
    author: "মাওলানা আব্দুল্লাহ",
  },
  {
    date: "সফর ১৪৪৪",
    another: "",
    title: "দরসে হাদীস যে নসীহত গ্রহণে সহায়ক করে",
    description:
      "আল হামদু লিল্লাহ, ওয়াস সালামু আলা রাসুলুল্লাহ। ইসলামের শিক্ষাগুলি আমাদের দৈনন্দিন জীবনে কিভাবে প্রয়োগ করা উচিত তা নিয়ে আলোচনা করা হয়েছে।...",
    author: "মাওলানা আবু হুরায়রা",
  },
  {
    date: "শাওয়াল ১৪৪৪",
    another: "অনুবাদীয় কুরআন",
    title: "অনুবাদীয় কুরআন",
    description:
      "অনুবাদীয় কুরআন বর্তমান যুগের প্রেক্ষাপটে ইসলামের দিশারি হিসেবে কাজ করে। বিভিন্ন ভাষায় অনুবাদকৃত কুরআন মানুষকে ইসলামের সঠিক দিশা পেতে সাহায্য করে।...",
    author: "মাওলানা মুহাম্মাদ আহমদ",
  },
  {
    date: "শাবান-রমজান ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title: "কুরআনে কারীমের তারজমা-তাফসীর পাঠ ও তাদাব্বুর প্রয়োজন",
    description:
      "আলজেরার ইসলামিক বিশ্লেষকরা বহির্বিশ্বে কুরআনের তাফসীর এবং তাদাব্বুরের প্রয়োজনীয়তা তুলে ধরছেন। তারা বলছেন যে এই শিক্ষা অর্জনের মাধ্যমেই জীবন আলোকিত করা সম্ভব...",
    author: "মাওলানা আব্দুল্লাহ",
  },
  {
    date: "রবিউল আউয়াল ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title: "কুরআন কারীমের শব্দ, বাক্য, বিষয় ও শৈলী একটি পরিপূর্ণতা",
    description:
      "কুরআন কারীমের প্রতিটি শব্দ, বাক্য এবং বিষয় অত্যন্ত গুরুত্বপূর্ণ। এটি মানুষের জন্য একটি পূর্ণাঙ্গ জীবনযাপনের দিশা। ইসলামের প্রতিটি শিক্ষাই এই পবিত্র গ্রন্থ থেকে এসেছে...",
    author: "মাওলানা মুহাম্মাদ আহমদ",
  },
  {
    date: "মুহাররম ১৪৪৫",
    another: "",
    title: "পবিত্র জীবনযাপনের সান্নিধ্য : কেন ও কিভাবে?",
    description:
      "নবী সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের পবিত্র জীবন আমাদের জন্য একটি বড় দৃষ্টান্ত। তাঁর জীবন থেকে শিক্ষাগ্রহণ করা আমাদের সকলের কর্তব্য এবং এটি ইসলামের পথে চলার জন্য অপরিহার্য...",
    author: "মাওলানা সাইফুল্লাহ",
  },
  {
    date: "বিকান্দ ১৪৪৪",
    another: "",
    title: "আখলাক্ব রূহানী : আমল ও ফযীলত",
    description:
      "আখলাক্ব ও রূহানী জীবন ইসলামের এক বড় অংশ। ইসলামের পবিত্র জীবনযাপন আমাদের জন্য একটি দৃষ্টান্ত। এর আলোকে জীবন গঠন করা মুসলমানদের জন্য একটি গুরুত্বপূর্ণ ব্যাপার...",
    author: "মাওলানা ইবরাহীম",
  },
  {
    date: "রবিউল আউয়াল ১৪৪৫",
    another: "পবিত্র সীরাত",
    title: "পবিত্র সীরাত : জীবন-পথের আসমানী আলোকবর্তিকা",
    description:
      "জীবনের পথের নানা বাধা-বিপত্তি। আল্লাহর প্রেরিত রাসুলের সীরাতের আদর্শ আমাদের জীবনকে পরিপূর্ণ করে। এটি আল্লাহর পথে চলার একটি সঠিক দিশা হিসেবে কাজ করে।",
    author: "মাওলানা আব্দুল্লাহ",
  },
  {
    date: "সফর ১৪৪৫",
    another: "",
    title: "কুরআন-সুন্নাহর ইনসাফ কেন কল্যাণকর",
    description:
      "কুরআন ও সুন্নাহতে ইনসাফের ব্যাপারে বিশেষ গুরুত্ব দেওয়া হয়েছে। ইসলামের শিক্ষায় ইনসাফের একটি অত্যন্ত গুরুত্বপূর্ণ স্থান রয়েছে।",
    author: "মাওলানা আব্দুর রহীম",
  },
  {
    date: "মুহাররম ১৪৪৫",
    another: "দরসে হাদীস",
    title: "দরসে হাদীস: পবিত্র জীবনে মুমিন",
    description:
      "আল-হামদুলিল্লাহ, দরসে হাদীসে পবিত্র জীবনের আদর্শ মুমিন হিসেবে আল্লাহর পথে চলতে বিভিন্ন শিক্ষাগ্রহণ করা হয়েছে। এটি ঈমানকে শক্তিশালী করতে সহায়ক।",
    author: "মাওলানা মুহাম্মাদ হাসান",
  },
  {
    date: "বিকান্দ ১৪৪৫",
    another: "",
    title: "দরসে হাদীস : সেই মূল্যবান কী?",
    description:
      "দরসে হাদীসের আলোকে ইসলামের মূল্যবান শিক্ষাগুলি আমাদের জীবনে আলোকবর্তিকা হিসেবে কাজ করে। মুসলিম জীবনে এ শিক্ষার গুরুত্ব অপরিসীম।",
    author: "মাওলানা আরিফুল ইসলাম",
  },

  {
    date: "রজব ১৪৪৫",
    another: "",
    title: "তোমাদের ভাই তোমাদের সেবক",
    description:
      "তোমাদের ভাই তোমাদের সেবক হওয়া উচিত, এটাই ইসলামের শিক্ষা। তিনি তোমাদের মাঝে সহানুভূতির শিক্ষা ছড়িয়ে দিয়েছেন। সেবার মাধ্যমে মুসলিম জীবনে একে অপরের প্রতি সহমর্মিতার উজ্জ্বল দৃষ্টান্ত তুলে ধরা হয়েছে।",
    author: "মাওলানা আব্দুল্লাহ",
  },
  {
    date: "রবিউল আউয়াল ১৪৪৫",
    another: "",
    title: "আলেমিক মানসিকতার গুণ : ভুল-কটি উপেক্ষা করতে পারা",
    description:
      "শান্তি ও সম্প্রীতির জীবনযাপনের ক্ষেত্রে ভুল ও বিরোধী কথাগুলি উপেক্ষা করা অত্যন্ত গুরুত্বপূর্ণ। আলেমের জন্য এই মানসিকতা অপরিহার্য। ভুল এবং সহনশীলতার দৃষ্টিকোণ থেকে আলেমিক মানসিকতা গঠন করা আবশ্যক।",
    author: "মাওলানা মুহাম্মাদ হাসান",
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

const Abdullah = () => {
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
                <p className="mt-4 text-3xl">
                  মাওলানা মুহাম্মাদ যাকারিয়া আব্দুল্লাহ
                </p>
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

export default Abdullah;

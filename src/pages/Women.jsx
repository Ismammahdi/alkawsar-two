import React, { useState } from "react";
import mosque from "../assets/mosque.svg";
import bannerImage from "../assets/alkawsar-banner-230px.png";
import coverOne from "../assets/cover-1.jpg";
import coverTwo from "../assets/cover-2.jpg";
import coverThree from "../assets/cover-3.jpg";
import coverFour from "../assets/cover-4.jpg";
import coverFive from "../assets/cover-5.jpg";
import coverSix from "../assets/cover-6.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const articles = [
  {
    date: "রবিউল আখির ১৪৪৬",
    title: "অন্ধ ও চক্ষুষ্মান বরাবর নয়",
    description:
      "আল্লাহ তাআলা কুরআন কারীমে ইরশাদ করেছেনÑ وَ مَا یَسْتَوِی الْاَعْمٰی وَ الْبَصِیْرُ، وَ لَا الظُّلُمٰتُ وَ لَا النُّوْرُ، وَ لَا الظِّلُّ وَ لَا الْحَرُوْرُ،  وَ مَا یَسْتَوِی الْاَحْیَآءُ وَ لَا الْاَمْوَاتُ. অন্ধ ও চক্ষুষ্মান সমান হতে ",
    author: "মাওলানা ফজলুদ্দীন মিকদাদ",
  },
  {
    date: "রবিউল আউয়াল ১৪৪৬",
    title: "কুরআনের বার্তা ॥ নিরাপদ সমাজ গড়তে আল্লাহমুখিতা কাম্য",
    description:
      "কুরআন কারীম আল্লাহ তাআলার কালাম। কুরআনের গুরুত্ব সবকিছুর ওপরে। কালামে ইলাহীকে যারা নিজেদের ব্যস্ততা ও শগফ বানিয়েছে এবং কুরআন, উলূমুল কুরআন ও তাফসীরুল কুরআন সম্পর্কে বিশেষ পড়াশোনার …",
    author: "মাওলানা আবু রুশায়দ",
  },

  {
    date: "রবিউল আউয়াল ১৪৪৬",
    title: "আল্লাহর অনুগত শাসকের করণীয় ॥ কুরআনের দুটি নির্দেশনা",
    description:
      "রাষ্ট্র ও ক্ষমতার মালিক আল্লাহ তাআলা                      আল্লাহ তাআলা কুরআন কারীমে শাসনব্যবস্থা, শাসক ও শাসিত সম্পর্কে বহু দিকনির্দেশনা দিয়েছেন। সেসকল দিকনির্দেশনা অবলম্বনেই তৈরি ইসলা",
    author: "মাওলানা ফজলুদ্দীন মিকদাদ",
  },
  {
    date: "সফর ১৪৪৬",
    title: "আনওয়ারুল কুরআন : প্রশ্নোত্তর",
    description:
      "আনওয়ারুল কুরআন বিভাগের সর্বশেষ শিরোনাম প্রশ্নোত্তর। এর অধীনে প্রত্যেক সংখ্যায় ইনশাআল্লাহ তিন থেকে পাঁচটি প্রশ্নের উত্তর দেওয়া হবে। সংক্ষেপের জন্য প্রশ্নকারীর নাম-পরিচয় অনুল্লেখ থাকবে।   প্র",
    author: "",
  },
  {
    date: "সফর ১৪৪৬",
    title: "দলীল জেনে নিন ॥ সালামের জবাবে বাড়িয়ে বলা",
    description:
      "আল্লাহ তাআলা কুরআন কারীমে ইরশাদ করেন- وَ اِذَا حُيِّيْتُمْ بِتَحِيَّةٍ فَحَيُّوْا بِاَحْسَنَ مِنْهَاۤ اَوْ رُدُّوْهَا  اِنَّ اللهَ كَانَ عَلٰي كُلِّ شَيْءٍ حَسِيْبًا. যখন কেউ তোমাদেরকে সালাম করে, তখন তোমরা (তাকে) তদপেক্ষা উত্তমরূ",
    author: "আবু রুশায়দ",
  },
  {
    date: "সফর ১৪৪৬",
    title: "কুরআনে বর্ণিত বাগানের মালিক দুই ব্যক্তির ঘটনা",
    description:
      "অতীতে কোনো এক কালে দুজন ব্যক্তির মধ্যে একটি ঘটনা ঘটেছিল। আল্লাহ তাআলা কুরআন কারীমে সে ঘটনা উল্লেখ করেছেন। কুরআন কারীমে ঘটনাটির বর্ণনা এভাবে শুরু হয়েছে- وَ اضْرِبْ لَهُمْ مَّثَلًا رَّجُلَيْنِ جَعَلْنَا",
    author: "মাওলানা ফজলুদ্দীন মিকদাদ",
  },
  {
    date: "সফর ১৪৪৬",
    title: "একটি কুরআনী উপমা ॥ লেমের ঔদ্ধত্য ও নিরাপত্তা বলয় এবং মাকড়সার জাল",
    description:
      "আল্লাহ তাআলা কুরআন কারীমে বহু বিষয় উপমা দিয়ে বুঝিয়েছেন। মানুষের চারপাশের এমন স্পষ্ট বিষয়ের মাধ্যমে উপমা দেওয়া হয়েছে, যা বলামাত্রই আলোচ্য বিষয়টি দিবালোকের ন্যায় স্পষ্ট হয়ে যায়। তেমনই এ",
    author: "মুহাম্মাদ ফজলুল বারী",
  },
  {
    date: "মুহাররম ১৪৪৬",
    title: "আনওয়ারুল কুরআন ॥ প্রশ্নোত্তর",
    description:
      "আনওয়ারুল কুরআন বিভাগের সর্বশেষ শিরোনাম প্রশ্নোত্তর। এর অধীনে প্রত্যেক সংখ্যায় ইনশাআল্লাহ তিন থেকে পাঁচটি প্রশ্নের উত্তর দেওয়া হবে। সংক্ষেপের জন্য প্রশ্নকারীর নাম-পরিচয় অনুল্লেখ থাকবে।   প্র",
    author: "",
  },
  {
    date: "মুহাররম ১৪৪৬",
    title: "সূরাসমূহের নামের অর্থ ",
    description:
      "(পূর্ব প্রকাশের পর) ২৪। সূরা নূর : ‘নূর’ অর্থ ‘আলো’। সূরাটির ৩৫ নম্বর আয়াতে নূর শব্দটি কয়েকবার উল্লেখিত হয়েছে। সেখানে বলা হয়েছে, ‘আল্লাহ পৃথিবী ও আকাশের নূর’। তারপরে তাঁর নূরের দৃষ্",
    author: "কামরুল আনাম খান",
  },
  {
    date: "মুহাররম ১৪৪৬",
    title: "লিবাসুত তাকওয়া",
    description:
      "দুনিয়ায় মানুষের মৌলিক প্রয়োজন তিনটি- অন্ন, বস্ত্র, বাসস্থান। প্রত্যেকটিই আল্লাহ তাআলার অপার নিআমতরাজির এক একটি নিদর্শন। মানুষের ওপর দুনিয়াবী এসব অনুগ্রহের কথা আল্লাহ তাআলা কুরআন কারীমে ",
    author: "মাওলানা ফয়জুল্লাহ মুনির",
  },
  {
    date: "মুহাররম ১৪৪৬",
    title: "সন্তানের জীবনে পিতার পরহেযগারির সুফল",
    description:
      "কুরআন মাজীদে কৃতজ্ঞ মুমিনের সুন্দর একটি দুআ উল্লেখ করা হয়েছে- رَبِّ اَوْزِعْنِيْۤ اَنْ اَشْكُرَ نِعْمَتَكَ الَّتِيْۤ اَنْعَمْتَ عَلَيَّ وَ عَلٰي وَالِدَيَّ وَ اَنْ اَعْمَلَ صَالِحًا تَرْضٰىهُ وَ اَصْلِحْ لِيْ فِيْ ذُرِّيَّتِيْ اِنِّيْ تُبْتُ اِلَيْكَ وَ اِنِّيْ مِنَ",
    author: "মাওলানা মুহাম্মাদ ইমরান হুসাইন",
  },
  {
    date: "মুহাররম ১৪৪৬",
    title: "কুরআন তিলাওয়াত শুনে উতবার মুগ্ধতা",
    description:
      "এটা সে সময়ের ঘটনা, যখন কাফেরদের শত বাধা-বিপত্তি ও জুলুম-নির্যাতনের পরেও মক্কায় ক্রমশ ইসলামধর্ম ছড়িয়ে পড়ছিল। ওমর রা., হামযা রা.-সহ আরো অনেকেই ইসলাম গ্রহণ করেছেন। ইসলামের ক্রমবর্ধমান উ",
    author: "মাওলানা ফজলুদ্দীন মিকদাদ",
  },
  {
    date: "যিলহজ্ব ১৪৪৫",
    title: "দলীল জেনে নিন যানবাহনে আরোহণের দুআ",
    description:
      "একটা সময় বাহন বলতে বোঝানো হত উট, ঘোড়া, গাধা বা খচ্চর জাতীয় পশু। যেগুলো তৈরিতে মানুষের কোনো ভূমিকা থাকে না। বরং আল্লাহ তাআলাই মানুষের চেয়ে কয়েকগুণ শক্তিশালী এসব পশুকে মানুষের আয়ত্",
    author: "মাওলানা ফয়জুল্লাহ মুনির",
  },
  {
    date: "যিলহজ্ব ১৪৪৫",
    title: "কুরআনের বার্তা অশালীনতা ও অশ্লীলতা ছড়ানোর পরিণাম খুবই ভয়াবহ",
    description:
      "মন্দ ও অশালীন বিষয় প্রচার এবং তাতে সহযোগিতা করা কবীরা গুনাহ। যারা মন্দ ও অশ্লীল বিষয় প্রচার করে- এমন লোকদের ব্যাপারে আল্লাহ তাআলা কুরআন কারীমে বলেন- اِنَّ الَّذِیْنَ یُحِبُّوْنَ اَنْ تَشِیْعَ الْفَاحِشَةُ",
    author: "মাওলানা ফজলুদ্দীন মিকদাদ",
  },
  {
    date: "যিলহজ্ব ১৪৪৫",
    title: "কুরআনের ভাষায় শাসকের কয়েকটি গুণ",
    description:
      "অন্য সকল কিছুর ন্যায় ক্ষমতা ও রাজত্বও আল্লাহরই পক্ষ থেকে। কারো হাতে আসে নিআমত হয়ে, কারো জন্য আসে অভিশাপ হয়ে। ক্ষমতা যদি আল্লাহর ভয়, জবাবদিহি ও সেবার মনোভাব জাগ্রত করে এবং সেভাবেই ব্যবহা",
    author: "মাওলানা মুহাম্মাদুল্লাহ মাসুম",
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

const Women = () => {
  const [activePage, setActivePage] = useState(1);
  const pages = [1, 2, 3, "...", 7, 8, 9];

  const handlePageClick = (page) => {
    if (page !== "...") {
      setActivePage(page);
    }
  };
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
            <div className="flex flex-col md:flex-row items-center justify-between space-x-4">
              {/* Left Section with text and border */}
              <div className="w-[40%] text-left font-bengali">
                <div className="flex items-center">
                  <h2 className="text-3xl flex-grow text-white font-bold pb-[10px] border-b border-yellow-500">
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
                <p className="mt-4 text-3xl">পর্দানশীন</p>
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
                <h3 className="text-white text-sm inline-block px-3 py-2 bg-yellow-600">
                  {article.date}
                </h3>
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

export default Women;

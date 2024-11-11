import React from "react";
import bannerImage from "../../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../../assets/mosque.svg";
import adStart from "../../assets/adstarts.png";
import coverOne from "../../assets/cover-1.jpg";
import coverTwo from "../../assets/cover-2.jpg";
import coverThree from "../../assets/cover-3.jpg";
import coverFour from "../../assets/cover-4.jpg";
import coverFive from "../../assets/cover-5.jpg";
import coverSix from "../../assets/cover-6.png";
import { Link } from "react-router-dom";

const SpatialEdition = () => {
  const tags = [
    { name: "ঈমান-আকাইদ", path: "/akaid" },
    { name: "একটি ভুল নাম", path: "/akaid" },
    { name: "শিক্ষা/সিলেবাস", path: "/akaid" },
    { name: "আল-কুদস সংখ্যা", path: "/akaid" },
    { name: "নামাজ-সালাত", path: "/akaid" },
    { name: "তাহারাত", path: "/akaid" },
    { name: "রমযান প্রস্তাব", path: "/akaid" },
    { name: "হজ্জ", path: "/akaid" },
    { name: "যাকাত", path: "/akaid" },
    { name: "মুয়ামালাত-লেনদেন", path: "/akaid" },
    { name: "তাসাউফ-আধ্যাত্মিকতা", path: "/akaid" },
    { name: "ইসলামী অর্থনীতি", path: "/akaid" },
    { name: "দাওয়াত ও তাবলীগ", path: "/akaid" },
    { name: "শেয়ার ব্যবসা", path: "/akaid" },
    { name: "শবে বরাত", path: "/akaid" },
    { name: "শবে মিরাজ", path: "/akaid" },
    { name: "ঈদ", path: "/akaid" },
    { name: "নারী অধিকার", path: "/akaid" },
    { name: "বিদআত", path: "/akaid" },
    { name: "সীরাত", path: "/akaid" },
  ];

  const headings = [{ name: "সাম্প্রতিক সংখ্যা »", path: "#" }];
  const courrent = [{ name: "প্রসঙ্গসমূহ »", path: "#" }];
  return (
    <div className=" font-bengali ">
      <div
        className="relative  bg-cover bg-top h-60 flex items-center font-bengali "
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-2 md:px-8 w-full">
          <div className="p-2 md:p-6">
            <div className="flex flex-col md:flex-row items-center md:space-y-0 justify-between md:space-x-4">
              {/* Left Section with text and border */}

              <div className="w-full md:w-[40%] md:text-left text-center font-bengali">
                <div className="flex items-center">
                  <h2 className="text-xl mt-24 md:text-3xl flex-grow text-white font-bold pb-[10px] border-b border-yellow-500">
                    বর্ষ: ২০,<span className="ml-4"></span> সংখ্যা: ১০
                  </h2>
                  {/* Mosque Icon */}
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-12 h-auto mt-24 -ml-[44px] hidden md:block"
                  />
                </div>
                {/* Subtitle Text */}
              </div>

              {/* Right Section with institution text */}
              <div className="w-[50%] font-bengali hidden md:block">
                <p className=" text-2xl mt-24 font-semibold text-right">
                  জুমাদাল উলা ১৪৪৬ || নভেম্বর ২০২৪
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto p-0 md:p-6 mt-5 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 px-4 relative">
              <div className="absolute top-0 right-0 h-[890px] border-r-2 border-gray-200"></div>
              <p className="px-3 py-2 bg-yellow-600 text-white inline-block">
                সম্পাদকীয়
              </p>
              <p className="mt-6 text-3xl font-bold border-b-2 pb-3 border-gray-300">
                <span>তূফানুল আকসা</span>
                <br /> ‖ বীর মুজাহিদ ইয়াহইয়া সিনওয়ারের শাহাদাত
              </p>
              <p className="pt-4">
                <div className="text-lg leading-relaxed text-justify">
                  ইতিমধ্যে ইসরাইল তার তথাকথিত বাহাদুরি দেখিয়েছে হামাস প্রধান বীর
                  মুজাহিদ ইয়াহইয়া সিনওয়ারকে হত্যার মাধ্যমে। আমেরিকার বয়োবৃদ্ধ
                  প্রেসিডেন্ট জো বাইডেন খুব খুশি প্রকাশ করেছেন যে, ইয়াহইয়া
                  সিনওয়ারকে হত্যার মাধ্যমে ওই অঞ্চলে শান্তি আসবে। এমন কথা
                  ইসরাইলও বলেছে। এবারই প্রথম না, এর আগেও ইসরাইল যখন বড় কোনো
                  মুজাহিদকে শহীদ করতে পেরেছে, তখনই দাবি করেছে, ওই অঞ্চলে শান্তি
                  চলে আসবে। কিন্তু যতই তারা এমন হিংস্র আচরণ করেছে, ততই তারা
                  অনিরাপদ হয়েছে। তাদের জনগণের নিরাপত্তাহীনতা বেড়েছে। কারণ
                  মুজাহিদরা দমে যায়নি। নতুন করে উজ্জীবিত হয়েছে। এবারও সে ভুল
                  কথাই প্রচার করা হচ্ছে। তারা খুশিতে লাফাচ্ছে।
                </div>
                <br />
                <div className="text-lg leading-relaxed text-justify">
                  আমরা যদি ইয়াহইয়া সিনওয়ারকে দেখি, তাঁর বীরত্বগাথা শুনি, তাহলে
                  বুঝব, যে জাতির এমন নেতা থাকে, সে জাতির উত্তরসূরিদের কিছু লোকও
                  যদি এমন মনোভাবের হয়, তাহলে সে জাতিকে কেউ সমূলে ধ্বংস করতে
                  পারবে না। একসময় না একসময় বিজয় তাদের পদচুম্বন করবেই ইনশাআল্লাহ।
                  ইয়াহইয়া সিনওয়ারের কথাই যদি ধরা হয়, এই বাহাদুর মুজাহিদ ২০ বছর
                  বয়সেই ইসরাইলের জেলে গিয়েছেন। ইসলামের জন্য, দেশের স্বাধীনতার
                  জন্য, মানুষের মুক্তির জন্য তাঁর আত্মত্যাগের ইতিহাস সুদীর্ঘ।
                  ইসরাইল তাকে ৪টি যাবজ্জীবন কারাদণ্ড দিয়েছিল, যার সময়কাল হয় ৪২৬
                  বছর! তিনি জীবনের ২৩ বছর ইসরাইলের জেলেই ছিলেন। কিন্তু তিনি
                  জেলখানাকে ইবাদতখানা ও দরসগাহে পরিণত করেছিলেন। সেখানে থেকেই
                  দ্বীন পড়েছেন। সেখানে থেকেই বই পড়েছেন। সেখানে থেকেই বই লিখেছেন।
                  সেখানে থেকেই ভেতরে ভেতরে হামাসকে সংগঠিত করেছেন। অবগত হয়েছেন
                  ইসরাইলের সামরিক শক্তি ও সামর্থ্য সম্পর্কে। এরপর বন্দি বিনিময়
                  চুক্তির অংশ হিসেবে ২০১১ সালে জেল থেকে বেরিয়ে আসার সুযোগ কাজে
                  লাগান।
                </div>
                <br />
                <div className="text-lg leading-relaxed text-justify">
                  বিশ্বের অন্যান্য নেতা ও তাঁর মধ্যে পার্থক্য কী? পৃথিবীর দলীয়
                  প্রধান ও নেতারা দূর থেকে নেতৃত্ব দেন, সরাসরি যুদ্ধে নামেন না;
                  কিন্তু ইয়াহইয়া সিনওয়ারকে আমরা দেখি, তিনি শুধু সামনে থেকে
                  নেতৃত্ব দেননি; বরং সাধারণ সৈনিকের মতো শেষ মুহূর্ত পর্যন্ত লড়ে
                  গেছেন। অঙ্গহানী ও আহত হওয়া সত্ত্বেও যে বীরত্ব দেখিয়ে গেছেন- তা
                  ইতিহাসের পাতায় স্বর্ণাক্ষরে লেখা থাকবে। এ বীরত্ব যুগে যুগে
                  দেশে দেশে মাজলুমদের টিকে থাকার অনুপ্রেরণা দেবে। নিষ্পেষিত
                  মানুষকে প্রতিরোধ গড়ে তোলার সাহস জোগাবে। <br />
                  <div className="text-lg leading-relaxed text-justify">
                    তাঁর একটি কথা পড়ে নিজেকে ধরে রাখাই কঠিন হয়ে গিয়েছিল। এক
                    বক্তব্যে বীর মুজাহিদ ইয়াহইয়া সিনওয়ার দৃপ্ত কণ্ঠে বলছেন, 'আমি
                    আল্লাহর শুকরিয়া আদায় করছি, আল্লাহ আমাকে এত বছর বাঁচিয়ে
                    রেখেছেন। আমার এখন ৫৯ বছর। এতদিনে আমি মারাও যেতে পারতাম। এত
                    বছর অনেকে বাঁচেও না; কিন্তু আল্লাহ আমাকে এত বছর বাঁচিয়েছেন।
                    হয়তো শত্রু আমাকে শহীদ করে দেবে। আমাকে মেরে বাহাদুরি দেখাবে;
                    কিন্তু আমি বিছানায় মরে যাওয়ার চেয়ে আমাকে শত্রু মেরে ফেললে
                    শাহাদাতের মর্যাদা নিয়ে দুনিয়া থেকে যাব।'{" "}
                  </div>
                  <br />
                  <div className="text-lg leading-relaxed text-justify">
                    এই যে ঈমান, প্রত্যয়, ত্যাগ- তিনি শুধু মুখেই বলেননি, করেও
                    দেখিয়েছেন। তিনি তার শেষ রক্তবিন্দু পর্যন্ত ইসলাম ও দেশের
                    জন্য লড়ে গেছেন। তিনি যেভাবে চেয়েছিলেন, সেভাবেই শাহাদাত বরণ
                    করেছেন। আমরা আগেও বলেছি, শেখ ইয়াসীন রাহ., ইসমাঈল হানিয়া রাহ.
                    এবং সর্বশেষ ইয়াহইয়া সিনওয়ার রাহ.-এর মতো যোদ্ধারা, সাহসী
                    মুজাহিদরা আত্মত্যাগ দিয়ে, লড়াই করে দেখিয়ে গেছেন তাদের জাতি
                    কেমন। শত্রু যত বড়ই হোক, যত শক্তিশালীই হোক, জান বাজি রেখে
                    প্রতিরোধ গড়ে তোলা হলে একসময় না একসময় শত্রু পিছপা হতে বাধ্য
                    হবেই। সে চাপে থাকবেই।
                  </div>
                  <br />
                  <div className="text-lg leading-relaxed text-justify">
                    এত ধ্বংসযজ্ঞের পরেও ইসরাইলের দুর্দশা এখনো কাটেনি। নিরপেক্ষ
                    অনেক বিশ্লেষকই বলছেন, তাদের অবস্থা দিন দিন খারাপ হচ্ছে।
                    ফিলিস্তিনের মুজাহিদরা বিশ্বের মজলুমদের জন্য আত্মত্যাগের নজির
                    রেখে যাচ্ছে। মুসলিম বিশ্বের উচিত তাদের প্রতি সহমর্মী হওয়া,
                    সম্ভাব্য সব সহযোগিতা অব্যাহত রাখা এবং দুআ জারি রাখা। মুসলিম
                    শাসকদের যেন শুভবুদ্ধির উদয় হয় সেজন্য দুআ ও চেষ্টা চালিয়ে
                    যাওয়া।
                  </div>
                  <br />
                  <br />
                  <div className="font-semibold">
                    গাজায় হত্যাযজ্ঞ ও ধ্বংসলীলার এক বছর ‖
                  </div>
                  <br />
                  <p>বীর মুজাহিদ ইয়াহইয়া সিনওয়ারের শাহাদাত </p>
                  <br />
                </div>
                <p className="font-semibold">
                  আর কতদিন নিশ্চুপ থাকবেন মুসলিম শাসকগণ
                </p>
                <br />
                <p className="text-lg leading-relaxed text-justify">
                  ৭ অক্টোবর ২০২৩ সালে 'তূফানুল আকসা' সংঘটিত হওয়ার পর থেকে
                  ফিলিস্তিন, লেবাননসহ মধ্যপ্রাচ্যে ইসরাইল যে ধ্বংসযজ্ঞ চালিয়ে
                  যাচ্ছে, বিশেষত ফিলিস্তিনের গাজায় নিত্যদিন যে হত্যাকাণ্ড চালিয়ে
                  যাচ্ছে, এর নজির পৃথিবীর ইতিহাসে হয়তো দ্বিতীয়টি পাওয়া যাবে না।
                  বর্তমান সময়ে পৃথিবী সভ্যতার দাবি করছে, মানবাধিকারের কথা বলছে,
                  গঠিত হয়েছে জাতিসংঘ, ইউরোপীয় ইউনিয়ন, ন্যাটো আরো কত কী? কত
                  আঞ্চলিক সংস্থা। মুসলমানদের ওআইসির কথা না হয় বাদই দিলাম। এ
                  সভ্যতার দাবির ভেতরেই নিরপরাধ মানুষদেরকে নিত্যদিন হত্যা করা
                  হচ্ছে। এই কথা যখন বলা হচ্ছে তখন ঘোষিত সংখ্যা অনুযায়ী শুধু গাজা
                  এলাকায়ই নিহতের সংখ্যা ৪২ হাজারেরও বেশি। আহত হয়েছে লক্ষাধিক
                  লোক। সবাই জানেন, এই নিহত ও আহত ব্যক্তিদের অল্প কিছু ছাড়া বেশির
                  ভাগই নারী, শিশু ও নিরপরাধ বেসামরিক লোকজন। গাজাকে যে তারা
                  ধ্বংসস্তূপে পরিণত করেছে, একটি জাতি নিধনে যে তারা লেগে আছে
                  দীর্ঘদিন ধরে, এর পরিপ্রেক্ষিতে আন্তর্জাতিক আদালত এটাকে গণহত্যা
                  বলে রায় দিয়েছেন- সেই রায় অবজ্ঞা করে যাচ্ছে ইসরাইল, আমেরিকা ও
                  পশ্চিমা শক্তি। এই অপরাধে ইসরাইলের মতো তার মিত্ররাও সমান
                  অপরাধী। ইসরাইল সেখানের ভাড়াটে খুনি হিসেবে খাটছে। ইসরাইলকে
                  টাকা-পয়সা, অস্ত্র-সস্ত্র সবকিছু সরবরাহ করছে মার্কিন
                  যুক্তরাষ্ট্র ও তার মিত্ররা।
                </p>
                <br />
                <p className="text-lg leading-relaxed text-justify">
                  পৃথিবী তো আর সবসময় একরকম চলবে না। পৃথিবীতে যত নারকীয়
                  হত্যাকাণ্ড যুগে যুগে জালেমরা ঘটিয়েছে, তাদের পরিণতি ভয়াবহ
                  হয়েছে। ইসরাইলের পরিণতি যে ভয়াবহ হবে- এটা এখন থেকেই অনেকে
                  ভবিষ্যদ্বাণী করছেন। যারা ইসরাইলকে সমর্থন দিয়ে যাচ্ছে, তাদেরও
                  বোঝা উচিত পৃথিবীর পরিস্থিতি কখন কোথা থেকে কোথায় গড়ায়, তার কোনো
                  ঠিক-ঠিকানা নেই
                </p>
                <br />
                <p className="text-lg leading-relaxed text-justify">
                  আমরা বিশেষত মুসলিম রাষ্ট্রগুলোর ভূমিকার কথা বলতে চাই, তারা আর
                  কতকাল নীরব ভূমিকায় থাকবে অথবা তলে তলে তারা আর কতকাল ইসরাইল
                  তোষণ করে যাবে। এ অঞ্চলে যুদ্ধ বিস্তৃত হওয়ার আশঙ্কা দিন দিন
                  বাড়ছে। যদি তাই হয়, তাহলে যারা ইসরাইলকে স্বীকৃতি দেওয়ার জন্য
                  বসে আছে, যাদের এমন দুঃসময়েও মাথাব্যথা নেই, তারা কিন্তু তখন
                  নিস্তার পাবে না। ইতিহাস তাদের ক্ষমা করবে না। তাদের হাশর হবে
                  দুঃসহ। এটা নিয়ে এখনই তাদের ভাবা উচিত।
                </p>
                <br />
                <p className="text-lg leading-relaxed text-justify">
                  সুতরাং সময় থাকতেই মুসলিম দেশগুলো বিশেষত আর্র্থিক ও সামরিকভাবে
                  শক্তিশালী দেশগুলোর শাসকদের উদ্যোগী হওয়া উচিত। যেসব অমুসলিম দেশ
                  ইসরাইলের পাশে নেই, ইসরাইলকে সমর্থন দিচ্ছে না, তাদেরকে সাথে
                  নিয়ে অগ্রসর হওয়া দরকার। বিগত দিনগুলোতে দেখা গেছে, বিশ্বের বড়
                  বড় কিছু অমুসলিম দেশ ইসরাইলের বিরুদ্ধে সোচ্চার হলেও মুসলিম
                  দেশগুলো কোনো ভূমিকা রাখেনি।
                </p>
                <br />
                <p className="text-lg leading-relaxed text-justify">
                  বীর মুজাহিদ শহীদ ইয়াহইয়া সিনওয়ারের স্মরণে মাসিক আলকাউসারের
                  চলতি সংখ্যায় সম্পাদকীয়সহ আরো দুটি লেখা প্রকাশিত হল। যা থেকে এ
                  জানবাজ আল্লাহর বান্দার গল্প ও বীরত্বগাথা আলকাউসারের পাঠকগণ
                  অবগত হতে পারবেন।{" "}
                </p>
              </p>
              <div className="flex flex-col md:flex-row mt-5 items-start md:items-center gap-4">
                <div className="text-xl mb-2 md:mb-0">প্রসঙ্গসমূহ:</div>
                <div className="flex flex-wrap gap-3">
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    দ্বীনিয়াত
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    অনৈতিকতা
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    মনীষী/স্মরণ
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    স্মৃতিচারণ/জীবন থেকে
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    নীতি-নৈতিকতা
                  </p>
                </div>
              </div>
              <div className="mt-16">
                <img src={adStart} alt="adStart" className="w-full" />
              </div>
            </div>

            <div className=" ">
              <div className="flex items-center right ">
                {courrent.map((article, i) => (
                  <Link
                    key={i}
                    to={article.path}
                    className="text-2xl cursor-pointer hover:text-green-600 text-gray-700 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]"
                  >
                    {article.name}
                  </Link>
                ))}
                <img src={mosque} alt="mosque" className="w-8 h-auto -ml-6" />
              </div>
              <div className="abc px-4 py-6">
                <div className="flex flex-wrap gap-3 mb-6 pb-5 border-b border-gray-200">
                  {tags.map((tag, index) => (
                    <Link
                      to={tag.path}
                      key={index}
                      className="px-3 py-1 text-gray-800 hover:bg-gray-500 hover:text-white  bg-gray-200  text-center"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
                <div className="text-center flex justify-start mt-4">
                  <button className="px-6 py-2 bg-green-600 text-white font-semibold  hover:bg-green-700">
                    আরো »
                  </button>
                </div>
                <div className="mt-8">
                  <div className="flex items-center right ">
                    <h2 className="text-2xl item-map cursor-pointer   hover:text-green-600 text-gray-700 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                      {headings.map((article, i) => (
                        <Link
                          key={i}
                          to={article.path}
                          className="cursor-pointer"
                        >
                          {article.name}
                        </Link>
                      ))}
                    </h2>
                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-6"
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
            </div>

            {/* right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpatialEdition;

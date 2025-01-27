import React from "react";

import { aboutDetails, slides } from "@/Constants";


const About: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-14 bg-white ">
      {/* Heading */}
      <div className="flex items-center justify-center mb-5">
        <div className="bg-[#5F8184] w-12 h-1"></div>
        <p className="font-bold ml-4 text-center lg:text-left text-sm md:text-base lg:text-lg">
          About Me
        </p>
      </div>
     {/* Content Sections */}
<div className="flex flex-col lg:flex-row justify-center items-center mb-3">
  {/* Image Slider */}
  <div className="w-full lg:w-auto mb-6 lg:mb-0">
  <img
          src={slides[0].src} // Use slides[1] or map if you want multiple images
          alt="About"
          className="min-w-full h-[400px] rounded-lg shadow-md"
        />

  </div>

  {/* Who I Am section */}
  <div className="p-4 max-w-xl text-center mx-auto lg:text-left">
    <h2 className="text-lg md:text-xl font-bold mb-4">Your partner in digital transformation.</h2>
    <p className="text-sm md:text-base leading-relaxed">
      I am a front-end developer and UI/UX designer with a passion for
      creating beautiful, user-centered digital experiences. Combining
      creativity with technical expertise, I deliver responsive designs
      that are both functional and engaging.
    </p>

    {/* About details grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3 max-w-2xl w-full">
      {aboutDetails.map((detail, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg shadow"
        >
          <span className="font-bold text-gray-700">{detail.label}:</span>
          <span className="text-gray-600">{detail.value}</span>
        </div>
      ))}
    </div>
     {/* View cv Button */}
      
  <div className="flex justify-center mt-14 transform transition duration-300 hover:scale-105">
  <a
  href="/CV.pdf"
  download="ineza_linker_CV.pdf"
  className="px-6 py-2 text-white bg-[#5F8184] rounded-full hover:bg-[#486364] transition-colors "
>
  Download CV
</a>

  </div>

    {/* Decoration lines */}
    <div className="flex justify-center items-center mt-16 gap-10">
      <div className="w-24 md:w-36 h-2 rounded-3xl bg-[#5F8184]"></div>
      <div className="w-2 h-2 rounded-full bg-[#5F8184]"></div>
      <div className="w-24 md:w-36 h-2 rounded-3xl bg-[#5F8184]"></div>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;

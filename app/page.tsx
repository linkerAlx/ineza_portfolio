import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Portfolio from "@/Components/Portfolio";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col  ">
    {/* Header Section */}
    <div className="flex items-center justify-center p-5 mt-12">
      <div className="bg-[#5F8184] w-24 h-2"></div>
      <p className="font-bold ml-4 text-center lg:text-left text-sm md:text-base lg:text-lg">
        Shaping the Future of Digital Interaction with Creativity.
      </p>
    </div>

    {/* Main Content Section */}
    <div className="flex flex-col lg:flex-row items-center justify-center m-4 space-y-5 lg:space-y-0 lg:space-x-10">
      
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <p className="font-bold text-lg md:text-xl lg:text-2xl ">
INEZA LINKER Arlene
</p>
        <p className="text-sm font-bold md:text-base lg:ml-8 bg-gradient-to-br from-black to-[#5F8184] bg-clip-text text-transparent">FRONTEND DEVELOPER</p>
        <p className="text-center lg:ml-28 font-bold">&</p>
        <p className="text-sm font-bold md:text-base lg:ml-14 bg-gradient-to-br from-black to-[#5F8184] bg-clip-text text-transparent">UI/UX DESIGNER</p>
      </div>

      {/* Image Section */}
      <div>
      <Image
src="/photos/Linker.jpg"
alt="Profile Pic"
className="rounded-full border-4 border-gray-300 w-36 h-36 object-cover"
width={100}
height={100}
/>

      </div>

      {/* Button Section */}
      <button className="bg-[#5F8184] text-white px-6 py-3 font-bold rounded shadow-lg hover:bg-[#47696a] transition-transform transform hover:scale-105">
        HIRE ME!
      </button>
    </div>
    {/* component section */}
    <div className="-mt-8 ">
      <About/>
      <div className="-mt-12 ">
      <Skills/>
      </div>
      <div className="-mt-12">
      <Services/>
      </div>
      <div className="-mt-5">
      <Portfolio/>
      </div> 
      <div className="-mt-12">
      <Contact/>
      </div>  
      <div className="">
      <Footer/>
      </div>  

    </div>
        </main>
 
  );
}

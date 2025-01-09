import About from "@/Components/About";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

const page : React.FC = () => {
  return (
    <div>
      <Navbar/>
      <main className="">
        <About/>
      </main>
      <Footer/>
    </div>
  )
}

export default page

import About from "@/Components/About";
import Footer from "@/Components/Footer";
import React from "react";

const page : React.FC = () => {
  return (
    <div>
      <main className="">
        <About/>
      </main>
      <Footer/>
    </div>
  )
}

export default page

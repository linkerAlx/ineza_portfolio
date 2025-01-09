import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Skills from '@/Components/Skills'
import React from 'react'

const page : React.FC= () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Skills/>
      </main>
      <Footer/>
    </div>
  )
}

export default page

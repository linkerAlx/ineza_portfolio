import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Portfolio from '@/Components/Portfolio'
import React from 'react'

const page : React.FC= () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Portfolio/>
      </main>
      <Footer/>
    </div>
  )
}

export default page

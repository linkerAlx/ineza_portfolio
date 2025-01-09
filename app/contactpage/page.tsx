import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'

const page : React.FC = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default page

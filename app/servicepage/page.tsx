import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Services from '@/Components/Services'
import React from 'react'

const page : React.FC= () => {
  return (
    <div>
      <Navbar/>
      <main className='mb-4'>
        <Services/>
      </main>
      <Footer/>
    </div>
  )
}

export default page

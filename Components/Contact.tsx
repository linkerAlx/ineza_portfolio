import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';



const Contact : React.FC = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center mt-14'>
    {/* Heading */}
    <div className="flex items-center justify-center mb-5">
        <div className="bg-[#5F8184] w-12 h-1"></div>
        <p className="font-bold ml-4 text-center lg:text-left text-sm md:text-base lg:text-lg">
        Contact Us
        </p>
      </div>
      {/* contact inform */}
      <div  className="w-full h-auto  bg-cover bg-center  "
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/29738109/pexels-photo-29738109/free-photo-of-vintage-rotary-telephone-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <div className="bg-[#5F8184] bg-opacity-50 text-gray-400 font-sans  shadow-lg rounded-lg p-3 m-6 flex flex-col items-start justify-center w-60">
            <div className="flex items-center   mb-4">
              <FaPhoneAlt className=" text-xl mr-3 " />
              <span className="text-lg">+250783653531</span>
            </div>

            <div className="flex items-center mb-4">
              <FaEnvelope className=" text-xl mr-3" />
              <span className="text-lg">inezalinkera@gmail.com</span>
            </div>

            <div className="flex items-center mb-4">
              <FaInstagram className="text-xl mr-3" />
              <span className="text-lg">linker_arlene</span>
            </div>

            <div className="flex items-center mb-4">
              <FaLinkedin className="-700 text-xl mr-3 " />
              <span className="text-lg">Ineza Linker Arlene</span>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className=" shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center text-white">Stay Connected With Us!</h2>
            <p className="text-sm text-gray-200 mb-6 text-center">
              We are here to listen assist and collaborate—whether you have questions need support or want to share your thoughts connect with us today!
            </p>

            <form className="flex flex-col space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                placeholder="Message"
                              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-[#5F8184] text-white py-2 px-4 rounded-lg hover:bg-green-800 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map Information */}
<div className="w-full">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15948.831532104425!2d29.773292476900153!3d-2.0727235727171913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dcca069bdd9737%3A0x7b43e570103a0bc1!2sNyamabuye!5e0!3m2!1sen!2srw!4v1735912717741!5m2!1sen!2srw"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-52"
  ></iframe>
</div>

    </div>
   
  )
}

export default Contact

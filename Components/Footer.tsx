import footerConstants, {  Socials} from "@/Constants";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer : React.FC = () => {
    
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-4 gap-4 px-4">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">{footerConstants.about.title}</h2>
          <p className="text-sm leading-relaxed">{footerConstants.about.description}</p>
        </div>

        {/* Quick Links Section */}
        <div>
  <h2 className="text-lg font-bold mb-4">Quick Links</h2>
  <ul className="flex flex-wrap gap-4 text-sm">
    {Socials.map((social, index) => (
      <li key={index} className="w-auto">
        <a href={social.path} className="hover:text-gray-400 transition duration-300">
          {social.name}
        </a>
      </li>
    ))}
  </ul>
</div>


        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">{footerConstants.contact.title}</h2>
          <ul className="space-y-2 text-sm">
            {footerConstants.contact.details.map((detail, index) => (
              <li key={index}>
                <span>{detail.label}</span>{" "}
                {detail.href ? (
                  <a href={detail.href} className="hover:text-gray-400 transition duration-300">
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </li>
            ))}
          </ul>
        </div>
      
      {/* Social Media Links */}
      <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/linker_arlene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-pink-600 hover:text-gray-400 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/ineza-linker-arlene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-600 hover:text-gray-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        </div>
      

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">{footerConstants.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import footerBg from '../assets/images/footer_bg.png'; // Import footer background image

const Footer = () => {
  // Scroll to top button visibility state
  const [visible, setVisible] = useState(false);

  // Show the button when scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="footer bg-cover bg-center" style={{ backgroundImage: `url(${footerBg})` }}>
      {/* Start Footer top */}
      <div className="footer-top py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="contact-us text-white">
              <h3 className="text-xl font-bold mb-4 text-orange-500">About</h3>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet, ei ubique fastidii vim. Elitr feugait complectitur eu pro, sea audire ponderum
                eleifend cu.
              </p>
              <p className="text-sm mb-2 flex items-center">
                <FaPhone className="mr-2 text-lg" />
                +880-123-456-7890
              </p>
              <p className="text-sm mb-4 flex items-center">
                <FaEnvelope className="mr-2 text-lg" />
                <a href="mailto:fitnessgym@gmail.com" className="hover:text-orange-500">fitnessgym@gmail.com</a>
              </p>
            </div>

            {/* Newsletter Section */}
            <div className="newletter text-white">
              <h3 className="text-xl font-bold mb-4 text-orange-500">NEWSLETTER</h3>
              <p className="text-sm mb-4">Sign up for our mailing list to get the latest updates and offers.</p>
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="bg-transparent border-2 border-gray-300 text-white px-4 py-2 rounded-md"
                />
                <button className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-md">
                  <span className="fa fa-long-arrow-right"></span>
                </button>
              </div>
              <ul className="follow-us flex space-x-4">
                <li>
                  <a href="#" className="text-white text-xl hover:text-orange-500">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-xl hover:text-orange-500">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-xl hover:text-orange-500">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-xl hover:text-orange-500">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-xl hover:text-orange-500">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>

            {/* Flickr Photos Section */}
            <div className="flickr-photos text-white">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Flickr Photos</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="images/flic1B.png">
                    <img src="images/flic1.png" alt="Flickr 1" className="w-24 h-24 rounded-lg" />
                  </a>
                </li>
                <li>
                  <a href="images/flic2B.png">
                    <img src="images/flic2.png" alt="Flickr 2" className="w-24 h-24 rounded-lg" />
                  </a>
                </li>
                <li>
                  <a href="images/flic3B.png">
                    <img src="images/flic3.png" alt="Flickr 3" className="w-24 h-24 rounded-lg" />
                  </a>
                </li>
                {/* Add more images as necessary */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer top */}

      {/* Copy Rights */}
      <div className="copy-rights-section bg-gray-800 text-center py-4">
        <div className="container mx-auto">
          <p className="text-white text-sm">
            <a href="https://www.templateshub.net" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
              Templates Hub
            </a>
          </p>
        </div>
      </div>
      {/* End Copy Rights */}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 bg-orange-500 text-white rounded-full p-4 transition-all ${
          visible ? 'block' : 'hidden'
        }`}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;

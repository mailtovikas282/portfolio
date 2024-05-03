import React from "react";
import {
  FaSquareGithub,
  FaLinkedin
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
            <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/Vikass222345" target="_blank">
                      <FaSquareGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vikas-singh-88a3bb245/
"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              
              {/* <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} /> */}
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

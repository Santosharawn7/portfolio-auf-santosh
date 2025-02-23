import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <div style={{
      backgroundImage: 'url("https://usimg.sulekha.io/cdn/ittraining/images/qa-testing_2023-02-08-06-13-29-370.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <section className="pt-6 pb-2 overflow-hidden" >
        <div className="container mx-auto px-4" >
          <Navbar />

          <div className="container mx-auto px-4">
            <div
              className="py-16 px-8 rounded-3xl bg-black bg-opacity-55"
              
            >
              <div className="md:mx-20 mx-auto">
                {/* <h2 className="font-heading text-left mb-6 text-xl md:text-5xl text-white font-black tracking-tight">
                  In software, the most important thing is to deliver quality, not quantity.
                </h2>
                <p className="mb-10 text-base md:text-xl text-blue-100 md:font-bold">
                  In the software industry, delivering quality is paramount. A dedicated QA engineer plays a crucial role in ensuring that the final product meets high standards of performance, functionality, and user satisfaction. By rigorously testing applications, identifying bugs early, and providing constructive feedback, QA professionals help prevent costly issues down the line. Their commitment to quality not only enhances the user experience but also builds trust in the brand. Ultimately, it's the quality of the software that drives success, making QA an indispensable part of the development process.
                </p> */}

                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  {/* LinkedIn Button */}
                  <div className="w-auto p-2">
                    <a
                      className="flex items-center justify-center w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-gray-900 hover:bg-blue-500 focus:ring-4 focus:ring-gray-600 rounded-full"
                      href="https://www.linkedin.com/in/santosh-bohara-4b04a0140/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedIn className="mr-2" width="20" height="20" fill="currentColor" />
                      LinkedIn
                    </a>
                  </div>

                  {/* GitHub Button */}
                  <div className="w-auto p-2">
                    <a
                      className="flex items-center justify-center w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-gray-900 hover:bg-orange-700 focus:ring-4 focus:ring-gray-600 rounded-full"
                      href="https://github.com/Santosharawn7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub className="mr-2" width="20" height="20" fill="currentColor" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

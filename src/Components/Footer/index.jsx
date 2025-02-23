import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer Section 1: Logo and About */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xs md:text-xl font-bold">Logo</span>
            </div>
            <p className="text-xs md:text-gray-400 text-center">
              A brief description of your company or website goes here.
            </p>
          </div>

          {/* Footer Section 2: Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xs md:text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-xs md:text-gray-400 hover:text-white">Home</a>
              <a href="#" className="text-xs md:text-gray-400 hover:text-white">About</a>
              <a href="#" className="text-xs md:text-gray-400 hover:text-white">Services</a>
              <a href="#" className="text-xs md:text-gray-400 hover:text-white">Contact</a>
            </nav>
          </div>

          {/* Footer Section 3: Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-xs md:text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.899 10.124-5.864 10.124-11.853z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.19 0 0022 5.92a8.19 8.229 0 01-2.357.646 4.118 4.236 0 001.804-2.27 8.224 8.278 0 01-2.605.996 4.107 3.92 0 00-6.993 3.743 11.65 8.457 0 01-8.457 5.98 4.106 2.266 0 00-1.736.388 4.032 1.28 0 00-1.988.916 4.059 1.398 0 00-1.47.81 4.063 1.255 0 00-1.69.526 4.055 1.141 0 00-1.649.188 4.068.68 0 00-1.469.326 4.045.687 0 00-1.453.232 4.035.484 0 00-1.414.163 3.949.388 0 00-1.23.057-3.946.056 0 00-1.212 0 3.946 0 00-1.212-.056 4.035-.055 0 00-1.23-.057 4.059-.115 0 00-1.414-.384 4.045-.687 0 00-1.453-.484 4.035-.82 0 00-1.47-.652 4.063-1.206 0 00-1.69-.918 4.06-1.271 0 00-1.988-1.758 4.04-1.396 0 00-1.736-1.697 4.032-1.201 0 00-1.67-1.935 3.988-2.5 0 00-1.745-2.25 4.0-2.5 0 00-1.56-2.5 3.938-3.0 0 00-1.479-3.0 4.666-3.0 0 00.0-5.0 4.666-5.0 0 0-5.0 4.666-5.0 5.0 0 0 5.0 5.0 5.0 0 0 5.0-5.0 4.666-5.0 0 0-5.0-4.666-5.0 0 0-5.0 0zm-1.133-1.491c.656 0 1.283.126 1.283.84.388.694.126 1.283.126 1.283.0.694.388.694 1.283.694 1.283.0 0 1.283-.126 1.283-1.283-.388-.694-.126-1.283-.126-1.283.0-.694-.388-.694-1.283-.694-1.283zm-7.677 3.934c-3.94 0-7.677 1.436-7.677 7.677 0 3.94 1.436 7.677 7.677 7.677 3.94 0 7.677-1.436 7.677-7.677 0-3.94-1.436-7.677-7.677-7.677z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-xs md:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

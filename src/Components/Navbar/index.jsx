import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import logo from '../../assets/icon.ico'; // Adjust according to your project structure

function Navbar() {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between px-6 py-3.5 bg-gray-900 rounded-full">
        {/* Logo Section */}
        <div className="w-auto">
          <a href="#">
            <img src={logo} alt="Portfolio Logo" className="h-8 w-8" />
          </a>
        </div>

        {/* Call to Action buttons */}
        <div className="w-auto flex items-center space-x-4">
          <a
            className="text-white hover:bg-orange-700 rounded-full p-2"
            href="https://github.com/Santosharawn7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="h-6 w-6" />
          </a>
          <a
            className="text-white hover:bg-blue-600 rounded-full p-2"
            href="https://www.linkedin.com/in/santosh-bohara-4b04a0140/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

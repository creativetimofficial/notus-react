import { Box } from '@mui/system';
import React from 'react';

export default function FooterAdmin() {
  return (
    <Box sx={{ position: 'fixed', width: '100%', mb: '-20px' }}>
      <footer className="block pb-4 footer w-full bg-light-grey">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                Copyright ©
                {' '}
                {new Date().getFullYear()}
                {' '}
                <a
                  href="https://www.amida.com"
                  className="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1"
                >
                  Amida
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.amida.com/what/index.html"
                    className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/creativetimofficial/notus-react/blob/master/LICENSE.md?ref=nr-footer-admin"
                    className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Box>
  );
}

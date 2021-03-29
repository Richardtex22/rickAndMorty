

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const mobileMenu = (open) => {
    setIsClicked(!open);
  }
  return (
    <nav className="bg-gray-800 sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() => mobileMenu(isClicked)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
                  {!isClicked ?
                    (
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                    ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto rounded-3xl" src="https://png.pngitem.com/pimgs/s/515-5152607_freetoedit-cute-rick-morty-rickandmorty-wallpaper-black-and.png" alt="Workflow" />
              <img className="hidden lg:block h-8 w-auto rounded-3xl" src="https://png.pngitem.com/pimgs/s/515-5152607_freetoedit-cute-rick-morty-rickandmorty-wallpaper-black-and.png" alt="Workflow" />
              <span className="hidden lg:block ml-4 text-white font-semibold text-xl tracking-tight">Rick and Morty</span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to="/Home">
                  <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</button>
                </Link>
                <Link to="/Characters">
                  <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Characters</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      {!!(isClicked) && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/Home">
              <button href="#" className="bg-gray-900 text-white block px-3 py-2 my-2 rounded-md text-base font-medium" aria-current="page">Home</button>
            </Link>
            <Link to="/Characters">
              <button href="#" className="bg-gray-900 text-white block px-3 py-2 my-2 rounded-md text-sm font-medium" aria-current="page">Characters</button>
            </Link>
          </div>
        </div>
      )
      }
    </nav>

  );
};

export default NavBar;
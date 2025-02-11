import React, { useState } from 'react';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
        <i className="fa-solid fa-bars hover:text-slate-100"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 bottom-full mb-2 w-56 rounded-md shadow-lg bg-gradient-to-r from-blue-600 to-violet-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
            onClick={toggleDropdown}
              href="home"
              className="text-white block px-4 py-2 text-sm hover:bg-gradient-to-r from-violet-700 to-blue-600"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              New Game
            </a>
            <a
              href="AddWords"
              className="text-white block px-4 py-2 text-sm hover:bg-gradient-to-r from-violet-700 to-blue-600"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Add Words
            </a>
            <a
              href="rules"
              className="text-white block px-4 py-2 text-sm hover:bg-gradient-to-r from-violet-700 to-blue-600"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
             Rules
            </a>
            <a
              href="help"
              className="text-white block px-4 py-2 text-sm hover:bg-gradient-to-r from-violet-700 to-blue-600"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
            Help
            </a>
           
           
           
          </div>
        </div>
      )}
    </div>
  );
}

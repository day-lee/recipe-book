import { Link } from "react-router-dom";

import React, { useState } from "react";

import hamburgerMenu from "../../assets/burger-menu.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isInteracting) {
      setIsOpen(false);
    }
  };

  const handleInteractionStart = () => {
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
    setIsOpen(false);
  };

  return (
    <nav className="mt-2">
      <div>
        <div className="flex items-center justify-between">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="border-0 hover:bg-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={hamburgerMenu} alt="menu" />
            </button>
          </div>
          {isOpen && (
            <nav
              className="absolute top-12 sm:top-2 right-0 bg-lightGrey flex-col border-4 border-red-700 rounded-lg"
              onMouseEnter={handleInteractionStart}
              onMouseLeave={handleInteractionEnd}
            >
              <ul>
                <Link to="/">
                  <li className="block px-4 py-2 text-gray-800 hover:text-red-700 hover:font-semibold border-b-2 border-white">
                    Add a recipe
                  </li>
                </Link>
                <Link to="/meal-planner">
                  <li className="block  px-4 py-2 text-gray-800 hover:text-red-700 hover:font-semibold border-b-2 border-white">
                    Plan my meals
                  </li>
                </Link>
                <Link to="/random-pick">
                  <li className="block px-4 py-2 text-gray-800 hover:text-red-700 hover:font-semibold border-b-2 border-white">
                    Pick random recipe
                  </li>
                </Link>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

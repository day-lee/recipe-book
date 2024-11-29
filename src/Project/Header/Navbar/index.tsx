import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <nav className="mr-4 mt-2 sm:mr-14">
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
              className="absolute top-16 sm:top-5 right-0 bg-lightGrey rounded-sm flex-col"
              onMouseEnter={handleInteractionStart}
              onMouseLeave={handleInteractionEnd}
            >
              <ul>
                <Link to="/">
                  <li className="block px-4 py-2 text-gray-800 hover:text-blue-800 border-b-2 border-white">
                    Add a recipe
                  </li>
                </Link>
                <Link to="/">
                  <li className="block  px-4 py-2 text-gray-800 hover:text-blue-800 border-b-2 border-white">
                    Plan my meals
                  </li>
                </Link>
                <Link to="/">
                  <li className="block px-4 py-2 text-gray-800 hover:text-blue-800 border-b-2 border-white">
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

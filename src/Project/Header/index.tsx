import { useState } from "react";
import { Link } from "react-router-dom";

import { useSearch } from "../../context/searchProvider";
import Navbar from "./Navbar";

import searchMagnifier from "../assets/search.svg";

const Header: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setSearchTerm(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <header
      role="header"
      className="flex justify-between items-center sticky top-0 left-0 w-full h-16 bg-white z-10"
    >
      <Link to="/">
        <div className="w-20 sm:w-[200px] text-xl sm:text-3xl font-bold text-gray-800 font-custom">
          Recipe Book
        </div>
      </Link>
      {/* search box */}
      <div className="flex-1 relative sm:mx-20 mx-4">
        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>
        <input
          id="searchInput"
          className="w-full sm:min-w-[180px] pl-12 h-10 bg-lightGrey rounded-sm z-10 text-sm sm:text-lg"
          type="text"
          name="search"
          value={inputValue}
          placeholder="Search the recipe"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleButtonClick}>
          <img
            className="absolute top-[5px] left-2 w-7"
            src={searchMagnifier}
            alt="search"
          />
        </button>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;

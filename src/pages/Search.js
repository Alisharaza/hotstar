import React, { useEffect, useState } from "react";
import "../Style/search.css";
import SearchResult from "../Components/SearchResult";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import HeroCarousel from "../Components/Carousel";
import Tray from "../Components/Tray";
function Search({ heading }) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => setSearchValue(e.target.value);
  const clearSearch = () => setSearchValue("");

  return (
    <div className="searchContainer">
      <div className="searchBox">
        <FiSearch className="searchIcon" />

        <input
          value={searchValue}
          onChange={handleChange}
          className="searchItem"
          type="text"
          placeholder="Movies, Shows and more"
        />
        {searchValue.trim() && (
          <span className="closeIcon" onClick={clearSearch}>
            <AiOutlineClose className="searchIcon" />
          </span>
        )}
      </div>
      {searchValue ? (
        <SearchResult searchValue={searchValue} />
      ) : (
        <Tray heading={"Popular Searches"} type={"movie"} page={1} />
      )}
    </div>
  );
}

export default Search;

import React, { useEffect } from "react";
import { useGetRequest } from "../Hooks/useGetRequest";
import "../Style/searchresult.css";
import Card from "./Card";

const SearchResult = ({ searchValue }) => {
  const { data, isLoading, isError, get } = useGetRequest();

  useEffect(() => {
    get(`/ott/show?search={"title":"${searchValue}"}`);
  }, [searchValue]);
  return (
    <div className="searchResultsWrapper">
      <h3 className="searchHeading">Search results for "{searchValue}"</h3>
      {isError ? (
        <p>No results for {searchValue}</p>
      ) : (
        <div className="searchCardsContainer">
          {data?.map((show) => (
            <Card {...show} key={show._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;

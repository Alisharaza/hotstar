import React, { useEffect } from "react";
import { useGetRequest } from "../Hooks/useGetRequest";
import "../Style/searchresult.css";
import Card from "./Card";

const SearchResult = ({ searchValue }) => {
  const { data, isLoading, isError, get } = useGetRequest();
  //   console.log(data);
  useEffect(() => {
    get(`/ott/show?search={"title":"${searchValue}"}`);
  }, []);
  return (
    <div className="searchResultsWrapper">
      <h3 className="searchHeading">MORE RESULT</h3>
      <div className="searchCardsContainer">
        {data?.map((show) => (
          <Card {...show} key={show._id} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetRequest } from "../Hooks/useGetRequest";
import { requests } from "../Components/Services/RequestParams";
import Card from "../Components/Card";
import "../Style/searchresult.css";

const More = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [moreData, setMoreData] = useState([]);

  const { get, isLoading, data } = useGetRequest();
  const type = searchParams.get("type");
  const { heading } = useParams();

  useEffect(() => {
    let queryString = "";
    queryString = requests({ page, type })[type];
    get(queryString);
  }, [page]);

  useEffect(() => {
    setMoreData((prev) => [...prev, ...data]);
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >
        document.documentElement.scrollHeight - 500
      ) {
        if (!isLoading) {
          setPage((previous) => previous + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="searchResultContainer">
      <h1 className="moreHeading">{heading}</h1>
      <div className="searchResultsWrapper">
        <div className="searchCardsContainer">
          {moreData?.map((show) => (
            <Card {...show} key={show._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default More;

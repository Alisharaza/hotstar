import React, { useEffect } from "react";
import { useGetRequest } from "../Hooks/useGetRequest";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { requests } from "./Services/RequestParams";
import { useNavigate } from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
    swipeable: true,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 5,
    swipeable: true,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 5,
    swipeable: true,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 5,
    swipeable: true,
  },
};
const Tray = ({ heading, type, watchlist, page = 1 }) => {
  let { data, isLoading, isError, get } = useGetRequest();
  useEffect(() => {
    let queryString = "";
    if (watchlist) {
      queryString = requests({ page }).watchlist;
    } else {
      queryString = requests({ page, type })[type];
    }
    get(queryString);
  }, []);
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate(`/more/${heading}?type=${type}`);
  };
  if (watchlist && !data?.shows) return <></>;
  return (
    <div className="tray">
      <div className="wraptrayHeadingMore">
        <h3 className="trayheading">{heading}</h3>
        <button
          onClick={handleViewAll}
          className="viewAllBtn"
          style={{ paddingRight: "10px", cursor: "pointer" }}
        >
          {"View All >"}
        </button>
      </div>
      <Carousel responsive={responsive}>
        {(watchlist ? data?.shows : data)?.map((movie) => (
          <Card key={movie._id} {...movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default Tray;

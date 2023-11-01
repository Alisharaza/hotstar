import React, { Fragment, useEffect } from "react";
import "../Style/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useGetRequest } from "../Hooks/useGetRequest";
import { BsFillPlayFill, BsPlus } from "react-icons/bs";
const HeroCarousel = () => {
  const { data, isLoading, isError, get } = useGetRequest();
  useEffect(() => {
    get("/ott/show");
  }, []);

  return (
    <>
      {data.length ? (
        <Carousel thumbWidth={80} infiniteLoop={true} showIndicators={false}>
          {data?.map((movie) => (
            <div
              key={movie._id}
              className="mainSlider"
              style={{
                background: `url(${movie.thumbnail})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `top`,
                backgroundSize: `cover`,
              }}
            >
              <img src={movie.thumbnail} alt="jjj" />
              <div className="overlay"></div>
              <div className="leftSide">
                <div>
                  <h1> {movie.title}</h1>
                  <div className="listDetails">
                    <ul>
                      {movie?.cast?.map((castName, i) => (
                        <Fragment key={i}>
                          <li>{castName}</li>
                          <div className="dot"></div>
                        </Fragment>
                      ))}
                      <li>
                        <button>U/A 16+</button>
                      </li>
                    </ul>
                  </div>
                  <div className="title">{movie.description}</div>
                  <ul className="language">
                    <button>
                      Hindi <span>Original</span>
                    </button>
                    <li>Telugu</li>
                    <li>Tamil</li>
                    <li>Bengali</li>
                  </ul>
                  <div className="btnDetains">
                    <button className="watchBtn">
                      <BsFillPlayFill className="playIcon" />
                      <span> Watch Now</span>
                    </button>
                    <button className="watchList">
                      <BsPlus className="playIcon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <></>
      )}
    </>
  );
};
export default HeroCarousel;

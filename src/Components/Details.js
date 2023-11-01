import React, { Fragment, useState } from "react";
import { BsFillPlayFill, BsPlus } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import "../Style/carousel.css";
import { useGetRequest } from "../Hooks/useGetRequest";
import { Link } from "react-router-dom";
const Details = ({ movie }) => {
  console.log(movie);
  const { _id } = movie;
  const { patch } = useGetRequest();
  const [isAdded, setIsAdded] = useState(false);
  const [isMoviePlay, setIsMoviePaly] = useState(false);
  const addToWatchlist = (item) => {
    patch(`/ott/watchlist/like`, { showId: _id });
    setIsAdded(!isAdded);
  };
  return (
    <>
      <div
        key={movie._id}
        className="mainSlider"
        style={{
          background: `url(${movie.thumbnail})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `top`,
          backgroundSize: `cover`,
          height: "100vh",
        }}
      >
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
            <div className="language">
              <button>
                Hindi <span>Original</span>
              </button>
              <li>Telugu</li>
              <li>Tamil</li>
              <li>Bengali</li>
            </div>
            <div className="btnDetains">
              <Link to={`/moviePlayPage/${_id}`}>
                <button
                  className="watchBtn"
                  onClick={() => setIsMoviePaly(true)}
                >
                  <BsFillPlayFill className="playIcon" />
                  <span> Watch Now</span>
                </button>
              </Link>

              <button className="watchListBtn1" onClick={addToWatchlist}>
                <span>
                  {isAdded ? (
                    <BsCheck className="cardicon" />
                  ) : (
                    <BsPlus className="cardicon" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

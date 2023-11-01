import React, { useState } from "react";
import "../Style/card.css";
import { BsFillPlayFill } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

import { BsCheck } from "react-icons/bs";
import { useGetRequest } from "../Hooks/useGetRequest";

const Card = ({ thumbnail, description, _id }) => {
  const { patch } = useGetRequest();
  const [isAddeds, setIsAddeds] = useState(false);
  const [isMoviePlays, setIsMoviePalys] = useState(false);
  const addToWatchlist = (item) => {
    patch(`/ott/watchlist/like`, { showId: _id });
    setIsAddeds(!isAddeds);
  };
  return (
    <div className="cardContainer">
      <div className="imagDetails">
        <img src={thumbnail} alt="" />
      </div>
      <div className="hiddingData">
        <div className="cardImage">
          <Link to={`/movieInfo/${_id}`}>
            <img src={thumbnail} alt="" />
          </Link>
        </div>

        <div className="cardDetails">
          <div className="button">
            <Link className="linkBtn" to={`/moviePlayPage/${_id}`}>
              <button
                className="watchNowBtn"
                onClick={() => setIsMoviePalys(true)}
              >
                <BsFillPlayFill className="cardicon" />
                <span>Watch Now</span>
              </button>
            </Link>
            <button className="watchListBtn" onClick={addToWatchlist}>
              <span>
                {isAddeds ? (
                  <BsCheck className="cardicon" />
                ) : (
                  <BsPlus className="cardicon" />
                )}
              </span>
            </button>
          </div>
          <div className="information">
            <ul className="info">
              <li className="infoItem">
                2023<div className="dot"></div>
              </li>
              <li className="infoItem">
                1session <div className="dot"></div>
              </li>
              <li className="infoItem">
                7language <div className="dot"></div>
              </li>
              <li className="infoItem">U/A 7+ </li>
            </ul>
          </div>
          <div className="paraInfo">
            <p>
              {description}
              {description}
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

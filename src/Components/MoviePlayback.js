import React from "react";

const MoviePlayback = ({ title, video_url }) => {
  return (
    <>
      <div className="movieTitle">{title}</div>
      <video controls width="640" height="360">
        <source src={video_url} type="video/mp4" />
      </video>
    </>
  );
};

export default MoviePlayback;

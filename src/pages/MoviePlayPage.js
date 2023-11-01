import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/movieplaypage.css";

const MoviePlayPage = () => {
  const [showMovie, setShowMovie] = useState(null);
  const { id } = useParams(); // Replace with your actual projectId
  const projectId = "rhkp3a2kszth"; // Replace with your actual projectId
  useEffect(() => {
    // Define the URL and headers
    const url = `https://academics.newtonschool.co/api/v1/ott/show/${id}`;
    const headers = {
      projectId,
    };
    fetch(url, { headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setShowMovie(data?.data);
      })
      .catch((error) => {
        console.error("Error fetching show data:", error);
        // Handle the error in your application
      });
  }, [id]);
  return (
    <div>
      {showMovie ? (
        <div className="movieHeading">
          <h1>{showMovie.title}</h1>
          <div
            className="movoieContainer"
            style={{ width: "100vw", height: "100vh", background: "black" }}
          >
            <video controls className="moviePaly">
              <source src={showMovie.video_url} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : (
        <p>Loading show data...</p>
      )}
    </div>
  );
};

export default MoviePlayPage;

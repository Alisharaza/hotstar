import React, { useEffect, useState } from "react";
import Details from "./Details";
import { useParams } from "react-router-dom";
import Tray from "./Tray";

const MovieInfo = () => {
  const { id } = useParams();
  const projectId = "rhkp3a2kszth"; // Replace with your actual projectId
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    // Define the URL and headers
    const url = `https://academics.newtonschool.co/api/v1/ott/show/${id}`;
    const headers = {
      projectId,
    };

    // Fetch show data when the component mounts
    fetch(url, { headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setShowData(data?.data);
      })
      .catch((error) => {
        console.error("Error fetching show data:", error);
        // Handle the error in your application
      });
  }, [id]);

  return (
    <>
      <div>
        {showData ? (
          <div>
            <Details movie={showData} />
            {/* Render other show details here */}
            <Tray heading={"More Like This"} type={showData.type} page={1} />
          </div>
        ) : (
          <p>Loading show data...</p>
        )}
      </div>
    </>
  );
};
export default MovieInfo;

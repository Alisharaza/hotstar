import React from "react";
// import { useGetRequest } from "./Hooks/useGetRequest";
import "../Style/home.css";
import HeroCarousel from "../Components/Carousel";
import Tray from "../Components/Tray";
import "../Style/tray.css";

function Movies() {
  return (
    <>
      <HeroCarousel />
      <Tray heading={"Action Movies"} type={"movie"} page={1} />
      <Tray heading={"Drama Movies"} type={"movie"} page={2} />
      <Tray heading={"Horror Movies"} type={"movie"} page={3} />
      <Tray heading={"Popular Movies"} type={"movie"} page={4} />
      <Tray heading={"Superhero Movies"} type={"movie"} page={5} />
      <Tray heading={"Romance Movies"} type={"movie"} page={6} />
    </>
  );
}

export default Movies;

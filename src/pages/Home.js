import React from "react";
// import { useGetRequest } from "./Hooks/useGetRequest";
import "../Style/home.css";
import HeroCarousel from "../Components/Carousel";
import Tray from "../Components/Tray";

function Home() {
  return (
    <>
      <HeroCarousel />
      <Tray heading={"Latest Releases"} type={"movie"} page={1} />
      <Tray heading={"Free - Newly Added"} type={"movie"} page={2} />
      <Tray heading={"Popular Shows"} type={"tv show"} page={1} />
      <Tray heading={"Popular Movies"} type={"movie"} page={3} />
      <Tray heading={"Coming Soon"} type={"movie"} page={4} />
      <Tray heading={"Quix Shows"} type={"tv show"} page={2} />
    </>
  );
}

export default Home;

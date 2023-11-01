import React from "react";
// import { useGetRequest } from "./Hooks/useGetRequest";
import "../Style/home.css";
import HeroCarousel from "../Components/Carousel";
import Tray from "../Components/Tray";
import "../Style/tray.css";

function Tv() {
  return (
    <>
      <HeroCarousel />
      <Tray heading={"Latest Releases"} type={"tv show"} page={1} />
      <Tray heading={"Free - Newly Added"} type={"tv show"} page={2} />
      <Tray heading={"Popular Shows"} type={"tv show"} page={3} />
      <Tray heading={"Popular Movies"} type={"tv show"} page={4} />
      <Tray heading={"Coming Soon"} type={"tv show"} page={5} />
      <Tray heading={"Quix Shows"} type={"tv show"} page={6} />
    </>
  );
}

export default Tv;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MySpace from "./pages/mySpace";
import Layout from "./Components/Layout";
import Search from "./pages/Search";
import Tv from "./pages/Tv";
import Movies from "./pages/Movies";
import MovieInfo from "./Components/MovieInfo";
import MoviePlayPage from "./pages/MoviePlayPage";
import Pagination from "./Components/Pagination";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/myspace" element={<MySpace />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/sports" element={<MySpace />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movieInfo/:id" element={<MovieInfo />} />
          <Route path="/pagination/:id" element={<Pagination />} />
        </Route>
        <Route path="/moviePlayPage/:id" element={<MoviePlayPage />} />
      </Routes>
    </Router>
  );
}
export default App;

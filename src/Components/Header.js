import React, { useState } from "react";
import "../Style/header.css";
import { CgProfile } from "react-icons/cg";
import { RiMovie2Fill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { RiMovie2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiTelevisionSimpleFill } from "react-icons/pi";

import { MdSportsBaseball } from "react-icons/md";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="nav">
      <div className="logoContainer">
        <img className="img" src="./images/logo.svg" alt="logo" />
        {/* <button className="subscribeBtn">Subscribe ></button> */}
      </div>

      <div className="nav-menu">
        <NavLink to={"/myspace"}>
          <div className="navItemWrapper">
            <div className={"navItem"}>
              <div className="icon">
                <CgProfile />
              </div>
              <span className="navTitle">My Space</span>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/search"}>
          <div className="navItemWrapper">
            <div className={`navItem`}>
              <div className="icon">
                <FiSearch />
              </div>
              <span className="navTitle">Search</span>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/"}>
          <div className="navItemWrapper">
            <div className={`navItem`}>
              <div className="icon">
                <GoHome className="outlineIcon" />
                <GoHomeFill className="fillIcon" />
              </div>
              <span className="navTitle">Home</span>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/tv"}>
          <div className="navItemWrapper">
            <div className={`navItem`}>
              <div className="icon">
                <PiTelevisionSimpleBold className="outlineIcon" />
                <PiTelevisionSimpleFill className="fillIcon" />
              </div>
              <span className="navTitle">TV</span>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/movies"}>
          <div className="navItemWrapper">
            <div className={`navItem`}>
              <div className="icon">
                <RiMovie2Line className="outlineIcon" />
                <RiMovie2Fill className="fillIcon" />
              </div>
              <span className="navTitle">Movies</span>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/sports"}>
          <div className="navItemWrapper">
            <div className={`navItem`}>
              <div className="icon">
                <MdOutlineSportsBaseball className="outlineIcon" />
                <MdSportsBaseball className="fillIcon" />
              </div>
              <span className="navTitle">Sports</span>
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;

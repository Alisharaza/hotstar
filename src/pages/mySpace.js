import React, { useState } from "react";
import "../Style/myspace.css";
import { AiFillQuestionCircle } from "react-icons/ai";
import Login from "../Components/Login";
import Portal from "../Components/portal";
import SignUp from "../Components/SignUp";
import Profile from "../Components/Profile";
import AddFavourite from "../Components/AddFavourite";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Store/Slices/AuthSlice";
function MySpace() {
  const [showModal, setShowModal] = useState(false);
  const [modalPage, setModalPage] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.stopProgation) e.stopProgation();
    document.documentElement.style.overflow = "hidden";
    setShowModal(true);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const onModalClose = (e) => {
    document.documentElement.style.overflow = "";
    setShowModal(false);
  };
  return (
    <>
      <div className="mySpaceContainer">
        {isAuthenticated ? (
          <div className="authenticatedWrapper">
            <div className="logoutBtnWrapper">
              <button className="loginBtn logoutBtn" onClick={handleLogout}>
                Logout
              </button>
            </div>
            <Profile />
            <AddFavourite />
          </div>
        ) : (
          <div className="mainSpace">
            <div className="topSpace">
              <a
                href="https://help.hotstar.com/in/en/support/home"
                target="_blank"
                rel="noreferrer noopener"
                className="spaceBtn"
              >
                <AiFillQuestionCircle />
                <span>Help & Support</span>
              </a>
            </div>
            <div className="midSpace">
              <img
                src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/feature/myspace/my_space_login_in.png"
                alt=""
              />
              <h1>Login to Disney + Hotstar</h1>
              <p>
                Start watching from where you left off, personalise for kids and
                more
              </p>
              <div className="logButton">
                <button className="loginBtn" onClick={handleClick}>
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {showModal && (
        <Portal onClose={onModalClose}>
          {modalPage ? (
            <SignUp setModalPage={setModalPage} onClose={onModalClose} />
          ) : (
            <Login setModalPage={setModalPage} onClose={onModalClose} />
          )}
        </Portal>
      )}
    </>
  );
}

export default MySpace;

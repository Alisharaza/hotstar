import React from "react";
import "../Style/profile.css";
import { BsPlus } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="wrapProfileEdit">
        <h3 className="mySpaceHeading">Profiles</h3>
        <div className="edit">
          <AiFillEdit />
          <h3>Edit</h3>
        </div>
      </div>
      <div className="profileC">
        <div className="profile">
          <img src="/images/profile.png" alt="profile" />
          <div className="profileAdd">
            <span>
              <BsPlus className="profileAd" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import Tray from "./Tray";
const AddFavourite = () => {
  return (
    <div>
      <div>
        <Tray watchlist={true} heading={"Watchlist"} type={"movie"} page={1} />
      </div>
    </div>
  );
};

export default AddFavourite;

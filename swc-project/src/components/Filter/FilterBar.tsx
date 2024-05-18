import React, { useState, useRef } from "react";
import "./filterbar.css";
import FilterCard from "./FilterCard";

export default function FilterBar() {
    const [popUp, setPopUp] = useState<boolean>(false)
    const handlePopUp = () => {[
        setPopUp(!popUp)
    ]};
  return (
    <>
      <div className="fltr-bar" onClick={handlePopUp}>
        <button>Filter</button>
      </div>
      {popUp ? <FilterCard /> : <></>}
    </>
  );
}

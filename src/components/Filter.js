import React from "react";
import "../styles/Filter.css";

const Filter = ({ onFilterChange }) => {
  return (
    <div id="form">
      <h2>Beer and Food Match Generator</h2>
      <p>
        {" "}
        <b>Check some beer ideas for your meals! Refresh for more!</b>
      </p>
      <p> Filter by ABV (alcohol by volume):</p>
      <form>
        <div className="option">
          <input
            type="radio"
            id="inputbox"
            name="alcohol"
            value="abv_lt=5"
            onChange={(e) => onFilterChange(e)}
          ></input>
          <label className="labelCheckbox" for="alcohol">
            {" "}
            Less than 5%
          </label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="inputbox"
            name="alcohol"
            value="abv_gt=5&abv_lt=6"
            onChange={(e) => onFilterChange(e)}
          ></input>
          <label className="labelCheckbox" for="alcohol">
            {" "}
            5% - 6%
          </label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="inputbox"
            name="alcohol"
            value="abv_gt=5"
            onChange={(e) => onFilterChange(e)}
          ></input>
          <label className="labelCheckbox" for="alcohol">
            {" "}
            More than 6%
          </label>
        </div>
      </form>
    </div>
  );
};

export default Filter;

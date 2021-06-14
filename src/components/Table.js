import React, { useState } from "react";
import data from "../data.json";
import TableRow from "./TableRow";
import { sortingByNestingLevels } from "../features/sortingByNestingLevels";

const Table = () => {
  const [checked, setChecked] = useState(false);
  const sortByActive = (data) => data.filter((el) => el.isActive);

  const sortedArr = !checked
    ? sortingByNestingLevels(data)
    : sortingByNestingLevels(sortByActive(data));

  return (
    <>
      <div className="controls">
        <input
          id="isActive"
          name="isActive"
          type="checkbox"
          value="false"
          checked={checked}
          onChange={() => {
            setChecked((prev) => !prev);
          }}
        />
        <label htmlFor="isActive">isActive</label>
        isActive
      </div>
      <div style={{ width: "100%" }}>
        <div className="tableRow tableHead">
          {Object.keys(data[0]).map((el) => (
            <span key={el}>{el}</span>
          ))}
        </div>
        {sortedArr.map((el) => (
          <TableRow key={el.id} el={el} />
        ))}
      </div>
    </>
  );
};

export default Table;

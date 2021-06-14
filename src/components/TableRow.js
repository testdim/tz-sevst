import React, { useState } from "react";
import PadRow from "./PadRow";

const TableRow = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className="tableRow"
        style={
          el.children.length
            ? { backgroundColor: "rgb(79, 253, 253)", cursor: "pointer" }
            : { backgroundColor: "rgb(79, 253, 253)" }
        }
        onClick={el.children.length ? handler : null}
      >
        <span>{el.id}</span>
        <span>{el.parentId}</span>
        <span>{el.isActive ? "active" : "not active"}</span>
        <span>{el.balance}</span>
        <span>{el.name}</span>
        <span>{el.email}</span>
        <span>{el.children.length}</span>
      </div>
      {isOpen && el.children.map((el) => <PadRow key={el.id} el={el} />)}
    </>
  );
};

export default TableRow;

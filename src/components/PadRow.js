import React, { useState } from "react";

const PadRow = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handler = () => {
    setIsOpen((prev) => !prev);
    console.log(el.children);
  };

  return (
    <div>
      <div
        className="tableRow"
        style={
          el.children?.length
            ? { backgroundColor: "rgb(182, 255, 255)", cursor: "pointer" }
            : { backgroundColor: "rgb(230, 255, 255)" }
        }
        onClick={el.children?.length ? handler : null}
      >
        <span>{el.id}</span>
        <span>{el.parentId}</span>
        <span>{el.isActive ? "active" : "not active"}</span>
        <span>{el.balance}</span>
        <span>{el.name}</span>
        <span>{el.email}</span>
        <span>{el.children?.length}</span>
      </div>
      {isOpen && el.children.map((el) => <PadRow key={el.id} el={el} />)}
    </div>
  );
};

export default PadRow;

import React, { useState } from "react";
import data from "../data.json";

const Table = () => {
  const [checked, setChecked] = useState(true);
  const sortByActive = (data) => data.filter((el) => el.isActive);

  const sortingByNestingLevels = (data) => {
    // функции сортировки по уровням вложенности
    const arrayOfIdElements = (arr) => arr.map((el) => el.id);
    const arrayOfElementsOfThisLevel = (arr, arrId) =>
      arr.filter((el) => !arrId.includes(el.parentId));
    const arrayOfUnsortedElements = (arr, arrId) =>
      arr.filter((el) => arrId.includes(el.parentId));

    // объект с уровнями данных
    const levels = {};
    // количество уровней вложенности 0,1,2,3
    let levelNumber = 0;

    // сортировка по уровням с рекурсией
    const sortByLevel = (data) => {
      const ids = arrayOfIdElements(data);
      const level = arrayOfElementsOfThisLevel(data, ids);
      levels[levelNumber] = level;
      const restArr = arrayOfUnsortedElements(data, ids);

      // если есть что сортировать, сортируем дальше
      if (restArr.length) {
        levelNumber += 1;
        sortByLevel(restArr);
      } else {
        return;
      }
    };

    sortByLevel(data);
    // теперь в объекте levels лежат пронумерованные уровни данных

    // идём сверху вниз
    var arrayWithNestedChildren = [];

    for (let i = 0; i < levelNumber; i++) {
      // console.log('lev', i+1);
      levels[i].forEach((el) => {
        let childs = levels[i + 1].filter((chEl) => chEl.parentId == el.id);
        el.children = childs;
        // console.log(el);
      });
      // console.log(levels[i]);
      // arrayWithNestedChildren.push(el)
    }
    return (arrayWithNestedChildren = levels[0]);
    console.log(JSON.stringify(arrayWithNestedChildren, null, "\t"));
  };

  const sortedArr = !checked
    ? sortingByNestingLevels(data)
    : sortingByNestingLevels(sortByActive(data));

  return (
    <>
      <p>
        <input
          name="isActive"
          type="checkbox"
          value="false"
          checked={checked}
          onChange={() => {
            setChecked((prev) => !prev);
          }}
        />
        isActive
      </p>
      <table width="100%" border="1" cellPadding="4" cellSpacing="0">
        <thead>
          <tr>
            {Object.keys(data[0]).map((th) => (
              <th key={th}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedArr.map((el) => (
            <tr
              key={el.id}
              onClick={el.children.length ? () => console.log(el.id) : null}
              style={
                el.children.length
                  ? { backgroundColor: "#91F4DC", cursor: "pointer" }
                  : null
              }
            >
              <td>{el.id}</td>
              <td>{el.parentId}</td>
              <td>{el.isActive ? "active" : "not active"}</td>
              <td>{el.balance}</td>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.children.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

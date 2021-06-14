// преобразование массива данных
export const sortingByNestingLevels = (data) => {
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
    levels[i].forEach((el) => {
      let childs = levels[i + 1].filter((chEl) => chEl.parentId == el.id);
      el.children = childs;
    });
  }
  return (arrayWithNestedChildren = levels[0]);
  // console.log(JSON.stringify(arrayWithNestedChildren, null, "\t"));
};

import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Задание: Исходя из приложенных данных(прикреплены к письму) постройте
          таблицу с возможностью раскрытия строк, имеющих дочерние элементы, а
          также фильтрацией по свойству &quot;isActive&quot;. Порядок элементов
          в данных не гарантирован. Для решения задачи запрещено использовать
          готовые библиотеки или компоненты Grid View.
        </p>
        <ol>
          <li>
            + Первый вариант с reduce но только для данных с уровнем вложения не
            больше одного.
          </li>
          <li>
            + Второй вариант сортировать элементы по уровням вложенности и
            собрать результат проходом &quot;снизу вверх&quot;
          </li>
          <li>
            + Третий вариант сортировать элементы по уровням вложенности и
            собрать результат проходом &quot;сверх вниз&quot;
          </li>
          <li>
            Четвёртый вариант, попробовать отсортировать за счёт особенностей
            Set и Map
          </li>
          <li>
            Пятый вариант, посмотреть сортировку графов, но как сделать графы из
            объекта?
          </li>
        </ol>
      </header>
      <main className="main">
        <Table />
      </main>
    </div>
  );
}

export default App;

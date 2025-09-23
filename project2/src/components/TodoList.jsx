import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useMemo, useState } from "react";

export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const analyzeTodo = useMemo(() => {
    // console.log("analyzeTodo 함수 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    // console.log("counts:", { totalCount, doneCount, notDoneCount });
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  const getSearchResult = () => {
    return search === ""
      ? todos
      : todos.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총 개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        className="searchbar"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => {
          return (
            <TodoItem
              key={it.id}
              {...it}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

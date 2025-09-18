import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
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
      <input
        className="searchbar"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => {
          console.log(it);
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

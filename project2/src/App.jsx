import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";

const mockTodos = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "점심 먹기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    createDate: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "저녁 먹기",
    createDate: new Date().getTime(),
  },
];
function App() {
  const [todos, setTodos] = useState(mockTodos);
  const idRef = useRef(4);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList />
    </div>
  );
}

export default App;

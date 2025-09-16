import "./TodoEditor.css";
import { useState, useRef } from "react";

export default function TodoEditor({ onCreate }) {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 🖊️</h4>
      <div className="editor_wrapper">
        <input
          placeholder="새로운 Todo..."
          value={content}
          onChange={onChangeContent}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}

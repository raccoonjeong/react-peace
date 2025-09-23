import "./Header.css";
import { memo } from "react";

export default memo(function Header() {
  console.log("Header 렌더링");
  return (
    <div className="header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
});

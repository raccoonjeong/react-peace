import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useEffect, useState, useRef, use } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const didMountRef = useRef(false);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleSetText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("update", count, text);
  }, [count, text]);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      // true됐으면
      console.log("컴포넌트 업데이트!");
    }
  });
  useEffect(() => {
    console.log("컴포넌트 마운트!");
  }, []);

  useEffect(() => {
    // const intervalID = setInterval(() => {
    //   console.log("깜빡");
    // }, 1000);
    // return () => {
    //   console.log("클린업!");
    //   clearInterval(intervalID);
    // };
  });

  return (
    <div className="App">
      <h1>Simple Count</h1>
      <section>
        <input value={text} onChange={handleSetText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;

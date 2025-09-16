import { useEffect } from "react";

export default function Even() {
  useEffect(() => {
    console.log("짝수 컴포넌트 마운트!");
    return () => {
      console.log("짝수 컴포넌트 언마운트!");
    };
  }, []);
  return <div>현재 카운트는 짝수임당</div>;
}

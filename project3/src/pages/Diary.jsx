import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Diary 페이지입니다.</h1>
      <p>일기 ID: {id}</p>
    </div>
  );
};
export default Diary;

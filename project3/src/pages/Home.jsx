import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";

const Home = () => {
  return (
    <div>
      <Header
        title={"Home"}
        leftChild={
          <Button
            text={"긍정 버튼"}
            type={"positive"}
            onClick={() => alert("positive button")}
          />
        }
        rightChild={
          <Button
            text={"부정 버튼"}
            type={"negative"}
            onClick={() => alert("negative button")}
          />
        }
      />
      <Editor onSubmit={() => alert("작성 완료 버튼을 클릭했음")} />
    </div>
  );
};
export default Home;

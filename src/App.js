import Video from "./Components/Video";
import "./App.css";

function App() {
  return (
    <div className={"App"}>
      <div>Videos</div>
      <Video
        title={"React Tutorial 2"}
        views={"10K"}
        channel={"Subham Chowdhury"}
        time={"1 days ago"}
      ></Video>
      <Video
        title={"React Tutorial 2"}
        views={"200K"}
        channel={"Subham Chowdhury"}
        time={"2 days ago"}
      ></Video>
    </div>
  );
}

//Always use Uppercase for component names
export default App;

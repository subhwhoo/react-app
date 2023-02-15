import Video from "./Components/Video";
import "./App.css";

function App() {
  return (
    <div className={"App"}>
      <div className={"name"}>Videos</div>
      <Video
        title={"React Tutorial 1"}
        views={"10K"}
        channel={"Subham Chowdhury"}
        time={"1 days ago"}
        verified={true}
      ></Video>
      <Video
        title={"React Tutorial 2"}
        views={"200K"}
        channel={"Subham Chowdhury"}
        time={"2 days ago"}
        verified={false}
      ></Video>
      <Video
        title={"React Tutorial 2"}
        views={"21M"}
        channel={"Subham Chowdhury"}
        time={"1 Year ago"}
        verified={true}
      ></Video>
    </div>
  );
}

//Always use Uppercase for component names
export default App;

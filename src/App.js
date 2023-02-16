import Video from "./Components/Video";
import "./App.css";
import videos from "./data/data";

function App() {
  return (
    <div className={"App"}>
      <div className={"name"}>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          channel={video.channel}
          time={video.time}
          verified={video.verified}
          id={video.id}
        ></Video>
      ))}
    </div>
  );
}

//Always use Uppercase for component names
export default App;

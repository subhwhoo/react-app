import Video from "./Components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./Components/PlayButton";
import { clear } from "@testing-library/user-event/dist/clear";

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
        >
          <PlayButton
            onPlay={() => console.log("Playing ", video.title)}
            onPause={() => console.log("Paused ", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        {/*<PlayButton*/}
        {/*  message={"Play Button Clicked"}*/}
        {/*  onPlay={() => alert("Play button")}*/}
        {/*  onPause={() => alert("Pause button")}*/}
        {/*>*/}
        {/*  Play*/}
        {/*</PlayButton>*/}

        {/*<PlayButton*/}
        {/*  message={"Pause Button Clicked"}*/}
        {/*  onClick={() => alert("Pause button")}*/}
        {/*>*/}
        {/*  Pause*/}
        {/*</PlayButton>*/}
      </div>
    </div>
  );
}

//Always use Uppercase for component names
export default App;

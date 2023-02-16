import Video from "./Components/Video";
import "./App.css";
import PlayButton from "./Components/PlayButton";
import Counter from "./Components/Counter";
import { useState } from "react";
import videoDB from "./data/data";

function App() {
  const [videos, setVideos] = useState(videoDB);
  return (
    <div className={"App"} onClick={() => console.log("App Div")}>
      <div className={"name"}>
        <button
          onClick={() => {
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "Demo Tutorial 5",
                views: "50K",
                channel: "Subham Chowdhury",
                time: "5 days ago",
                verified: true,
              },
            ]);
          }}
        >
          Add Videos
        </button>
      </div>
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
      <Counter></Counter>
    </div>
  );
}

//Always use Uppercase for component names
export default App;

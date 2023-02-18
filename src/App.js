import Video from "./Components/Video";
import "./App.css";
import PlayButton from "./Components/PlayButton";
import { useState } from "react";
import videoDB from "./data/data";
import AddVideo from "./Components/AddVideo";

function App() {
  const [videos, setVideos] = useState(videoDB);
  return (
    <div className={"App"} onClick={() => console.log("App Div")}>
      <AddVideo></AddVideo>
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
    </div>
  );
}

export default App;

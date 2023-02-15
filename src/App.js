import Video from "./Components/Video";
import "./App.css";

function App() {
  let videos = [
    {
      id: 1,
      title: "React Tutorial 1",
      views: "10K",
      channel: "Subham Chowdhury",
      time: "1 days ago",
      verified: true,
    },
    {
      id: 2,
      title: "React Tutorial 2",
      views: "20K",
      channel: "Subham Chowdhury",
      time: "2 days ago",
      verified: true,
    },
    {
      id: 3,
      title: "React Tutorial 3",
      views: "30K",
      channel: "Subham Chowdhury",
      time: "3 days ago",
      verified: true,
    },
    {
      id: 4,
      title: "React Tutorial 4",
      views: "40K",
      channel: "Subham Chowdhury",
      time: "4 days ago",
      verified: true,
    },
  ];
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

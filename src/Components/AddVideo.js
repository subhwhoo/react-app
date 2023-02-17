import "./AddVideo.css";
import { useState } from "react";

export default function AddVideo() {
  const [video, setVideo] = useState({
    time: "5 days ago",
    channel: "Subham Chowdhury",
    verified: true,
  });

  function handleSubmit() {}

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  return (
    <form>
      <input
        type="text"
        name={"title"}
        onChange={handleChange}
        placeholder={"Title"}
      />
      <input
        type="text"
        name={"views"}
        onChange={handleChange}
        placeholder={"Views"}
      />
      <button
        onClick={handleSubmit}
        // onClick={() => {
        //   setVideos([
        //     ...videos,
        //     {
        //       id: videos.length + 1,
        //       title: "Demo Tutorial 5",
        //       views: "50K",
        //       channel: "Subham Chowdhury",
        //       time: "5 days ago",
        //       verified: true,
        //     },
        //   ]);
        // }}
      >
        Add Videos
      </button>
    </form>
  );
}

import "./playButton.css";
import { useState } from "react";

export default function PlayButton({ message, children, onPlay, onPause }) {
  // let playing = false; //Don't use this approach in real world
  const [playing, setPlaying] = useState(false); //This is the correct approach

  function handleClick(e) {
    e.stopPropagation(); //This will stop the event from bubbling up to the parent
    if (playing) {
      onPlay();
    } else {
      onPause();
    }
    setPlaying(!playing);
  }

  return (
    <button onClick={handleClick}>
      {children}:{playing ? "▶️" : "⏸️"}
    </button>
  );
  //Event handler is a function that is called when an event occurs
}

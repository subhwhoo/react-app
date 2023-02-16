import "./playButton.css";

export default function PlayButton({ message, children, onPlay, onPause }) {
  let playing = false; //Don't use this approach in real world

  function handleClick(e) {
    e.stopPropagation(); //This will stop the event from bubbling up to the parent
    e.preventDefault(); //This will stop the default behaviour of the event
    if (playing) {
      onPlay();
    } else {
      onPause();
    }
    playing = !playing;
  }

  return (
    <button onClick={handleClick}>
      {children}:{playing ? ">" : "||"}
    </button>
  );
  //Event handler is a function that is called when an event occurs
}

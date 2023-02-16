import "./playButton.css";

export default function PlayButton({ message, children, onClick }) {
  function handleClick() {
    onClick();
  }

  return <button onClick={handleClick}>{children}</button>;
  //Event handler is a function that is called when an event occurs
}

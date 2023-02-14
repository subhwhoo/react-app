import Video from "./Components/Video";

function App() {
  return (
    <div>
      <div>Hello World!</div>
      <Video bgColor={"red"} title={"React Tutorial 2"}></Video>
      <Video bgColor={"yellow"} title={"React Tutorial 2"}></Video>
    </div>
  );
}

//Always use Uppercase for component names
export default App;

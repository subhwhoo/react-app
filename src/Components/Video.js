import "./Video.css";

export default function Video({ title, channel, views, time }) {
  return (
    <div className={"container"}>
      <div className="pic">
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      </div>
      <div className="title">title {title}</div>
      <div className="channel">Channel {channel}</div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
    </div>
  );
}

//Always use Uppercase for component names

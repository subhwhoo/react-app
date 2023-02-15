import "./Video.css";

export default function Video({ title, channel, views, time, verified }) {
  //   Conditional Rendering
  // if (verified) {
  //   channelJSX = <div className="channel">{channel} ✅</div>;
  // } else {
  //   channelJSX = <div className="channel">{channel}</div>;
  // }

  return (
    <div className={"container"}>
      <div className="pic">
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      {/*<div className="channel">*/}
      {/*  {channel} {verified ? "✅" : null}*/}
      {/*</div>*/}
      <div className="channel">
        {channel}{" "}
        {verified && "✅" /* This is a short hand for the above code */}
      </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
    </div>
  );
}

//Always use Uppercase for component names

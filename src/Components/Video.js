import "./Video.css";

export default function Video({ title, id, channel, views, time, verified }) {
  //   Conditional Rendering
  // if (verified) {
  //   channelJSX = <div className="channel">{channel} ✅</div>;
  // } else {
  //   channelJSX = <div className="channel">{channel}</div>;
  // }

  return (
    <div className={"container"}>
      <div className="pic">
        <img
          src={`https://picsum.photos/id/${id}/160/90`}
          alt="Katherine Johnson"
        />
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

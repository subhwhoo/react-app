// import "./Video.css";

export default function Video({ title, bgColor }) {
  let name = "Subham Chowdhury";
  let bg = "dark";
  return (
    <>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      <div style={{ backgroundColor: bgColor }}>
        {title} by {name}
      </div>
    </> //fragment
  );
}

//Always use Uppercase for component names

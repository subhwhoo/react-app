export default function AddVideo() {
  return (
    <form>
      <input type="text" />
      <input type="text" />
      <button
        onClick={() => {
          // setVideos([
          //   ...videos,
          //   {
          //     id: videos.length + 1,
          //     title: "Demo Tutorial 5",
          //     views: "50K",
          //     channel: "Subham Chowdhury",
          //     time: "5 days ago",
          //     verified: true,
          //   },
          // ]);
        }}
      >
        Add Videos
      </button>
    </form>
  );
}

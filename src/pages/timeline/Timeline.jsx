import { useContext, useState } from "react";
import CallCard from "../../components/timelineList/CallCard";
import MessageCard from "../../components/timelineList/MessageCard";
import VideoCard from "../../components/timelineList/VideoCard";
import { FriendContext } from "../../context/FriendProvider";

const Timeline = () => {
  const [type, setType] = useState("call");
  const [search, setSearch] = useState("");
  const { storedFriendCall, storedFriendMessage, storedFriendVideo } =
    useContext(FriendContext);
  const allData = [
    ...storedFriendCall.map((item) => ({ ...item, type: "call" })),
    ...storedFriendMessage.map((item) => ({ ...item, type: "text" })),
    ...storedFriendVideo.map((item) => ({ ...item, type: "video" })),
  ];
  console.log("timeline", allData);
  const filteredData = allData.filter((item) => {
    const searchText = search.toLowerCase();

    return (
      item.type === type &&
      (item.name.toLowerCase().includes(searchText) ||
        item.message?.toLowerCase().includes(searchText))
    );
  });
  return (
    <div className="container mx-auto min-h-screen text-center">
      <h2 className="text-3xl">Timeline</h2>

      <select
        className="select select-bordered mb-4"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      <div className="flex justify-center w-full">
        <div className="space-y-5 gap-2">
          {filteredData.map((item, index) => {
            if (item.type === "call")
              return <CallCard key={index} call={item} />;

            if (item.type === "text")
              return <MessageCard key={index} message={item} />;

            if (item.type === "video")
              return <VideoCard key={index} video={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

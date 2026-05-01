import CallCard from "../../components/timelineList/CallCard";
import MessageCard from "../../components/timelineList/MessageCard";
import VideoCard from "../../components/timelineList/VideoCard";

const Timeline = () => {
  return (
    <div className="container mx-auto min-h-screen  text-center">
      <h2 className="text-3xl">Timeline</h2>
      <div className="flex justify-center">
        <div className="space-y-5  gap-2">
          <CallCard /> <MessageCard /> <VideoCard />
        </div>
      </div>
    </div>
  );
};

export default Timeline;

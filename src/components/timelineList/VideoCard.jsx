import { useContext } from "react";
import { FriendContext } from "../../context/FriendProvider";

const VideoCard = () => {
  const {
    storedFriendVideo,

    formattedDate,
  } = useContext(FriendContext);
  console.log("storedFriendVideo", storedFriendVideo);

  return (
    <div>
      {storedFriendVideo.map((video, ind) => {
        return (
          <div key={ind}>
            <div className="flex justify-between items-center shadow ">
              <img src={"/camera.png"} alt="" />
              <div>
                {/* {storedFriendCall.length} */}
                <h3>Video with {video.name}</h3>
                <p>{formattedDate}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoCard;

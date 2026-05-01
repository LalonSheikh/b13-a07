import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [storedFriendCall, setStoredFriendCall] = useState([]);
  const [storedFriendMessage, setStoredFriendMessage] = useState([]);
  const [storedFriendVideo, setStoredFriendVideo] = useState([]);

  const handleCall = (currentFriend) => {
    console.log("currentFriend", currentFriend);

    const isCallFriend = storedFriendCall.find(
      (friend) => friend.id === Number(currentFriend.id),
    );
    if (isCallFriend) {
      toast.error(`${currentFriend.name}'s call is already added`);
    } else {
      setStoredFriendCall([...storedFriendCall, currentFriend]);
      toast.success(`${currentFriend.name}'s call is added to timeline`);
    }
  };
  const handleMessage = (currentFriend) => {
    console.log("currentFriend", currentFriend);

    const isCallFriend = storedFriendMessage.find(
      (friend) => friend.id === Number(currentFriend.id),
    );
    if (isCallFriend) {
      toast.error(`${currentFriend.name}'s Message is already added`);
    } else {
      setStoredFriendMessage([...storedFriendMessage, currentFriend]);
      toast.success(`${currentFriend.name}'s Message is added to timeline`);
    }
  };
  const handleVideo = (currentFriend) => {
    console.log("currentFriend", currentFriend);

    const isCallFriend = storedFriendVideo.find(
      (friend) => friend.id === Number(currentFriend.id),
    );
    if (isCallFriend) {
      toast.error(`${currentFriend.name}'s Video is already added`);
    } else {
      setStoredFriendVideo([...storedFriendVideo, currentFriend]);
      toast.success(`${currentFriend.name}'s Video is added to timeline`);
    }
  };
    const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const data = {
    storedFriendCall,
    setStoredFriendCall,
    handleCall,
    handleMessage,
    storedFriendMessage,
    setStoredFriendMessage,
    storedFriendVideo,
    setStoredFriendVideo,
    handleVideo,
    formattedDate,
  };

  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;

import { createContext, useState } from "react";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const data = {
    friends,
    setFriends,
  };

  return (
    <FriendContext.Provider value={{ friends, data, setFriends }}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;

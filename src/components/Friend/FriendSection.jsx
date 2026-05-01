import FriendCard from "./FriendCard";

const FriendSection = ({ friendData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
      {friendData.map((friend) => (
        <FriendCard friend={friend} key={friend.id}></FriendCard>
      ))}
    </div>
  );
};

export default FriendSection;

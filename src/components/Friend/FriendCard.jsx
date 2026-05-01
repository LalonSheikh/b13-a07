const FriendCard = ({ friend }) => {
  let status = "";

  if (friend.status === "almost due") {
    status = "bg-yellow-300";
  } else if (friend.status === "on-track") {
    status = "bg-green-400";
  } else {
    status = "bg-red-300";
  }

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className=" ">
        <img src={friend.picture} alt="Shoes" className="rounded-full w-24" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{friend.name}</h2>
        <p>{friend.days_since_contact}d ago</p>
        <div className="flex gap-4">
          {friend.tags.map((tag) => (
            <p className="bg-green-200 rounded-2xl px-2" key={tag.id}>
              {tag}
            </p>
          ))}
        </div>

        <p className={`px-3 py-1 rounded-xl text-white ${status}`}>
          {friend.status}
        </p>
      </div>
    </div>
  );
};

export default FriendCard;

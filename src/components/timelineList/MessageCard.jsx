import { useContext } from "react";
import { FriendContext } from "../../context/FriendProvider";

const MessageCard = () => {
  const {
    storedFriendMessage,

    formattedDate,
  } = useContext(FriendContext);
  console.log("storedFriendMessage", storedFriendMessage);

  return (
    <div>
      {storedFriendMessage.map((message, ind) => {
        return (
          <div key={ind}>
            <div className="flex justify-between items-center shadow w-full" >
              <img src={'/public/text.png'} alt="" />
              <div>
                {/* {storedFriendCall.length} */}
                <h3>Message with {message.name}</h3>
                <p>{formattedDate}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageCard;

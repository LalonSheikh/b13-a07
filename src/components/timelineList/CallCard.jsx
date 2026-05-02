import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendProvider";

const CallCard = () => {
  const {
    storedFriendCall,

    formattedDate,
  } = useContext(FriendContext);
  console.log("storedFriendCall", storedFriendCall);
  return (
    <div>
      {storedFriendCall.map((call, ind) => {
        return (
          <div key={ind}>
            <div className="flex justify-between items-center shadow ">
              <img src={"/meetup.png"} alt="" />
              <div>
                {/* {storedFriendCall.length} */}
                <h3>Call with {call.name}</h3>
                <p>{formattedDate}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CallCard;

import { useContext } from "react";
import { FiArchive } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { PiVideoCamera } from "react-icons/pi";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import { FriendContext } from "../../context/FriendProvider";

const FriendDetails = () => {
  const { id } = useParams();
  // console.log(id, "params");

  const friends = useLoaderData();
  // console.log(friends, "friends");
  const expectedFriends = friends.find((friend) => friend.id === parseInt(id));
  // console.log("expected Friend", expectedFriends);
  const {
    picture,
    name,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedFriends;

  const { handleCall, handleMessage, handleVideo } = useContext(FriendContext);

  // console.log("friendContext",friendContext)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT PROFILE CARD */}
        <div className="bg-white rounded-xl shadow p-5 space-y-4">
          <div className="flex flex-col items-center text-center">
            <img
              src={picture}
              alt="profile"
              className="w-20 h-20 rounded-full"
            />
            <h2 className="mt-3 font-semibold text-lg">{name} </h2>

            <div className=" gap-2 mt-2">
              <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-full">
                {status}
              </span>
              <span className="px-2 py-1 flex gap-2 text-xs bg-green-100 text-green-600 rounded-full">
                {tags.map((tag, ind) => (
                  <p className="bg-green-200 rounded-2xl px-2" key={ind}>
                    {tag}
                  </p>
                ))}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-3 italic">{bio}</p>
            <p className="text-xs text-gray-400">Preferred: {email}</p>
          </div>

          <div className="space-y-2 pt-4">
            <button className="flex items-center justify-center w-full gap-1 py-2 rounded-lg bg-red-50  hover:bg-red-100">
              <RiNotificationSnoozeLine /> Snooze 2 Weeks
            </button>
            <button className="flex items-center justify-center w-full py-2  gap-1 rounded-lg bg-red-50  hover:bg-red-100">
              <FiArchive />
              Archive
            </button>
            <button className="flex items-center justify-center w-full py-2 gap-1 rounded-lg bg-red-50 text-red-600 hover:bg-red-100">
              <RiDeleteBin6Line />
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow p-4 text-center">
              <p className="text-2xl font-bold text-[#244D3F]">
                {days_since_contact}
              </p>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">
              <p className="text-2xl font-bold text-[#244D3F]">{goal}</p>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">
              <p className="text-lg font-semibold text-[#244D3F]">
                {next_due_date}
              </p>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-[#244D3F]">
                Relationship Goal
              </h3>
              <p className="text-sm text-gray-500">Connect every 30 days</p>
            </div>
            <button className="px-3 py-1 font-bold shadow rounded-lg text-sm hover:bg-gray-100">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleCall(expectedFriends)}
                className="flex flex-col items-center gap-2 p-4  rounded-lg hover:bg-gray-50"
              >
                <span className="text-sm">
                  <MdOutlineWifiCalling3 />
                  Call
                </span>
              </button>

              <button
                onClick={() => handleMessage(expectedFriends)}
                className="flex flex-col items-center gap-2 p-4  rounded-lg hover:bg-gray-50"
              >
                <span className="text-sm">
                  {" "}
                  <LuMessageSquareMore />
                  Text
                </span>
              </button>

              <button onClick={()=>handleVideo(expectedFriends)} className="flex flex-col items-center gap-2 p-4  rounded-lg hover:bg-gray-50">
                <span className="text-sm">
                  <PiVideoCamera className="text-lg" /> Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;

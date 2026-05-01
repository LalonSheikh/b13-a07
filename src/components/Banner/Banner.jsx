import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <div className="text-center ">
        <h2 className="text-4xl">Friends to keep close in your life</h2>
        <p className="pb-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="bg-[#244D3F] btn text-white rounded-sm">
         <FaPlus /> Add a Friend
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="w-42 shadow bg-amber-50 mx-2 p-2 ">
            <h2 className="text-2xl text-[#244d3f] font-bold ">10</h2>
            <p className="text-sm"> Total Friends</p>
          </div>
          <div
            className="w-42 shadow bg-amber-50 mx-2 p-2
          "
          >
            <h2 className="text-2xl text-[#244d3f] font-bold ">3</h2>
            <p className="text-sm">On Track</p>
          </div>
          <div className="w-42 shadow bg-amber-50 mx-2 p-2">
            <h2 className="text-2xl text-[#244d3f] font-bold ">6</h2>
            <p className="text-sm">Need Attention</p>
          </div>
          <div className="w-42 shadow bg-amber-50 mx-2 p-2">
            <h2 className="text-2xl text-[#244d3f] font-bold ">12</h2>
            <p className="text-sm">Interactions This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

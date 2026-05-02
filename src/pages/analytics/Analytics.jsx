import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendProvider";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"];
const Analytics = () => {
  const { storedFriendCall, storedFriendMessage, storedFriendVideo } =
    useContext(FriendContext);

  const timelineData = [
    ...storedFriendCall.map((item) => ({ ...item, type: "call" })),
    ...storedFriendMessage.map((item) => ({ ...item, type: "message" })),
    ...storedFriendVideo.map((item) => ({ ...item, type: "video" })),
  ];
  console.log("timeline", timelineData);

  const getCurrentData = (timelineData) => {
    const counts = timelineData.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts).map(([key, value]) => ({
      name: key.toUpperCase(),
      value: value,
    }));
  };
  const data = getCurrentData(timelineData);

  return (
    <div>
      <div className="flex justify-center mt-10">
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" outerRadius={130} label>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]} 
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Analytics;

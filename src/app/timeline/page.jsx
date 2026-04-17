"use client";

import { useEffect, useState } from "react";
import { FcVideoCall } from "react-icons/fc";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdWifiCalling3 } from "react-icons/md";
import { PiPhoneCallDuotone } from "react-icons/pi";

const TimelinePage = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);

  }, []);

  return (
    <div className="max-w-8xl mx-auto px-6 py-10">
        
      <h1 className="text-4xl font-bold mb-6 ">Timeline</h1>

      <div className="bg-base-100 border-gray-400 mb-3 font-semibold text-gray-600 text-xl flex items-end">
        <h3>Filter</h3>
      </div>

      {timeline.length === 0 ? (
        <p>No interactions yet</p>
      ) : (


        <div>
          {timeline.map((item) => (
           
    <div
        key={item.id}
      className="bg-white p-4 gap-150 rounded shadow-sm flex justify-between items-center mt-3"
    >
      
      
      <div className="flex gap-4 items-center">
    <div className="text-xl text-gray-600 ">
  {item.type === "Call" && <MdWifiCalling3 size={40} />}
  {item.type === "Text" && <HiOutlineChatBubbleBottomCenterText size={40} />}
  {item.type === "Video" && <FcVideoCall size={40} />}
</div>
       <div>
         <p className="font-semibold text-gray-800">
          {item.type} with {item.name}
        </p>
        <p className="text-sm text-gray-500">
          {new Date(item.date).toLocaleString()}
        </p>
       </div>
      </div>

      <span
        className={`text-xs px-3 py-1 rounded-full ${
          item.type === "Call"
            ? "bg-green-100 text-green-700"
            : item.type === "Text"
            ? "bg-blue-100 text-blue-700"
            : "bg-purple-100 text-purple-700"
        }`}
      >
        {item.type}
      </span>
    </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;
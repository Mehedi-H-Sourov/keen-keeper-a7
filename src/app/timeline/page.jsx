"use client";

import { useEffect, useState } from "react";
import { FcVideoCall } from "react-icons/fc";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdWifiCalling3 } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";


const TimelinePage = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);

  }, []);

  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);

  const filteredTimeline = filter === "All" ? timeline : timeline.filter((item) => item.type === filter);

  return (
    <div className="w-10/12 mx-auto px-6 py-10">
        
      <h1 className="text-4xl font-bold mb-6">Timeline</h1>

      <div className="mb-6">
          <div className="relative w-full max-w-md">

    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="w-full  bg-gray-200 rounded px-4 py-3 text-gray-600 shadow-xl "
    >
      <option value="All">Filter timeline</option>
      <option value="Call">Call</option>
      <option value="Text">Text</option>
      <option value="Video">Video</option>
    </select>


    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
      <RiArrowDropDownLine className="p-2"/>
    </div>

  </div>
      </div>

      {timeline.length === 0 ? (
        <div className="bg-gray-100 shadow p-50 text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-600">.....No Interactions Yet...</h2>
          <button href="/" className="btn btn-dash">Go to Home</button>
        </div>
      ) : (
        <div>
          {filteredTimeline.map((item) => (
           
    <div key={item.id} className="bg-white p-4 gap-150 rounded shadow-sm flex justify-between items-center mt-3">
      
      
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
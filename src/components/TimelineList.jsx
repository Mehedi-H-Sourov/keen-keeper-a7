"use client";

import { useTimeline } from "@/components/TimelineContext";
import { useState } from "react";
import { FcVideoCall } from "react-icons/fc";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdWifiCalling3 } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const TimelineList = () => {
  const { timeline } = useTimeline();
    
    
      const [filter, setFilter] = useState("All");
      const [open, setOpen] = useState(false);
    
      const filteredTimeline = filter === "All" ? timeline : timeline.filter((item) => item.type === filter);



      return (
        <div className=" max-w-7xl mx-auto px-6 py-10">
            
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
            <div className="my-10 shadow p-8 rounded border border-gray-200 space-y-2">
              <h2 className="font-semibold text-2xl mb-10 text-center">Timeline of Call/Text/Video</h2>
               <p className="text-center text-gray-400">
          No interaction data yet
        </p>
            </div>
          ) 
          
          : (
            <div>
              {filteredTimeline.map((item) => (
               
        <div key={item.id} className="bg-white p-4 gap-150 rounded shadow-sm flex justify-between items-center mt-3">
          
          
          <div className=" flex gap-4 items-center">
        <div className="text-xl text-gray-600 ">
      {item.type === "Call" && <MdWifiCalling3 size={40} />}
      {item.type === "Text" && <HiOutlineChatBubbleBottomCenterText size={40} />}
      {item.type === "Video" && <FcVideoCall size={40} />}
    </div>
           <div >
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


export default TimelineList;
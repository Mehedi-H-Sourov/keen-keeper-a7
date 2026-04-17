"use client";
import { toast } from "react-hot-toast";


const ActionHandler = ({ friend, type, children }) => {
  const handleClick = () => {
    const newEntry = {
      id: Date.now(),
      name: friend.name,
      type,
      date: new Date().toISOString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("timeline")) || [];

    localStorage.setItem(
      "timeline",
      JSON.stringify([newEntry, ...existing])
    );

    toast.success(`${type} added to timeline`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {children}
    </div>
  );
};

export default ActionHandler;
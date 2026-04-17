"use client";
import { toast } from "react-hot-toast";
import { useTimeline } from "@/components/TimelineContext";
import { useRouter } from "next/navigation";


const ActionHandler = ({ friend, type, children }) => {
const { addEntry } = useTimeline();
  const router = useRouter();

  const handleClick = () => {
    const newEntry = {
      id: Date.now(),
      name: friend.name,
      type,
      date: new Date().toISOString(),
    };

    addEntry(newEntry); 

    toast.success(`${type} added to timeline`);

  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {children}
    </div>
  );
};

export default ActionHandler;
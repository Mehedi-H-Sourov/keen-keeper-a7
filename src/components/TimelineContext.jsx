"use client";

import { createContext, useContext, useState, useEffect } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("timeline");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  // Saving data  to localStorage whenever updating the ui....
  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(timeline));
  }, [timeline]);

  const addEntry = (entry) => {
    setTimeline((prev) => [entry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);
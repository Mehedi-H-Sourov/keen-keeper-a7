"use client";

import { createContext, useContext, useState, useEffect } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
   
  }, []);

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
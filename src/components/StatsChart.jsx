"use client";

import { useTimeline } from "@/components/TimelineContext";
import { useState } from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const StatsChart = () => {
  const { timeline } = useTimeline();
  const [mounted, setMounted] = useState(false);

  // Count types
  const callCount = timeline.filter(
    (item) => item.type === "Call"
  ).length;

  const textCount = timeline.filter(
    (item) => item.type === "Text"
  ).length;

  const videoCount = timeline.filter(
    (item) => item.type === "Video"
  ).length;

  // Chart data
  const data = [
    { name: "Call", value: callCount, fill: "#22c55e" },
    { name: "Text", value: textCount, fill: "#3b82f6" },
    { name: "Video", value: videoCount, fill: "#a855f7" },
  ];

  

  return (
    <div className="my-10 shadow p-8 rounded border border-gray-200 space-y-2">

      <h2 className="font-semibold text-2xl mb-10 text-center">
        Interaction Breakdown
      </h2>

      {timeline.length === 0 ? (
        <p className="text-center text-gray-400">
          No interaction data yet
        </p>
      ) : (
        <PieChart
          style={{
            width: "100%",
            maxWidth: "400px",
            margin: "auto",
            aspectRatio: 1,
          }}
        >
          <Pie
            data={data}
            innerRadius="70%"
            outerRadius="100%"
            paddingAngle={5}
            cornerRadius={10}
            dataKey="value"
          />

          <Tooltip />
    
          <Legend />
        </PieChart>
      )}

    </div>
  );
};

export default StatsChart;
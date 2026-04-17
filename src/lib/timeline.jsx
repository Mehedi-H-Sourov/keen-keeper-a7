export const addToTimeline = (entry) => {
  const existing = JSON.parse(localStorage.getItem("timeline")) || [];

  const updated = [entry, ...existing];

  localStorage.setItem("timeline", JSON.stringify(updated));
};
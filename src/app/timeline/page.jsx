import TimelineList from "@/components/TimelineList";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">
        Timeline
      </h1>

      <TimelineList />

    </div>
  );
};

export default page;
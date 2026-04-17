import StatsChart from "@/components/StatsChart";

const StatsPage = () => {
  return (
    <div className="w-9/12 mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Interaction Analytics
      </h1>

      <StatsChart />

    </div>
  );
};

export default StatsPage;
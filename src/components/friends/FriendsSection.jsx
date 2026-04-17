import FriendsList from "./FriendsList";

const FriendsSection = async () => {
  const res = await fetch("keenkeeper-blush.vercel.app", { cache: "no-store" });
  const friends = await res.json();

  return (
    <div className="max-w-7xl mx-auto mt-10 mb-16">
      <h2 className="text-lg font-semibold text-gray-700 mb-6">
        Your Friends
      </h2>

      <FriendsList friends={friends} />
    </div>
  );
};

export default FriendsSection;
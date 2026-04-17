import FriendCard from "./FriendsSection";

const FriendsSection = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const friends = await res.json();

  return (
    <div className="mt-10 px-6">
      <h2 className="text-xl font-bold">Your Friends</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsSection;
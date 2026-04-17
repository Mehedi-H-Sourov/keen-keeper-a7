import Link from "next/link";
import Image from "next/image";

const FriendsList = ({ friends }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {friends.map((friend) => (
        <Link key={friend.id} href={`/friends/${friend.id}`}>
          <div className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition">
            
            <Image
              src={friend.picture}
              width={80}
              height={80}
              alt={friend.name}
              className="rounded-full mx-auto"
            />

            <h3 className="mt-3 font-semibold">{friend.name}</h3>

            <p className="text-sm text-gray-500">
              {friend.days_since_contact}d ago
            </p>

            <p className="mt-2 text-xs bg-gray-200 px-3 py-1 rounded-full inline-block">
              {friend.tags[0]}
            </p>
            <br />
            <p
              className={`mt-2 text-xs px-3 py-1 rounded-full inline-block ${
                friend.status === "Overdue"
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {friend.status}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FriendsList;
import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="p-4 rounded-xl border shadow-sm hover:shadow-md transition cursor-pointer text-center bg-white">
        
        {/* Profile Image */}
        <Image
          src={friend.picture}
          alt={friend.name}
          width={80}
          height={80}
          className="rounded-full mx-auto"
        />

        {/* Name */}
        <h3 className="mt-3 font-semibold text-lg">
          {friend.name}
        </h3>

        {/* Days since contact */}
        <p className="text-sm text-gray-500">
          {friend.days_since_contact} days ago
        </p>

        {/* Tag */}
        <p className="mt-2 inline-block px-3 py-1 text-xs bg-gray-200 rounded-full">
          {friend.tags[0]}
        </p>

        {/* Status */}
        <p
          className={`mt-2 inline-block px-3 py-1 text-xs rounded-full ${
            friend.status === "Overdue"
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {friend.status}
        </p>
      </div>
    </Link>
  );
};

export default FriendCard;
import friends from "@/../public/data.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FiArchive, FiClock, FiMessageSquare, FiTrash2, FiVideo } from "react-icons/fi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiChatCenteredTextFill } from "react-icons/pi";
import { FaVideo } from "react-icons/fa6";

const page = async ({ params }) => {
  const { id } = await params;

  const friend = friends.find(
    (f) => f.id === Number(id)
  );

  if (!friend) return notFound();

   return (
  <div className="max-w-6xl mx-auto px-6 py-10">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="space-y-4">

    
        <div className="bg-white rounded-2xl shadow-sm p-6 text-center">

          <Image
            src={friend.picture}
            width={80}
            height={80}
            alt={friend.name}
            className="rounded-full mx-auto"
            unoptimized
          />

          <h2 className="mt-3 font-semibold text-lg">
            {friend.name}
          </h2>

          <span className={`mt-2 inline-block text-xs px-3 py-1 rounded-full text-white ${
          friend.status === "Overdue"
           ? "bg-red-500"
           : "bg-green-500"
         }`}>
            {friend.status}
          </span>

          <div className="mt-2">
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {friend.tags}
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-500 italic">
            {friend.bio}
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Preferred: email
          </p>
        </div>



    
        <div className="space-y-2">


         <button className="w-full flex items-center justify-center gap-2 bg-white rounded-lg p-3 shadow-sm text-sm font-semibold text-gray-600 hover:bg-gray-200 transition">
         <FiClock size={16} />
                Snooze 2 Weeks
                </button>


            <button className="w-full flex items-center justify-center gap-2 bg-white rounded-lg p-3 shadow-sm text-sm font-semibold text-gray-600 hover:bg-gray-200 transition">
               <FiArchive size={16} />
                Archive
              </button>

  
             <button className="w-full flex items-center justify-center gap-2 bg-white rounded-lg p-3 shadow-sm text-sm font-semibold text-red-500 hover:bg-red-200 transition">
             <FiTrash2 size={16} />
                      Delete
                        </button>

                     </div>
                      </div>



      <div className="md:col-span-2 space-y-4">

        <div className="grid grid-cols-3 gap-4">

          <div className="bg-white rounded py-8 px-4 text-center shadow-sm">
            <h3 className="text-xl font-bold">{friend.days_since_contact}</h3>
            <p className="text-sm text-gray-400">Days Since Contact</p>
          </div>

          <div className="bg-white rounded py-8 px-4 text-center shadow-sm">
            <h3 className="text-xl font-bold">{friend.goal}</h3>
            <p className="text-sm text-gray-400">Goal (Days)</p>
          </div>

          <div className="bg-white rounded py-8 px-4 text-center shadow-sm">
            <h3 className="text-lg font-bold">{friend.next_due_date}</h3>
            <p className="text-sm text-gray-400">Next Due</p>
          </div>

        </div>

    
        <div className="bg-white rounded py-8 px-4 shadow-sm flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-sm text-gray-700 mb-4">
              Relationship Goal
            </h3>
            <p className="text-sm text-gray-500">
              Connect every <span className="font-semibold">{friend.goal} days</span>
            </p>
          </div>

          <button className="text-sm bg-gray-100 px-3 py-1 rounded">
            Edit
          </button>
        </div>

       
        <div className="bg-white rounded-xl p-4 shadow-sm">

  <h3 className="text-sm font-semibold text-gray-700 mb-3">
    Quick Check-In
  </h3>

  <div className="grid grid-cols-3 gap-4 py-3.5">

    <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition cursor-pointer">
      <BiSolidPhoneCall size={50} className="mx-auto text-gray-600" />
      <p className="mt-2 text font-semibold text-gray-600">Call</p>
    </div>

    <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition cursor-pointer">
      <PiChatCenteredTextFill size={50} className="mx-auto text-xl text-gray-600" />
      <p className="mt-2 text font-semibold text-gray-600">Text</p>
    </div>

    <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition cursor-pointer">
      <FaVideo size={50} className="mx-auto text-gray-600" />
      <p className="mt-2 text font-semibold  text-gray-600">Video</p>
    </div>

  </div>

</div>

      </div>

    </div>

  </div>
);
};

export default page;
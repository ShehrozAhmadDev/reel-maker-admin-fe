"use client";

import { useAppSelector } from "@/redux/store";

const DashboardContent = () => {
  const { user } = useAppSelector((state) => state.userReducer.value);

  return (
    <div className="py-12 px-6">
      <h2 className="text-4xl font-bold mb-8 text-white">Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-400 p-8 rounded-lg text-white">
          <p className="text-xl font-semibold mb-4">Name</p>
          <p>Admin</p>
        </div>
        <div className="bg-green-400 p-8 rounded-lg text-white">
          <p className="text-xl font-semibold mb-4">Email</p>
          <p>{user?.email}</p>
        </div>
        <div className="bg-red-500 p-8 rounded-lg text-white">
          <p className="text-xl font-semibold mb-4">Number of chats unread</p>
          <p>2</p>
        </div>
        <div className="bg-yellow-400 p-8 rounded-lg text-white">
          <p className="text-xl font-semibold mb-4">Number of orders to do</p>
          <p>10</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

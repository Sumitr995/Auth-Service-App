import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Dashboard = () => {
  const { User } = useContext(AuthContext);

  return (
    <div className="h-screen w-screen bg-[#0e0f12] text-white flex flex-col">

      {/* NAVBAR */}
      <nav className="w-full h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#111217]/80 backdrop-blur-xl">
        <h1 className="text-xl font-semibold tracking-wide">Auth App</h1>

        {/* USER INFO */}
        <div className="flex items-center gap-3">
          {/* Text */}
          <div className="text-right">
            <p className="font-medium text-sm">
              {User?.name || "User"}
            </p>
            <p className="text-xs text-gray-400">
              {User?.email || "email@example.com"}
            </p>
          </div>

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
            {User?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-3xl text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 text-lg md:text-xl">
            You’re logged in. Enjoy a smooth and secure experience inside your dashboard.
          </p>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;

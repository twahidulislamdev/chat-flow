import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MyPicture from "../../assets/My Picture.jpg";
import { FaHome } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import {
  IoChatboxEllipsesSharp,
  IoPersonSharp,
  IoSettings,
} from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Check if current path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="relative w-25 h-full bg-[#36404a] shadow-lg py-5 flex-shrink-0">
      {/* App Logo */}
      <div className="flex justify-center mb-10">
        <BsChatTextFill className="text-3xl text-blue-500" />
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col items-center space-y-8 mt-20">
        <button
          onClick={() => handleNavigation("/chatting")}
          className={`p-2 rounded-lg transition-colors hover:cursor-pointer ${
            isActive("/chatting") ? "bg-blue-500" : "hover:bg-[#303841]"
          }`}
        >
          <IoChatboxEllipsesSharp className="text-2xl text-white" />
        </button>

        <button
          onClick={() => handleNavigation("/contact")}
          className={`p-2 rounded-lg transition-colors hover:cursor-pointer ${
            isActive("/contact") ? "bg-blue-500" : "hover:bg-[#303841]"
          }`}
        >
          <IoPersonSharp className="text-2xl text-white" />
        </button>

        <button
          onClick={() => handleNavigation("/groups")}
          className={`p-2 rounded-lg transition-colors hover:cursor-pointer ${
            isActive("/groups") ? "bg-blue-500" : "hover:bg-[#303841]"
          }`}
        >
          <HiMiniUserGroup className="text-2xl text-white" />
        </button>
      </div>

      {/* Bottom Icons */}
      <div className="absolute bottom-22 left-1/2 transform -translate-x-1/2">
        <button className="p-2 rounded-lg hover:bg-[#303841] transition-colors hover:cursor-pointer">
          <MdLightMode className="text-2xl text-white" />
        </button>
      </div>

      

      {/* User Profile */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <button
          
          className="border-2 border-blue-500 rounded-full p-0.5 hover:border-blue-400 transition-colors hover:cursor-pointer"
        >
          <img className="w-9 h-9 rounded-full" src={MyPicture} alt="Profile" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;

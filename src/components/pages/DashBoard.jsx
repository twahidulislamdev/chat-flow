import React from "react";
import MyPicture from "../../assets/My Picture.jpg";
import { FaHome } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import {
  IoChatboxEllipsesSharp,
  IoPersonSharp,
  IoSettings,
  IoSearch,
} from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";

const DashBoard = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-between items-center bg-gray-100">
        {/* first side start   */}
        <div className="relative w-[6.5%] h-full bg-[#36404a] shadow-lg py-5 ">
          <div className="flex justify-center m-auto mb-10 rounded-full">
            {/* App logo start  */}
            <BsChatTextFill className="text-[34px] text-blue-500" />
          </div>
          {/* App logo end  */}

          {/* Icons section start */}
          <div className="flex flex-col items-center space-y-10 mt-20">
            <FaHome className="text-[28px] text-white" />
            <IoChatboxEllipsesSharp className="text-[28px] text-white" />
            <IoPersonSharp className="text-[28px] text-white" />
            <HiMiniUserGroup className="text-[28px] text-white" />
          </div>
          <div className="absolute bottom-40 left-[50%] transform -translate-x-1/2">
            <MdLightMode className="text-[28px] text-white" />
          </div>
          <div className="absolute bottom-25 left-[50%] transform -translate-x-1/2">
            <IoSettings className="text-[28px] text-white" />
          </div>
          {/* Icons section end */}
          {/* My account start */}
          <div className="absolute bottom-5 left-[50%] transform -translate-x-1/2 border-3 border-blue-500 rounded-full ">
            <img
              className="w-[45px] h-[45px] rounded-full"
              src={MyPicture}
              alt=""
            />
          </div>
          {/* My account end */}
        </div>
        {/* first side end   */}

        {/* second side start   */}
        <div className="w-[28%] h-full p-5 bg-[#303841] border-l-2 border-gray-700">
          <h3 className="text-3xl font-bold text-white mb-5">Chat</h3>
          {/* Search Box start  */}
          <div className="relative w-full  rounded-lg ">
            <input
              className="px-3 py-3 w-full bg-[#36404a] dark:placeholder-white text-lg rounded-lg"
              type="text"
              placeholder="Search User"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
              <IoSearch className="text-xl text-gray-400" />
            </div>
          </div>
          {/* Search Box end  */}
        </div>
        {/* second side end   */}

        {/* Third side start   */}
        <div className="w-[66%] h-full  py-5 bg-[#36404a] ">
          <div className="">
            <div className="flex justify-start items-center gap-x-5 px-10 pb-5 border-b-1 border-neutral-500">
              <div className="border-3 border-blue-500 rounded-full ">
                <img
                  className="w-[45px] h-[45px] rounded-full"
                  src={MyPicture}
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-white ">Twahidul Islam</h3>
            </div>
          </div>

          
        </div>
        {/* Third side end   */}
      </div>
    </>
  );
};

export default DashBoard;

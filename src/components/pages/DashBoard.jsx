import React from 'react'
import MyPicture from "../../assets/My Picture.jpg";

const DashBoard = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-between items-center bg-gray-100">
        <div className="w-[6%] h-full bg-[#1d2f53] shadow-lg py-10 rounded-r-lg">
            <div className=" flex justify-center m-auto mb-10 rounded-full">
                <img className='w-[55%] h-[55px] rounded-full' src={MyPicture} alt="" />
            </div>
            {/* Sidebar content can go here */}
           
        </div>
      </div>
    </>
  )
}

export default DashBoard


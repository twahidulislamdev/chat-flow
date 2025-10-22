import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
// import LoginPage from '../../assets/loginPage.png';
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Name
  const handleNameInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  // Email
  const handleEmailInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  // Password
  const handlePasswordInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  // console.log(userInfo);
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      console.log("This didn't work.");
    }
  };

  return (
    <>
      <div className="w-full h-full  flex items-center justify-center overflow-hidden">
        {/* Container with fixed width */}
        <div className="w-full flex justify-between  rounded-lg">
          {/* Image Section */}
          {/* Form Section */}
          <div className="w-[48%] h-screen  backdrop-blur-sm  rounded-lg flex justify-center m-auto px-25 py-25">
            <div className="w-full">
              <h3 className="text-3xl font-bold text-[#1d2f53] text-center mb-6">
                Create Account
              </h3>

              <form onSubmit={handleSignUpSubmit} className="space-y-7">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-[#1d2f53] pb-1"
                  >
                    Name
                  </label>
                  <input
                    onChange={handleNameInput}
                    type="text"
                    id="text"
                    className="mt-1 w-full bg-[#e1e4ed]  text-neutral-800 text-base rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-[#1d2f53] transition-colors placeholder-neutral-600"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-md font-medium text-[#1d2f53] pb-1"
                  >
                    Email
                  </label>
                  <input
                    onChange={handleEmailInput}
                    type="email"
                    id="email"
                    className="mt-1 w-full bg-[#e1e4ed]  text-neutral-800 text-base rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-[#1d2f53] transition-colors placeholder-neutral-600"
                    placeholder="name@gmail.com"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-md font-medium text-[#1d2f53] pb-1"
                  >
                    Password
                  </label>
                  <input
                    onChange={handlePasswordInput}
                    type="password"
                    id="password"
                    className="mt-1 w-full bg-[#e1e4ed]  text-neutral-800 text-base rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-[#1d2f53] transition-colors placeholder-neutral-600"
                    placeholder="••••••••"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1d2f53] text-white font-semibold text-lg py-3 rounded-md hover:bg-[#15223d] transition-colors hover:cursor-pointer"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          {/* Banner part  */}
          <div className="w-[48%] h-screen bg-[#1d2f53] rounded-l-[15%] py-[220px] ">
            <h3 className="text-center text-6xl text-white font-semibold">
              Welcome Back!
            </h3>
            <p className="text-center text-lg text-white w-2/3 m-auto mt-5">
              To keep connected with us please login with your personal
              information
            </p>
            <Link to={"/login"}>
              <button
                type="submit"
                className="mt-5 w-[130px] bg-transparent text-white font-semibold text-lg py-2 px-2 text-center rounded-lg  border-2 border-white transition-colors hover:cursor-pointer m-auto flex justify-center"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

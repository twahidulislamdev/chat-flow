import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Name input handler
  const handleNameInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  // Email input handler
  const handleEmailInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  // Password input handler
  const handlePasswordInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  // Handle signup submit
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      toast.error("Something Missing");
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Update display name in Firebase user profile
          updateProfile(user, {
            displayName: userInfo.name,
          })
            .then(() => {
              // Send email verification
              sendEmailVerification(user)
                .then(() => {
                  toast.success(
                    "Account Created Successfully! Please check your email for verification."
                  );
                  navigate("/login");
                  console.log("User created:", user);
                })
                .catch((error) => {
                  toast.error(
                    "Error sending verification email: " + error.message
                  );
                });
            })
            .catch((error) => {
              toast.error("Error saving name: " + error.message);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        {/* Container with fixed width */}
        <div className="w-full flex justify-between rounded-lg">
          {/* Form Section */}
          <div className="w-full lg:w-[50%] h-full lg:h-screen backdrop-blur-sm rounded-lg flex justify-center m-auto px-5 lg:px-30 py-25">
            <div className="w-full">
              <h3 className="text-3xl font-bold text-[#1d2f53] text-center mb-6">
                Create Account
              </h3>

              <form onSubmit={handleSignUpSubmit} className="space-y-7">
                {/* Name Input */}
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
                    className="mt-1 w-full bg-[#e1e4ed] text-neutral-800 text-base rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-[#1d2f53] transition-colors placeholder-neutral-600"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
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
                    className="mt-1 w-full bg-[#e1e4ed] text-neutral-800 text-base rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-[#1d2f53] transition-colors placeholder-neutral-600"
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
                    className="mt-1 w-full bg-[#e1e4ed] text-neutral-800 text-base rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-[#1d2f53] transition-colors placeholder-neutral-600"
                    placeholder="••••••••"
                  />
                </div>

                {/* Divider */}
                <div className="block lg:hidden relative my-8">
                  <hr className="border-gray-600" />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#1d2f53] px-3 text-sm">
                    Or
                  </span>
                </div>

                {/* Creat Account Part Start  */}
                <div className="block lg:hidden mt-5 text-center">
                  <p className="">
                    Already have an account?{"  "}
                    <span
                      onClick={() => navigate("/login")}
                      className="w-auto text-lg font-medium text-[#1d2f53] dark:text-gray-700 border-b-1 pb-0 px-2 border-gray-700 hover:cursor-pointer hover:text-[#15223d] transition-colors duration-200"
                    >
                      Sign In
                    </span>
                  </p>
                </div>
                {/* Creat Account Part End  */}

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

          {/* Banner part */}
          <div className="hidden lg:block w-[50%] m-3 bg-[#1d2f53] rounded-xl py-[220px]">
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
                className="mt-5 w-[130px] bg-transparent text-white font-semibold text-lg py-2 px-2 text-center rounded-lg border-2 border-white transition-colors hover:cursor-pointer m-auto flex justify-center"
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

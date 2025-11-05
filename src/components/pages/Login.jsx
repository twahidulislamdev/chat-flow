import { useState } from "react";
import { FaGoogle, FaApple, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  // Email input handler
  const handleEmailInput = (e) => {
    setUserInfo((prev) => ({ ...prev, email: e.target.value }));
  };

  // Password input handler
  const handlePasswordInput = (e) => {
    setUserInfo((prev) => ({ ...prev, password: e.target.value }));
  };

  // Handle login submit
  const handleSignInSubmit = (e) => {
    e.preventDefault();

    if (!userInfo.email || !userInfo.password) {
      toast.error("Something Missing");
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user.emailVerified) {
          toast.success("Login successful!");
          // console.log("Logged in user:", user);
          navigate("/dashboard");
        } else {
          toast.error("Please verify your email before logging in.");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <>
      <Toaster />
      <div className="w-full h-full bg-linear-to-br 0 flex items-center justify-center">
        {/* Container with fixed width */}
        <div className="w-full flex justify-between rounded-lg">
          <div className="hidden lg:block w-[50%] bg-[#1d2f53] rounded-xl py-[220px] m-3">
            <h3 className="text-center text-6xl text-white font-semibold">
              Hello, Welcome!
            </h3>
            <p className="text-center text-lg text-white w-1/2 m-auto mt-5">
              Enter your personal details and start journey with us!
            </p>
            <Link to={"/"}>
              <button
                type="submit"
                className="mt-5 w-[130px] bg-transparent text-white font-semibold text-lg py-2 px-2 text-center rounded-lg border-2 border-white transition-colors hover:cursor-pointer m-auto flex justify-center"
              >
                Sign Up
              </button>
            </Link>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[50%] h-full lg:h-screen backdrop-blur-sm rounded-lg flex justify-center m-auto px-5 lg:px-30 py-15">
            <div className="w-full">
              <h3 className="text-3xl font-bold text-[#1d2f53] text-center mb-6">
                Login
              </h3>

              <form onSubmit={handleSignInSubmit} className="space-y-10">
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
                    className="mt-1 w-full bg-[#e1e4ed] text-neutral-600 text-base rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-[#1d2f53] transition-colors placeholder-neutral-600"
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
                    className="mt-1 w-full bg-[#e1e4ed] text-neutral-600 text-base rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-[#1d2f53] transition-colors placeholder-neutral-600"
                    placeholder="••••••••"
                  />
                </div>

                {/* Checkbox + Forgot Password */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 text-[#1d2f53] border-[#1d2f53] rounded bg-gray-700 focus:ring-[#1d2f53]"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-md font-medium text-[#1d2f53]"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-md font-medium text-[#1d2f53] hover:text-[#15223d] transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1d2f53] text-white font-semibold text-lg py-3 rounded-md hover:bg-[#15223d] transition-colors hover:cursor-pointer"
                >
                  Log In
                </button>
              </form>

              {/* Creat Account Part Start  */}
              <div className="block lg:hidden mt-5 text-center">
                <p className="">
                  No account yet?{"  "}
                  <span
                    onClick={() => navigate("/")}
                    className="w-auto text-lg font-medium text-[#1d2f53] dark:text-gray-700 border-b-1 pb-0 px-2 border-gray-700 hover:cursor-pointer hover:text-[#15223d] transition-colors duration-200"
                  >
                    Create Account
                  </span>
                </p>
              </div>
              {/* Creat Account Part End  */}

              {/* Divider */}
              <div className="relative my-8">
                <hr className="border-gray-600" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#1d2f53] px-3 text-sm">
                  Or
                </span>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#1d2f53] border border-gray-600 text-white py-3 rounded-md hover:bg-[#15223d] transition-colors hover:cursor-pointer">
                  <FaGoogle className="text-xl" />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#1d2f53] border border-gray-600 text-white py-3 rounded-md hover:bg-[#15223d] transition-colors hover:cursor-pointer">
                  <FaApple className="text-xl" />
                  <span className="text-sm font-medium">Apple</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

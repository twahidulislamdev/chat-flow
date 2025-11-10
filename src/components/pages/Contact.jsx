import MyPicture from "../../assets/My Picture.jpg";
import { IoSettings, IoSearch } from "react-icons/io5";
const Contact = () => {
  return (
    <>
      <div className="w-full h-full flex bg-neutral-100">
        {/* Left Sidebar - Chat List */}
        <div className="w-[30%] h-full bg-[#303841] border-r border-gray-600">
          <div className="p-5">
            <h3 className="text-4xl font-bold text-white mb-5">Contact</h3>

            {/* Search Box */}
            <div className="relative w-full rounded-lg mb-5">
              <input
                className="px-3 py-3 w-full bg-[#36404a] placeholder-gray-400 text-white text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Search User"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <IoSearch className="text-xl text-gray-400" />
              </div>
            </div>

            {/* Chat List */}
            <div className="space-y-2">
              {/* Sample Chat Items */}
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-center p-3 bg-[#36404a] rounded-lg cursor-pointer hover:bg-[#3e4a56] transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">U</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">User {item}</h4>
                    <p className="text-gray-400 text-sm">
                      Last message preview...
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 text-xs">12:30 PM</span>
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1 ml-auto">
                      <span className="text-white text-xs">2</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Chat Area */}
        <div className="w-[70%] h-full bg-[#36404a] flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-600">
            <div className="flex items-center gap-x-4">
              <div className="border-2 border-blue-500 rounded-full">
                <img
                  className="w-12 h-12 rounded-full"
                  src={MyPicture}
                  alt="Profile"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Twahidul Islam</h3>
                <p className="text-green-400 text-sm">Online</p>
              </div>
            </div>

            <div className="flex items-center gap-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <IoSettings className="text-xl" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-5 overflow-y-auto">
            <div className="space-y-4">
              {/* Sample Messages */}
              <div className="flex justify-start">
                <div className="bg-[#303841] text-white p-3 rounded-lg rounded-bl-none max-w-md">
                  <p>Hello! How are you doing today?</p>
                  <span className="text-xs text-gray-400 mt-1 block">
                    12:25 PM
                  </span>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-blue-500 text-white p-3 rounded-lg rounded-br-none max-w-md">
                  <p>I'm doing great! Thanks for asking. How about you?</p>
                  <span className="text-xs text-blue-100 mt-1 block">
                    12:26 PM
                  </span>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-[#303841] text-white p-3 rounded-lg rounded-bl-none max-w-md">
                  <p>
                    I'm good too! Just working on some projects. Want to catch
                    up later?
                  </p>
                  <span className="text-xs text-gray-400 mt-1 block">
                    12:27 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-5 border-t border-gray-600">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-[#303841] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

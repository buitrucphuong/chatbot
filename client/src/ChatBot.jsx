import React from "react";
import moment from "moment";

const ChatBot = ({ msg }) => {
  return (
    <div className="chat-message">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-xl font-thin max-w-sm mx-2 order-2 items-start">
          <div className="flex flex-col space-y-1">
            <span className="px-4 py-2 rounded-xl inline-block rounded-bl-none bg-white text-gray-700 shadow">
              {msg}
            </span>
            <span className="text-xs text-gray-400">
              {moment().format("HH:mm")}
            </span>
          </div>
        </div>
        <img
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/1c/76/95/1c76959d-3476-de11-a47f-1caa69ebc843/source/512x512bb.jpg"
          alt="My profile"
          className="w-6 h-6 rounded-full order-1 border"
        />
      </div>
    </div>
  );
};

export default ChatBot;

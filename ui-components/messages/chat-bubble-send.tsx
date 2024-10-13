import React from "react";

interface ChatBubbleSendProps{
    msg: string;
    time: string;
}

const ChatBubbleSend: React.FC<ChatBubbleSendProps> = ({msg,time}) => {
    return (
      <div className="">
      <div className="grid mb-2 ">
        <div className="px-3.5 py-2 bg-indigo-100  rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl justify-start items-center gap-3 inline-flex ml-auto  max-w-[75%]">
          <h2 className="text-black text-base font-normal leading-snug p-2">{msg}</h2>
        </div>
        <div className="justify-start items-center inline-flex ml-auto">
          <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">{time}</h3>
        </div>
        </div>
      </div>
    );
  };
  export default ChatBubbleSend;
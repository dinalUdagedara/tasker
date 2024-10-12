import React from "react";

interface ChatBubbleRecieveProps{
    msg: string;
    time: string;
}

const ChatBubbleRecieve: React.FC<ChatBubbleRecieveProps> = ({msg,time}) => {
    return (
      <div className="w-max grid max-w-[75%]">
        <div className="px-3.5 py-2 bg-gray-100 rounded-3xl rounded-tl-none justify-start  items-center gap-3 inline-flex">
          <h5 className="text-gray-900 text-base font-normal leading-snug p-2">{msg}</h5>
        </div>
        <div className="justify-end items-center inline-flex mb-1.5 ">
          <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">{time}</h6>
        </div>
      </div>
    );
  };
  
  export default ChatBubbleRecieve;
"use client";
import { api } from "@/convex/_generated/api";
import { Message, User } from "@/lib/types";
import ChatBubbleRecieve from "@/ui-components/messages/chat-bubble-recieve";
import ChatBubbleSend from "@/ui-components/messages/chat-bubble-send";
import { useQuery } from "convex/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface ChatConversationProps {
  user: User;
}

// Function to format the time in the user's local time zone
const formatTime = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", {
    //   year: 'numeric',
    //   month: '2-digit',
    //   day: '2-digit',
    hour: "numeric",
    minute: "numeric",
    hour12: true, // This ensures 12-hour format with AM/PM
  });
};

const ChatConversation = ({ user }: ChatConversationProps) => {
  const { data: session } = useSession(); // Get session from next-auth
  const [allMessages, setAllMessages] = useState<Message[]>([]); // State to hold combined messages
  const [myMail, setMyMail] = useState<string>("");

  const messages = useQuery(api.chat.getMessagesInConversation, {
    user_1_email: session?.user?.email || "",
    user_2_email: user.email,
  });

  useEffect(() => {
    if (session && session.user?.email) {
      setMyMail(session.user?.email);
    }
  }, [session]);

  useEffect(() => {
    if (messages) {
      // Combine and sort messages by timeStamp
      const sortedMessages = [...messages].sort(
        (a: Message, b: Message) =>
          new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime()
      );
      setAllMessages(sortedMessages); // Update state with sorted messages
    }
  }, [messages]);

  return (
    <div>
      {/* Display all sorted messages */}
      {allMessages.map((message: Message, index: number) => {
        // Determine if the message was sent or received
        if (message.senderEmail === myMail) {
          return (
            <ChatBubbleSend
              key={index}
              msg={message.message}
              time={formatTime(message._creationTime)} // Format time using formatTime
            />
          );
        } else {
          return (
            <ChatBubbleRecieve
              key={index}
              msg={message.message}
              time={formatTime(message._creationTime)} // Format time using formatTime
            />
          );
        }
      })}
    </div>
  );
};

export default ChatConversation;

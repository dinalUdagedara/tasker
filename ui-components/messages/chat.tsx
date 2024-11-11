"use client";
import ChatHead from "@/ui-components/messages/chat-head";
import ChatBubbleRecieve from "@/ui-components/messages/chat-bubble-recieve";
import ChatBubbleSend from "@/ui-components/messages/chat-bubble-send";
import { User } from "@/lib/types";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import ChatConversation from "./chat-conversation";

interface ChatComponentProps {
  user: User;
}

const ChatComponent = ({ user }: ChatComponentProps) => {
  const createConversation = useMutation(api.chat.createConversation);
  const { data: session } = useSession(); // Get session from next-auth

  useEffect(() => {
    const initiateConversation = async () => {
      if (user && session?.user?.email) {
        try {
          const conversation = await createConversation({
            user_1_email: session.user.email,
            user_2_email: user.email,
          });
          console.log("conversation", conversation); // Log the resolved conversation object
        } catch (error) {
          console.error("Error creating conversation", error);
        }
      }
    };

    initiateConversation();
  }, [user, session]);

  return (
    <div>
      <div className="pr-2">
        <ChatHead
          imageUrl="https://github.com/shadcn.png"
          name={user.name}
          userName={user.email}
        />
      </div>
      <div className="mt-10">
        <ChatConversation user={user} />
      </div>
    </div>
  );
};

export default ChatComponent;

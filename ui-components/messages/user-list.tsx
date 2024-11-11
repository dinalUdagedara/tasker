"use client";
import { RiSearch2Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatHead from "@/ui-components/messages/chat-head";
import ContactCard from "@/ui-components/messages/contact-card";
import ChatBubbleRecieve from "@/ui-components/messages/chat-bubble-recieve";
import ChatBubbleSend from "@/ui-components/messages/chat-bubble-send";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";
import { User } from "@/lib/types";
import ChatComponent from "./chat";

const Chat = () => {
  const users = useQuery(api.users.getAllUsers);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [chatter, setChatter] = useState<User | null>(null);

  // Update the state when users data is available
  useEffect(() => {
    if (users) {
      setAllUsers(users);
    }
  }, [users]);

  function handleChatterSelect(user: User) {
    setChatter(user);
  }

  return (
    <>
      <div className="grid grid-cols-3 ">
        {/* Contact LIst Column */}
        <div className="col-span-1 bg-gray-100 p-6 shadow-md min-h-[80vh]">
          {/* Message Heading */}
          <h2 className="text-2xl font-bold mb-4">Messages</h2>
          {/* Searchbar */}
          <div className="flex border-2 p-1 bg-muted rounded-md">
            <Button className="border-0 bg-muted" variant="outline" size="icon">
              <RiSearch2Line className="h-4 w-4" />
            </Button>
            <Input
              className="border-0 bg-muted focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              type="email"
              placeholder="Search People"
            />
          </div>
          <hr className="border-gray-300 mt-4" />
          <div>
            {allUsers.map((user) => (
              <div
                onClick={() => {
                  handleChatterSelect(user);
                }}
              >
                <ContactCard
                  imageUrl="https://github.com/shadcn.png"
                  name={user.name}
                  lastText={user.email}
                  date="Oct 11"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Chat Column */}
        <div className="col-span-2 bg-white p-6 shadow-md">
          {chatter && <ChatComponent user={chatter} />}
        </div>
      </div>
    </>
  );
};

export default Chat;

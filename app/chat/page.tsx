"use client";
import { RiSearch2Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatHead from "@/ui-components/messages/chat-head";
import ContactCard from "@/ui-components/messages/contact-card";
import ChatBubbleRecieve from "@/ui-components/messages/chat-bubble-recieve";
import ChatBubbleSend from "@/ui-components/messages/chat-bubble-send";




const MobileAppContent = () => {
    return (
        <div className="container mx-auto p-4">
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
          <ContactCard imageUrl="https://github.com/shadcn.png"name="Ginura Premawardana"lastText="Hey this is my first nextjs project"date="Oct 11"/>
          <ContactCard imageUrl="https://github.com/shadcn.png"name="Ginura Premawardana"lastText="Compiled in 442ms (2647 modules)"date="Oct 11"/>
          <ContactCard imageUrl="https://github.com/shadcn.png"name="Ginura Premawardana"lastText="Dashboard, cards, authentication. Some"date="Oct 11"/>
          <ContactCard imageUrl="https://github.com/shadcn.png"name="Ginura Premawardana"lastText="Use this as a guide to build your own"date="Oct 11"/>
          <ContactCard imageUrl="https://github.com/shadcn.png"name="Ginura Premawardana"lastText="Utilities for controlling how flex and grid"date="Oct 11"/>
          </div>

        </div>
        
        {/* Chat Column */}
        <div className="col-span-2 bg-white p-6 shadow-md">
        <div className="pr-2">
            <ChatHead imageUrl="https://github.com/shadcn.png"name="Ginura Premawardana"userName="@Ginuzz"/>
        </div>
        <div className="mt-10">
            {/* These are recieved messages */}
            <ChatBubbleRecieve msg="I’m down! Any ideas eyrjhfguye ue cry uej jrgur thgujrhtdgfrthtey r dfvfgt ftgtyfghbh gbd uyrgdfuye rgfu erg egrdf??"time=""/>
            <ChatBubbleRecieve msg="Hello hello" time="8.41 PM"/>

            {/* These are the senders messages */}
            <ChatBubbleSend msg="Hello hello hello uydrjshgdf ue uerhfn uirjiu erhf ieurkjhiu vui erghjviu rkjghvi uskrhg isurhv" time=""/>
            <ChatBubbleSend msg="Kollo dinna" time="8.41 PM"/>
        </div>
        </div>
      </div>
    </div>
    );
  };

export default MobileAppContent;
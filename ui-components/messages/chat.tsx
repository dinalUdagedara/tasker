import ChatHead from "@/ui-components/messages/chat-head";
import ChatBubbleRecieve from "@/ui-components/messages/chat-bubble-recieve";
import ChatBubbleSend from "@/ui-components/messages/chat-bubble-send";
import { User } from "@/lib/types";

interface ChatComponentProps {
  user: User;
}

const ChatComponent = ({ user }: ChatComponentProps) => {
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
        {/* These are recieved messages */}
        <ChatBubbleRecieve
          msg="I'm down! Any ideas eyrjhfguye ue cry uej jrgur thgujrhtdgfrthtey r dfvfgt ftgtyfghbh gbd uyrgdfuye rgfu erg egrdf??"
          time=""
        />
        <ChatBubbleRecieve msg="Hello hello" time="8.41 PM" />

        {/* These are the senders messages */}
        <ChatBubbleSend
          msg="Hello hello hello uydrjshgdf ue uerhfn uirjiu erhf ieurkjhiu vui erghjviu rkjghvi uskrhg isurhv"
          time=""
        />
        <ChatBubbleSend msg="Kollo dinna" time="8.41 PM" />
      </div>
    </div>
  );
};

export default ChatComponent;

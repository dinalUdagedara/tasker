import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatHeadProps {
  imageUrl: string;
  name: string;
  userName: string;
}

const ChatHead: React.FC<ChatHeadProps> = ({imageUrl,name,userName}) => {
  return (
    <div className="flex flex-row gap-2 items-center">
        <div className="flex">
        <Avatar>
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarImage src={imageUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="hidden lg:flex flex-col pl-4">
        <p className="text-lg font-sans font-semibold">{name}</p>
        <p className="text-sm font-sans font-thin">{userName}</p>
      </div>
    </div>
  );
};

export default ChatHead;
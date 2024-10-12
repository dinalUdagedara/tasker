import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatHeadProps {
  imageUrl: string;
  name: string;
  lastText: string;
  date: string;
}

const ContactCard: React.FC<ChatHeadProps> = ({imageUrl,name,lastText,date}) => {
  return (
    <div className="flex flex-row gap-2 items-center mt-5 mb-5">
    <div className="flex">
        <Avatar>
        <AvatarImage src={imageUrl} />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </div>
    <div className="hidden lg:flex flex-col pl-2 w-full">
        <div className="flex justify-between items-center">
        <p className="text-md font-sans font-semibold">{name}</p>
        <p className="text-xs">{date}</p>
        </div>
        <p className="text-sm font-sans font-thin">{lastText}</p>
    </div>
    </div>
  );
};

export default ContactCard;
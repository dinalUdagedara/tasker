import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Notifications } from "./notifications";
import { UserInformation } from "./user-information";

const UserInfo = () => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <div className="flex flex-col items-end justify-center  pl-4">
        <p className="text-lg font-sans font-semibold">Dinal Bandara</p>
        <p className="text-sm font-sans font-thin text-right">
          Software Enginner
        </p>
      </div>
      <div className="flex">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <UserInformation />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

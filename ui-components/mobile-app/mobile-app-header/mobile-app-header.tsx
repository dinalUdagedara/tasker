import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DatePicker } from "./date-selector";
import { Filter } from "./filter";
import { FaSquarePlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import { BsHddStackFill } from "react-icons/bs";
import { RiApps2Line } from "react-icons/ri";

const MobileAppHeader = () => {
  return (
    <div className="flex justify flex-col">
      <div className="flex flex-row selection justify-between my-8 ">
        <span className="font-semibold text-2xl md:text-5xl  font-sans m-5 ">
          Mobile App
        </span>

        <div className="flex m-5 justify-end items-center ">
          <span className="mx-2 flex items-center gap-1">
            <FaSquarePlus className="h-4 w-4" />
            Invite
          </span>

          <div className="flex items-center">
            <Avatar className="-ml-2 first:ml-0">
              <AvatarImage src="https://i.pravatar.cc/150?img=1" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar className="-ml-4">
              <AvatarImage src="https://i.pravatar.cc/150?img=2" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <Avatar className="-ml-4">
              <AvatarImage src="https://i.pravatar.cc/150?img=3" />
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>
            <Avatar className="-ml-4">
              <AvatarImage src="https://i.pravatar.cc/150?img=4" />
              <AvatarFallback>GH</AvatarFallback>
            </Avatar>
            <Avatar className="-ml-4">
              <AvatarImage src="https://i.pravatar.cc/150?img=5" />
              <AvatarFallback>IJ</AvatarFallback>
            </Avatar>
            <Avatar className="-ml-4">
              <AvatarImage src="https://i.pravatar.cc/150?img=6" />
              <AvatarFallback>KL</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-5 justify-between">
        <div className="mx-5 flex gap-2">
          <Filter />
          <DatePicker />
        </div>

        <div className="mx-5 flex gap-2 items-center">
          <Button variant="outline">
            <div className="flex gap-2 items-center">
              <CalendarIcon className="h-4 w-4" />
              Share
            </div>
          </Button>
          <Separator orientation="vertical" className="h-2/3" />
          <Button variant="outline">
            <div className="flex gap-2 items-center">
              <BsHddStackFill className="h-4 w-4" />
            </div>
          </Button>

          <Button className="border-0" variant="outline" size={"icon"}>
            <div className="flex gap-2 items-center">
              <RiApps2Line className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileAppHeader;

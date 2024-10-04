import { Button } from "@/components/ui/button";
import { ModeToggle } from "./dark-mode";
import { Input } from "@/components/ui/input";
import { RiSearch2Line } from "react-icons/ri";
import { DatePicker } from "@/components/ui/date-picker";
import { Faq } from "./faq";
import { Notifications } from "./notifications";
import UserIcon from "./user-icon";

const Header = () => {
  return (
    <div className="h-full w-full flex justify-between">
      <div className="text-4xl font-sans font-bold lg:border-r-2 border-b-2 sm:w-1/5 flex justify-center py-4 px-4 sm:px-0">
        Tasker
      </div>
      <div className="w-full border-b-2 flex justify-between">
        <div className="p-4">
          <div className="flex border-2 p-1 bg-muted rounded-md">
            <Button className="border-0 bg-muted" variant="outline" size="icon">
              <RiSearch2Line className="h-4 w-4" />
            </Button>
            <Input
              className="border-0 bg-muted focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 sm:pr-40"
              type="email"
              placeholder="Search For Anything..."
            />
          </div>
        </div>
        <div className="flex py-4">
          <div>
            <DatePicker />
          </div>
          <div>
            <Faq />
          </div>
          <div>
            <Notifications />
          </div>
          <div>
            <ModeToggle />
          </div>
          <div className="pr-2">
            <UserIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

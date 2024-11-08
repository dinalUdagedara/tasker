import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserInformation } from "./user-information";
import { auth } from "@/auth";
import { useEffect } from "react";

const UserIcon = async () => {
  const session = await auth();

  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <div className="hidden lg:flex flex-col items-end justify-center  pl-4">
        {!session?.user ? (
          <>
            <p className="text-lg font-sans font-semibold">Login</p>
          </>
        ) : (
          <>
            <p className="text-lg font-sans font-semibold">
              {session.user.name}
            </p>
          </>
        )}
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

export default UserIcon;

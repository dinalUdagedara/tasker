"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserInformation } from "./user-information";
import { auth } from "@/auth";
import { useEffect, useState } from "react";
import { Session } from "next-auth";

export const UserIcon = ({ session }: { session: Session }) => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    if (session?.user?.email) {
      setUserEmail(session.user.email || ""); // Fallback to empty string if undefined
    }
    if (session?.user?.name) {
      setUserName(session.user.name || ""); // Handle username as well
    }
  }, [session]);

  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <div className="hidden lg:flex flex-col items-end justify-center  pl-4">
        {!session?.user ? (
          <>
            <p className="text-lg font-sans font-semibold">Login</p>
          </>
        ) : (
          <>
            {session.user.name ? (
              <>
                <p className="text-lg font-sans font-semibold">{userName}</p>
              </>
            ) : (
              <>
                <p className="text-lg font-sans font-semibold">{userEmail}</p>
              </>
            )}
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

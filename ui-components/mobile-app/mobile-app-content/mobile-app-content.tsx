"use client";
import MainComponent from "../draggable-example/main-component";
import { useSession } from "next-auth/react";

const MobileAppContent = () => {
  const { data: session, status } = useSession();
  return (
    <div className="flex flex-col justify-center items-center ">
      {session?.user?.email && <MainComponent email={session?.user?.email} />}
    </div>
  );
};

export default MobileAppContent;

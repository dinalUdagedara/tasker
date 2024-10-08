"use client";
import { Separator } from "@/components/ui/separator";
import { GrAppsRounded } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

import { Button } from "@/components/ui/button";
const SideBar = () => {
  return (
    <div className="hidden sm:flex flex-col justify-start items-start sm:w-1/5 sm:w-max-[400px] border-r-2 h-full min-h-screen">
      <div className="flex w-full flex-col h-full justify-center items-center pt-1">
        <div className="w-full">
          <Button className="w-full flex justify-start pl-6" variant={"ghost"}>
            <GrAppsRounded className="mr-2 h-4 w-4" /> Home
          </Button>
        </div>
        <div className="w-full">
          <Button className="w-full flex justify-start pl-6" variant={"ghost"}>
            <BiMessageSquareDetail className="mr-2 h-4 w-4" /> Messages
          </Button>
        </div>
        <div className="w-full">
          <Button className="w-full flex justify-start pl-6" variant={"ghost"}>
            <FaTasks className="mr-2 h-4 w-4" /> Tasks
          </Button>
        </div>
        <div className="w-full">
          <Button className="w-full flex justify-start pl-6" variant={"ghost"}>
            <GoPeople className="mr-2 h-4 w-4" /> Members
          </Button>
        </div>
        <div className="w-full">
          <Button className="w-full flex justify-start pl-6" variant={"ghost"}>
            <CiSettings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </div>

        <Separator className="w-5/6" />
      </div>

      <div className="flex w-full flex-col gap-2  h-full justify-center items-center ">
        <div className="flex items-center justify-between w-5/6 ">
          <p className="text-sm font-semibold font-sans">My Projects</p>
          <Button variant={"ghost"}>
            <CiSettings className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between w-5/6  bg-muted  rounded-md px-2">
          <p className="font-semibold font-sans">Mobile App</p>
          <Button variant={"ghost"}>
            <BsThreeDots className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between w-5/6  rounded-md px-2">
          <p className="font-sans">Website Redisgn</p>
          <Button variant={"ghost"}>
            <BsThreeDots className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between w-5/6 rounded-md px-2">
          <p className="font-sans">Design System</p>
          <Button className="" variant={"ghost"}>
            <BsThreeDots className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between w-5/6  rounded-md px-2">
          <p className="font-sans ">Wireframes</p>
          <Button variant={"ghost"}>
            <BsThreeDots className="h-4 w-4" />
          </Button>
        </div>
        <Separator className="w-5/6" />
      </div>

      <div className="flex w-full flex-col gap-2  h-full justify-center items-center mt-2 ">
        <div className="flex flex-col bg-muted w-5/6 h-full py-6 rounded-lg gap-4 justify-center items-center">
          {" "}
          <span className="font-sans font-semibold">Thoughts Time</span>
          <div className="text-center">
            <p className="text-xs font-sans">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
          </div>
          <div>
            <Button className="font-sans" variant={"outline"}>Write a message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

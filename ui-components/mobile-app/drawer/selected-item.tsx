"use client";

import useStore from "@/store/state";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SelctedItem = () => {
  const selectedItem = useStore((state) => state.selectedItem);
  const setItemSelected = useStore((state) => state.setItemSelected);
  return (
    <div className="flex flex-col h-full w-full gap-4">
      <span className="font-sans text-3xl font-bold">
        {selectedItem?.title}
      </span>
      <div className="flex justify- gap-8 mt-10">
        <span className="font-sans ">Summary:</span>
        <span className="font-sans ">{selectedItem?.content}</span>
      </div>
      <div className="flex justify- gap-8 ">
        <span className="font-sans ">Assingee:</span>
        <span className="font-sans ">{selectedItem?.assignees}</span>
      </div>
      <div className="flex justify- gap-8 ">
        <span className="font-sans ">Project:</span>
        <span className="font-sans ">Project Name</span>
      </div>
      <div className="flex justify- gap-8 ">
        <span className="font-sans ">Status:</span>
        <span className="font-sans ">Task Status</span>
      </div>
      <div className="flex justify- gap-8 ">
        <span className="font-sans ">Priority:</span>
        <span className="font-sans ">Task Priority</span>
      </div>

      <Separator />
      <div>
        <Input
          className="border-0 focus-visible:ring-0  focus-visible:ring-offset-0"
          type="text"
          placeholder="Add a comment..."
        />
      </div>
      <Separator />

      <div>
        <span className="font-sans font-semibold text-xl">Description : </span>
      </div>
      <div className="mt-20 flex justify-end">
        <Button
          onClick={() => {
            setItemSelected(false);
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default SelctedItem;

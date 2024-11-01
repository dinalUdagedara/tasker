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
      <div className="flex gap-8 mt-10">
        <span className="font-sans ">Summary:</span>
        <span className="font-sans ">{selectedItem?.content}</span>
      </div>
      <div className="flex gap-8 ">
        <span className="font-sans ">Assingee:</span>
        {selectedItem?.assignees && selectedItem.assignees.length > 0 ? (
          <>
            <span className="font-sans ">{selectedItem?.assignees}</span>
          </>
        ) : (
          <>No assignees</>
        )}
      </div>
      <div className="flex  gap-8 ">
        <span className="font-sans ">Status:</span>
        <span className="font-sans ">{selectedItem?.status}</span>
      </div>
      <div className="flex  gap-8 ">
        <span className="font-sans ">Priority:</span>
        <span className="font-sans ">{selectedItem?.priority}</span>
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

      <div className="mt-20 mr-5 flex justify-end">
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

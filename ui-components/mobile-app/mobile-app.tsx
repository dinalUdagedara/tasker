"use client";
import useStore from "@/store/state";
import MobileAppContent from "./mobile-app-content/mobile-app-content";
import MobileAppHeader from "./mobile-app-header/mobile-app-header";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useEffect, useState } from "react";
import SelctedItem from "./drawer/selected-item";

const value = 0;

const MobileApp = () => {
  const [defaultValue, setDefaultValue] = useState<number>(10);
  const isItemSelected = useStore((state) => state.itemSelected);

  useEffect(() => {
    console.log("selected", isItemSelected);
    if (isItemSelected) {
      setDefaultValue(10);
    }
  }, [isItemSelected]);

  return (
    <div className="flex h-full flex-col">
      <ResizablePanelGroup direction="horizontal" className=" h-full  w-full ">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center">
            <span className="font-semibold">
              <div className="">
                <MobileAppHeader />
              </div>
              <div className="">
                <MobileAppContent />
              </div>
            </span>
          </div>
        </ResizablePanel>
        {/* Handler */}

        {isItemSelected && <ResizableHandle withHandle />}

        {isItemSelected && (
          <ResizablePanel defaultSize={defaultValue}>
            <div className="flex h-full items-center justify-center p-6">
              <SelctedItem />
            </div>
          </ResizablePanel>
        )}
      </ResizablePanelGroup>
    </div>
  );
};

export default MobileApp;

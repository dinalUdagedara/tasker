import MobileAppContent from "./mobile-app-content/mobile-app-content";
import MobileAppHeader from "./mobile-app-header/mobile-app-header";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const value = 0

const MobileApp = () => {
  return (
    <div className="flex h-full flex-col">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen h-full  w-full "
      >
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
        {/* <ResizableHandle withHandle /> */}


        <ResizablePanel defaultSize={value}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default MobileApp;

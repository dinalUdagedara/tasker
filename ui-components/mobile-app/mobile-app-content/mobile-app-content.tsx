"use client";

import Draggable from "react-draggable";
import MainComponent from "../draggable-example/main-component";

const MobileAppContent = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <MainComponent />
      {/* Parent container with relative positioning and set dimensions */}
      {/* <div className="relative w-[200px] h-[200px] bg-gray-200 flex justify-center items-center overflow-hidden">
        <Draggable bounds="parent">
          <div
            className="p-4 bg-blue-500 text-white rounded-lg shadow-lg cursor-move"
            style={{ width: "150px", textAlign: "center" }}
          >
            I can now be moved around!
          </div>
        </Draggable>
      </div> */}
    </div>
  );
};

export default MobileAppContent;

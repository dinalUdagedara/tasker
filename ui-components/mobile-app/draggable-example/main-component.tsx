"use client";
import { FC, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./container";
import { DraggableItemType, initialContainerss } from "@/lib/types"; // Adjust the path as necessary

const MainComponent: FC = () => {
  const [containers, setContainers] = useState<{
    [key: string]: DraggableItemType[];
  }>(initialContainerss); // Use the imported initial containers

  const handleDropItem = (itemId: number, targetContainerId: string) => {
    console.log(`Item ${itemId} dropped into ${targetContainerId}`);
    console.log("containers: ", containers);

    // Create a deep copy of the containers to avoid mutation
    const updatedContainers = { ...containers };

    // Find the dragged item and remove it from its original container
    let draggedItem: DraggableItemType | undefined;
    for (const containerId of Object.keys(containers)) {
      const itemIndex = updatedContainers[containerId].findIndex(
        (item) => item.id === itemId
      );

      if (itemIndex !== -1) {
        // Item found, remove it from the original container
        draggedItem = updatedContainers[containerId][itemIndex];
        updatedContainers[containerId].splice(itemIndex, 1); // Remove the item
        break; // Exit the loop after finding the item
      }
    }

    // If draggedItem is found, add it to the target container
    if (draggedItem) {
      // Make sure to initialize the target container if it doesn't exist
      if (!updatedContainers[targetContainerId]) {
        updatedContainers[targetContainerId] = [];
      }

      updatedContainers[targetContainerId].push(draggedItem); // Add the dragged item to the target container
      setContainers(updatedContainers); // Update the state with the new containers
    }
  };

  const handleAddNewItem = (
    item: DraggableItemType,
    targetContainerId: string
  ) => {
    // Create a deep copy of the containers to avoid mutation
    const updatedContainers = { ...containers };

    // Check if the target container exists, if not, initialize it
    if (!updatedContainers[targetContainerId]) {
      updatedContainers[targetContainerId] = [];
    }

    // Add the new item to the target container
    updatedContainers[targetContainerId].push(item);

    // Update the state with the new containers
    setContainers(updatedContainers);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-between items-start  w-full ">
        <Container
          id="container1"
          items={containers.container1}
          onDropItem={handleDropItem}
          onAddItem = {handleAddNewItem}
        />
        <Container
          id="container2"
          items={containers.container2}
          onDropItem={handleDropItem}
          onAddItem = {handleAddNewItem}
        />
        <Container
          id="container3"
          items={containers.container3}
          onDropItem={handleDropItem}
          onAddItem = {handleAddNewItem}
        />
      </div>
    </DndProvider>
  );
};

export default MainComponent;

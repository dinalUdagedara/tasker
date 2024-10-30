"use client";
import { FC, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./container";
import {
  DraggableItemType,
  DraggableItemTypeNew,
  initialContainerss,
} from "@/lib/types";
import useStore from "@/store/state";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const MainComponent: FC = () => {
  const [containers, setContainers] = useState<{
    [key: string]: DraggableItemType[];
  }>(initialContainerss); // Use the imported initial containers

  const [containersNEW, setContainersNEW] = useState<{
    [key: string]: DraggableItemTypeNew[];
  }>({
    toDo_Container: [],
    onProgress_Container: [],
    done_Container: [],
  });

  const setItemSelected = useStore((state) => state.setItemSelected);
  const setShowSideBar = useStore((state) => state.setShowSideBar);
  const setSelectedItem = useStore((state) => state.setSelectedItem);

  //jh733jcdtpa81eqk6hx3m6rht173et4k - sample UserID
  const userIDSample = "jh733jcdtpa81eqk6hx3m6rht173et4k";
  const userID: Id<"users"> = userIDSample as Id<"users">;

  const allTheTasks = useQuery(api.tasks.getTasksByID, {
    userId: userID,
  });

  console.log("Allthe tasks", allTheTasks);

  useEffect(() => {
    if (allTheTasks) {
      const updatedContainers: {
        toDo_Container: DraggableItemTypeNew[];
        onProgress_Container: DraggableItemTypeNew[];
        done_Container: DraggableItemTypeNew[];
      } = {
        toDo_Container: [],
        onProgress_Container: [],
        done_Container: [],
      };

      allTheTasks.forEach((task) => {
        const draggableTask: DraggableItemTypeNew = {
          _id: task._id,
          _creationTime: task._creationTime,
          title: task.title,
          content: task.content,
          status: task.status,
          priority: task.priority,
          assignees: task.assignees,
          comments: task.comments,
          files: task.files,
          creator: task.creator,
        };

        // Distribute tasks into containers based on their status
        if (task.status === "to-do") {
          updatedContainers.toDo_Container.push(draggableTask);
        } else if (task.status === "done") {
          updatedContainers.onProgress_Container.push(draggableTask);
        } else if (task.status === "in-progress") {
          updatedContainers.done_Container.push(draggableTask);
        }
      });

      setContainersNEW(updatedContainers);
      // setContainers(updatedContainers)
    }
  }, [allTheTasks]);

  useEffect(() => {
    console.log("containersNew", containersNEW);
  }, [containersNEW]);

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

  const handleSelectItem = (item: DraggableItemTypeNew) => {
    const containerID = item.title;
    setItemSelected(true);
    setShowSideBar(true);
    setSelectedItem(item);
    console.log("selected item: ", item);
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
          id="toDo_Container"
          items={containersNEW.toDo_Container}
          onDropItem={handleDropItem}
          onAddItem={handleAddNewItem}
          onSelectItem={handleSelectItem}
        />
        <Container
          id="onProgress_Container"
          items={containersNEW.onProgress_Container}
          onDropItem={handleDropItem}
          onAddItem={handleAddNewItem}
          onSelectItem={handleSelectItem}
        />
        <Container
          id="done_Container"
          items={containersNEW.done_Container}
          onDropItem={handleDropItem}
          onAddItem={handleAddNewItem}
          onSelectItem={handleSelectItem}
        />
      </div>
    </DndProvider>
  );
};

export default MainComponent;

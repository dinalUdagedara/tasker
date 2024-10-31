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
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const MainComponent: FC = () => {
  const [containers, setContainers] = useState<{
    [key: string]: DraggableItemType[];
  }>(); // Use the imported initial containers

  const [containersNEW, setContainersNEW] = useState<{
    [key: string]: DraggableItemTypeNew[];
  }>({
    to_do: [],
    on_progress: [],
    done: [],
  });

  const setItemSelected = useStore((state) => state.setItemSelected);
  const setShowSideBar = useStore((state) => state.setShowSideBar);
  const setSelectedItem = useStore((state) => state.setSelectedItem);
  const dropTask = useMutation(api.tasks.droppingTasks);
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
        to_do: DraggableItemTypeNew[];
        on_progress: DraggableItemTypeNew[];
        done: DraggableItemTypeNew[];
      } = {
        to_do: [],
        on_progress: [],
        done: [],
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
        if (task.status === "to_do") {
          updatedContainers.to_do.push(draggableTask);
        } else if (task.status === "done") {
          updatedContainers.done.push(draggableTask);
        } else if (task.status === "on_progress") {
          updatedContainers.on_progress.push(draggableTask);
        }
      });

      setContainersNEW(updatedContainers);
      // setContainers(updatedContainers)
    }
  }, [allTheTasks]);

  useEffect(() => {
    console.log("containersNew", containersNEW);
  }, [containersNEW]);

  const handleDropItem = (item: Id<"tasks">, targetContainerId: string) => {
    console.log("Item ID", item);
    console.log("Dropped Into the Container ", targetContainerId);
    dropTask({ taskID: item, targetStatus: targetContainerId });
  };

  const handleSelectItem = (item: DraggableItemTypeNew) => {
    const containerID = item.title;
    setItemSelected(true);
    setShowSideBar(true);
    setSelectedItem(item);
    console.log("selected item: ", item);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-between items-start  w-full ">
        <Container
          id="to_do"
          items={containersNEW.to_do}
          onDropItem={handleDropItem}
          onSelectItem={handleSelectItem}
        />
        <Container
          id="on_progress"
          items={containersNEW.on_progress}
          onDropItem={handleDropItem}
          onSelectItem={handleSelectItem}
        />
        <Container
          id="done"
          items={containersNEW.done}
          onDropItem={handleDropItem}
          onSelectItem={handleSelectItem}
        />
      </div>
    </DndProvider>
  );
};

export default MainComponent;

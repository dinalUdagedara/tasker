"use client";
import { FC, useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./dragabble-item";
import {
  DraggableItemType,
  DraggableItemTypeNew,
  sampleUserID,
} from "@/lib/types";
import { FaSquarePlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuCheckSquare } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useStore from "@/store/state";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useSession } from "next-auth/react";

interface ContainerProps {
  id: string;
  // items: DraggableItemType[];
  items: DraggableItemTypeNew[];

  onDropItem: (item: Id<"tasks">, targetContainerId: string) => void;
  onSelectItem: (item: DraggableItemTypeNew) => void;
}

const Container: FC<ContainerProps> = ({
  id,
  items,
  onDropItem,
  onSelectItem,
}) => {
  const [contentTitle, setContentTitle] = useState("");
  const [content, setContent] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [containerItems, setContainerItems] =
    useState<DraggableItemTypeNew[]>(items);
  const [showForm, setShowForm] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const setItemSelected = useStore((state) => state.setItemSelected);
  const addTask = useMutation(api.tasks.addNewTask);

  const { data: session, status } = useSession();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item: { _id: Id<"tasks"> }) => {
      console.log("Item", item);
      onDropItem(item._id, id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  drop(ref);
  const handleAddItem = () => {
    console.log("Priority", priority);

    addTask({
      content: content,
      creator: sampleUserID,
      priority: priority,
      status: id,
      title: contentTitle,
      email: session?.user?.email || "",
    });

    // Reset form fields after adding the item
    setContentTitle("");
    setContent("");
    setAssignee("");
    setPriority("Medium");
    setShowForm(false);
  };

  const selectItem = (item: DraggableItemTypeNew) => {
    onSelectItem(item);
  };

  // Detect outside clicks to save item
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // setItemSelected(false);
      if (
        showForm &&
        formRef.current &&
        !formRef.current.contains(event.target as Node) &&
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        contentTitle
      ) {
        handleAddItem();
      } else if (
        showForm &&
        formRef.current &&
        !formRef.current.contains(event.target as Node) &&
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setShowForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm, contentTitle, content, assignee, priority]);

  useEffect(() => {
    if (items) setContainerItems(items);
  }, [items]);

  return (
    <div
      ref={ref}
      className={`relative w-1/3 min-h-[200px] p-4 m-4 rounded-lg shadow-xl transition-all duration-300
        ${
          isOver
            ? "bg-gray-200 dark:bg-muted/25"
            : "bg-gray-100 dark:bg-muted/70"
        }
      `}
    >
      <div className="flex items-center min-h-[24px] justify-between">
        <div className="flex gap-2 items-center justify-center">
          <span
            className={`  ${
              containerItems[0]?.title === "To Do" ? "" : "bg"
            } w-3 h-3  rounded-full mr-2`}
          ></span>
          {containerItems[0] ? (
            <span className="text-lg font-semibold font-sans">
              {containerItems[0].status}
            </span>
          ) : (
            <span className="text-lg font-semibold font-sans">
              No Items Here
            </span>
          )}
          <span className="w-5 h-5 bg-slate-200 dark:bg-slate-300 dark:text-black rounded-full flex items-center justify-center text-xs">
            {containerItems.length}
          </span>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="bg-inherit border-0"
          onClick={() => setShowForm((prev) => !prev)}
        >
          <FaSquarePlus className="w-4 h-4" color="gray" />
        </Button>
      </div>

      {containerItems.map((item) => (
        <div
          onClick={() => {
            selectItem(item);
          }}
        >
          <DraggableItem
            _id={item._id}
            key={item._id}
            content={item.content}
            assignees={item.assignees}
            comments={item.comments}
            files={item.files}
            priority={item.priority}
            title={item.title}
            _creationTime={0}
            status={""}
            creator={sampleUserID}
          />
        </div>
      ))}

      {showForm && (
        <div
          ref={formRef}
          className="p-4 bg-gray-50 dark:bg-black/40 rounded-lg shadow-sm mb-2 flex flex-col gap-2 cursor-pointer"
        >
          <div className="relative">
            <FaFileLines className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              id="contentTitle"
              value={contentTitle}
              onChange={(e) => setContentTitle(e.target.value)}
              placeholder="Task"
              required
              className="pl-10 pr-3 border-none focus:border-none focus:ring-0 focus:outline-none"
            />
          </div>

          <Input
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Short Description about the task"
            required
            className="border-none outline-none focus:outline-none focus:ring-0 focus:border-none hover:border-none"
          />

          <div className="relative">
            <input
              id="assignee"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              placeholder=""
              required
              className="pl-10 pr-3 border-none focus:border-none focus:ring-0 focus:outline-none"
            />
            {assignee === "" && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                <FaUsers className="text-gray-500" />
                <span className="ml-1 text-gray-500">Add Assignee</span>
              </div>
            )}
          </div>
          <Select
            onValueChange={(value) => {
              // console.log("Priotiry Change ", value);
              setPriority(value);
            }}
            value={priority}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <div ref={selectRef}>
                <SelectItem value="High">High</SelectItem>
              </div>
              <div ref={selectRef}>
                <SelectItem value="Medium">Medium</SelectItem>
              </div>
              <div ref={selectRef}>
                <SelectItem value="Low">Low</SelectItem>
              </div>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default Container;

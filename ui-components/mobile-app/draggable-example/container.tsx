import { FC, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./dragabble-item";
import { DraggableItemType } from "@/lib/types";
import { FaSquarePlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContainerProps {
  id: string;
  items: DraggableItemType[];
  onDropItem: (itemId: number, targetContainerId: string) => void;
  onAddItem: (item: DraggableItemType, targetContainerId: string) => void;
}

const Container: FC<ContainerProps> = ({
  id,
  items,
  onDropItem,
  onAddItem,
}) => {
  const [contentTitle, setContentTitle] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [containerItems, setContainerItems] =
    useState<DraggableItemType[]>(items);
  const [showForm, setShowForm] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item: { id: number }) => onDropItem(item.id, id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  drop(ref);
  const handleAddItem = () => {
    const newItem: DraggableItemType = {
      id: Date.now(),
      title,
      priority,
      contentTitle,
      content,
      comments: [],
      files: [],
      assignees: [assignee],
    };

    // Use onAddItem prop to add the new item to the container
    onAddItem(newItem, id);

    // Reset form fields after adding the item
    setContentTitle("");
    setContent("");
    setAssignee("");
    setPriority("Medium");
    setShowForm(false);
  };

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
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          {containerItems[0] ? (
            <span className="text-lg font-semibold font-sans">
              {containerItems[0].title}
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
        <DraggableItem
          key={item.id}
          id={item.id}
          content={item.content}
          assignees={item.assignees}
          comments={item.comments}
          contentTitle={item.contentTitle}
          files={item.files}
          priority={item.priority}
          title={item.title}
        />
      ))}

      {showForm && (
        <div className="p-4 bg-gray-50 dark:bg-black/40 rounded-lg shadow-sm mb-2 flex flex-col gap-2 cursor-pointer">
          <Input
            id="contentTitle"
            value={contentTitle}
            onChange={(e) => setContentTitle(e.target.value)}
            placeholder="Task"
            required
          />
          <Input
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add Content"
            required
          />
          <Input
            id="assignee"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            placeholder="Add Assignee"
            required
          />
          <Select
            onValueChange={(value) => setPriority(value)}
            value={priority}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleAddItem} className="mt-2">
            Add Item
          </Button>
        </div>
      )}
    </div>
  );
};

export default Container;

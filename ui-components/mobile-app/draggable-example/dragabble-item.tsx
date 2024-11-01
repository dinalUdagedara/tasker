import { FC, useRef } from "react";
import { useDrag } from "react-dnd";
import { DraggableItemType, DraggableItemTypeNew } from "@/lib/types";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { FaFolderOpen } from "react-icons/fa6";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { MdDelete } from "react-icons/md";

const DraggableItem: FC<DraggableItemTypeNew> = ({
  _id,
  content,
  assignees,
  comments,
  title,
  files,
  priority,
}) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const deleteTask = useMutation(api.tasks.deleteTask);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { _id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  drag(dragRef);
  const commentCount = comments.length;
  const fileCount = files.length;

  const handleDelete = () => {
    deleteTask({
      id: _id,
    });
  };

  return (
    <div
      ref={dragRef}
      className={`p-4 bg-gray-50 dark:bg-black/40 rounded-lg shadow-sm  mb-2 flex flex-col gap-2 cursor-pointer`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onMouseDown={(e) => e.currentTarget.classList.add("cursor-grabbing")}
      onMouseUp={(e) => e.currentTarget.classList.remove("cursor-grabbing")}
    >
      <div className="flex justify-between items-center">
        <span
          className={`
    ${
      priority === "High"
        ? "bg-red-500 "
        : priority === "Medium"
          ? "bg-yellow-300 text-yellow-800"
          : "bg-green-400 text-green-900"
    } 
    p-1 rounded-md text-xs font-semibold font-sans
  `}
        >
          {priority}
        </span>

        <span>
          <Button
            // onClick={handleDelete}
            variant={"outline"}
            size={"icon"}
            className="border-0"
          >
            <MdDelete className="h-5 w-5" />
          </Button>
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-lg font-sans font-bold">{title}</span>
        <span className="text-sm opacity-40">{content}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Avatar className="-ml-2 first:ml-0">
            <AvatarImage src="https://i.pravatar.cc/150?img=1" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2">
            <AvatarImage src="https://i.pravatar.cc/150?img=2" />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center gap-1 opacity-50">
          <LiaCommentDotsSolid className="w-5 h-5" />

          <span>{commentCount} comments</span>
        </div>
        <div className="flex items-center gap-1 opacity-50">
          <FaFolderOpen className="w-5 h-5" />

          <span>{fileCount} files</span>
        </div>
      </div>
    </div>
  );
};

export default DraggableItem;

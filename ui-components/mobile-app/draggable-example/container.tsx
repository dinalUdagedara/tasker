import { FC, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./dragabble-item";
import { DraggableItemType } from "@/lib/types";
import { FaSquarePlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import AddItemForm from "./add-item"; // Import the new form component

interface ContainerProps {
  id: string;
  items: DraggableItemType[];
  onDropItem: (itemId: number, targetContainerId: string) => void;
}

const Container: FC<ContainerProps> = ({ id, items, onDropItem }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [containerItems, setContainerItems] =
    useState<DraggableItemType[]>(items);
  const [showForm, setShowForm] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item: { id: number }) => onDropItem(item.id, id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  drop(ref);

  const handleAddItem = (newItem: DraggableItemType) => {
    setContainerItems((prevItems) => [...prevItems, newItem]);
    setShowForm(false); // Hide the form after adding an item
  };

  return (
    <div
      ref={ref}
      className={`relative w-1/3 min-h-[200px] p-4 m-4 rounded-lg shadow-xl transition-all duration-300
        ${
          isOver
            ? "bg-gray-200 dark:bg-muted/25"
            : "bg-gray-100 dark:bg-muted/70"
        }`}
    >
      {showForm && (
        <div>
          <AddItemForm
            onAddItem={handleAddItem}
            onClose={() => setShowForm(false)}
            showForm={showForm}
          />
        </div>
      )}
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
    </div>
  );
};

export default Container;

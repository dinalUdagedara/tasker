// DraggableItem.tsx
import { FC, useRef } from "react";
import { useDrag } from "react-dnd";
import { DraggableItemType } from "@/lib/types";

const DraggableItem: FC<DraggableItemType> = ({ id, content }) => {
  const dragRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  drag(dragRef);

  return (
    <div
      ref={dragRef}
      className={`p-4 bg-blue-500 text-white rounded-lg shadow-lg cursor-move mb-2`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {content}
    </div>
  );
};

export default DraggableItem;

// Container.tsx
import { FC, useRef } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './dragabbleite';
import { DraggableItemType } from '@/lib/types';

interface ContainerProps {
  id: string;
  items: DraggableItemType[];
  onDropItem: (itemId: number, targetContainerId: string) => void;
}

const Container: FC<ContainerProps> = ({ id, items, onDropItem }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item: { id: number }) => onDropItem(item.id, id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  // Attach the drop ref to the DOM element ref using the `drop` function
  drop(ref);

  return (
    <div
      ref={ref}
      className={`w-[200px] h-[200px] p-4 m-4 rounded-lg shadow-lg ${
        isOver ? 'bg-green-200' : 'bg-gray-200'
      }`}
    >
      {items.map((item) => (
        <DraggableItem key={item.id} id={item.id} content={item.content} />
      ))}
    </div>
  );
};

export default Container;

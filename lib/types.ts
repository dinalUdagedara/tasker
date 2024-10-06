export type DraggableItemType = {
    id: number;
    content: string;
  };
  
  // Define initial container items
export const initialContainers = {
    container1: [
      { id: 1, content: "Item 1" },
      { id: 2, content: "Item 2" },
    ],
    container2: [{ id: 3, content: "Item 3" }],
    container3: [{ id: 4, content: "Item 4" }],
  };
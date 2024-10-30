import { DraggableItemType, DraggableItemTypeNew } from "@/lib/types";
import { create } from "zustand";

interface StoreState {
  count: number;
  itemSelected: boolean;
  showSideBar: boolean;
  selectedItem: DraggableItemTypeNew | null;
  increment: () => void;
  decrement: () => void;
  setItemSelected: (newvalue: boolean) => void;
  setShowSideBar: (newvalue: boolean) => void;
  setSelectedItem: (newvalue: DraggableItemTypeNew | null) => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  itemSelected: false,
  showSideBar: false,
  selectedItem: null,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setItemSelected: (newValue: boolean) => set({ itemSelected: newValue }),
  setShowSideBar: (newValue: boolean) => set({ showSideBar: newValue }),
  setSelectedItem: (newItem: DraggableItemTypeNew | null) =>
    set({ selectedItem: newItem }),
}));

export default useStore;

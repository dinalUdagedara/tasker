import { create } from "zustand";

interface StoreState {
  count: number;
  itemSelected: boolean;
  showSideBar: boolean;
  increment: () => void;
  decrement: () => void;
  setItemSelected: (newvalue: boolean) => void;
  setShowSideBar: (newvalue: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  itemSelected: false,
  showSideBar: false,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setItemSelected: (newValue: boolean) => set({ itemSelected: newValue }),
  setShowSideBar: (newValue: boolean) => set({ showSideBar: newValue }),
}));

export default useStore;

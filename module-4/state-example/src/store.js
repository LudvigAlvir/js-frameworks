import { create } from "zustand";

export const useStore = create((set) => ({
  count: 1,
  name: "Ludvig",
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  setCount: (num) =>
    set(() => ({
      count: num,
    })),
  setName: (name) =>
    set(() => ({
      name: name,
    })),
}));

import { create } from "zustand";

export const useNotes = create((set) => ({
  notes: [],
  addNote: (note) =>
    set((state) => ({
      notes: [...state.notes, note],
    })),
}));

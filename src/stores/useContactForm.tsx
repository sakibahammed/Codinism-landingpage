import { create } from "zustand";

type ContactStore = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const useContactForm = create<ContactStore>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open }),
}));

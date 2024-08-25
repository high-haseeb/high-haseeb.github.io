import { create } from "zustand";

export type NavLink = "home" | "about me" | "projects" | "blog" | "contact"| undefined;

interface HoveredLinkState {
  hoveredLink: NavLink;
  setHoveredLink: (hoveredLink: NavLink) => void;
}

const useHoveredLinkStore = create<HoveredLinkState>((set) => ({
  hoveredLink: undefined,
  setHoveredLink: (hoveredLink) => {
    set({ hoveredLink }); 
  },
}));

export default useHoveredLinkStore;

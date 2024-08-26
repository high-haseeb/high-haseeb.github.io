import { create } from "zustand";

const useRobotStore = create((set) => ({
  position: [0, 0, 0],
  angles :[0, 0, 0],
  outOfReach: false,
  setOutOfReach: (outOfReach) => set({ outOfReach }),
  setPosition: (newPosition) => set({ position: newPosition }),
  setAngles: (angles) => set({ angles: angles }),
}));

export default useRobotStore;

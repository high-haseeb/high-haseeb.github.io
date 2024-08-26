import { create } from "zustand";

const useRobotStore = create((set) => ({
  position: [0, 0, 0],
  angles: [0, 0, 0],
  outOfReach: false,
  pathPoints: [0, 0, 0, 1, 1, 1], // Add pathPoints to track the robot's path

  setOutOfReach: (outOfReach) => set({ outOfReach }),
  setPosition: (newPosition) => set({ position: newPosition }),
  setAngles: (angles) => set({ angles }),
  addPathPoint: (point) => set((state) => ({ pathPoints: [...state.pathPoints, point] })), // Method to add points
}));

export default useRobotStore;

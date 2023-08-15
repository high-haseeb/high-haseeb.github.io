import { create } from "zustand";

export const useBoxStore = create((set) => ({
  balls: [],
  ballIndex: 0,
  addBall: () => {
    set((state) => ({ ballIndex: state.ballIndex + 1 }));
    set((state) => ({ balls: [...state.balls, { name: state.ballIndex }] }));
  },
  removeBall: (ballIndex) => {
    set((state) => ({ balls: [...state.balls.filter(item => item.name !== ballIndex)]}))
  }
}));

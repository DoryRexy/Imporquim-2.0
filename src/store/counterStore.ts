import { create } from "zustand";

interface ICounterState {
  count: number;
  title: string;
  mMovilEnabled: boolean;
  mMovilClass: string;
  increment: (value: number) => void;
  changeMenuMovil: (input: boolean) => void;
}

export const useCounterStore = create<ICounterState>((set) => ({
  count: 10,
  title: "Título",
  mMovilEnabled: false,
  mMovilClass: "hidden",
  increment: (value: number) =>
    set((state) => ({ count: state.count + value })),
  changeMenuMovil: (input) =>
    set((state) => ({
      ...state,
      mMovilEnabled: input,
      mMovilClass: input ? "" : "hidden",
    })),
}));

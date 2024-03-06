import { create } from "zustand";

export interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    incrementBy: (amount: number) => void;
    reset: () => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
    incrementBy: (amount) => set(state => {
        const {count} = state;
        return { count: count + amount };
    }),
    decrement: () => set({ count: get().count - 1 }),
    reset: () => set({ count: 0 }),
}));
import { create } from "zustand";

const useCountStore = create((set) => {
  return {
    count: 0,
    inc: () => {
      set((state) => ({ count: state.count + 1 }));
    },
    des: () => {
      set((state) => ({ count: state.count - 1 }));
    },
    set: (newValue) => {
      set({ count: newValue });
    },
  };
});

export default useCountStore;

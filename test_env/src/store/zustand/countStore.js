const countStoreSlice = (set) => {
  return {
    count: 0,
    inc: () => {
      set((state) => ({ count: state.count + 1 }));
    },
    dec: () => {
      set((state) => ({ count: state.count - 1 }));
    },
    rst: () => {
      set({ count: 0 });
    },
  };
};

export default countStoreSlice;

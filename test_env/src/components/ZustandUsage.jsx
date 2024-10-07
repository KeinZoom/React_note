import { create } from "zustand";

const useStore = create((set) => {
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
});

function ZustandUsage() {
  const { count, inc, dec, rst } = useStore();
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => inc()}>inc</button>
      <button onClick={() => dec()}>dec</button>
      <button onClick={() => rst()}>rst</button>
    </div>
  );
}

export default ZustandUsage;

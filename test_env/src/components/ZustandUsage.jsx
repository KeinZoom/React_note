import { create } from "zustand";
import { useEffect } from "react";
import countStoreSlice from "../store/zustand/countStore";
import channelStoreSlice from "../store/zustand/channelStore";

// const useStore = create((set) => {
//   return {
//     count: 0,
//     inc: () => {
//       set((state) => ({ count: state.count + 1 }));
//     },
//     dec: () => {
//       set((state) => ({ count: state.count - 1 }));
//     },
//     rst: () => {
//       set({ count: 0 });
//     },

//     productList: [],
//     getProductList: async () => {
//       const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       set({ productList: [...data.products] });
//     },
//   };
// });

const useStore = create((...a) => {
  return {
    ...countStoreSlice(...a),
    ...channelStoreSlice(...a),
  };
});

function ZustandUsage() {
  const { count, inc, dec, rst, productList, getProductList } = useStore();

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => inc()}>inc</button>
      <button onClick={() => dec()}>dec</button>
      <button onClick={() => rst()}>rst</button>
      <ul>
        {productList.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </ul>
    </div>
  );
}

export default ZustandUsage;

const channelStoreSlice = (set) => {
  return {
    productList: [],
    getProductList: async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      set({ productList: [...data.products] });
    },
  };
};

export default channelStoreSlice;

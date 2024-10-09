import { useEffect, useState } from "react";
import { PhoneItemType, fetchPhoneData } from "@/apis/phone";

export default function useProducts() {
  const [productList, setProductList] = useState<PhoneItemType[] | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetchPhoneData();
        setProductList(res.data.products);
      } catch (error) {
        throw new Error("error occurred");
      }
    }

    fetchProducts();
  }, []);

  return productList;
}

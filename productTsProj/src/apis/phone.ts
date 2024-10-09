import { http } from "@/utils";
import ProductDataType from "./shared";

interface PhoneDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface PhoneItemType {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  dimensions: PhoneDimensions;
  discountPercentage: number;
  images: string[];
  [options: string]: any;
}

export function fetchPhoneData() {
  return http.request<ProductDataType<PhoneItemType>>({
    url: "/category/smartphones",
  });
}

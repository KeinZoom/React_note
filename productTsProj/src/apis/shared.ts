interface ProductDataType<T> {
  limit: number;
  products: T[];
  skip: number;
  total: number;
}

export default ProductDataType;

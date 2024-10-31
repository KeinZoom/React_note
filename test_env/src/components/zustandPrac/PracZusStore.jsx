import useCountStore from "./zus_store";

export default function PracZusStore() {
  const { count, inc, des, set } = useCountStore();

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => inc()}>inc</button>
      <button onClick={() => des()}>des</button>
      <button onClick={() => set(10)}>set10</button>
    </div>
  );
}

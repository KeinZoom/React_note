import { useDispatch, useSelector } from "react-redux";
import {
  increament,
  descreament,
  setvalue,
} from "../store_prac/modules/numberStore";
import { inc, des, set, setWithDelay } from "../store_prac/modules/fibStore";
import { fetchArticles } from "../store_prac/modules/articleStore";
import { useMemo } from "react";

export default function NumberStorePrac() {
  const { number } = useSelector((state) => state.number);
  const { article } = useSelector((state) => state.article);
  const { fibCount } = useSelector((state) => state.fib);

  function fibFunc(n) {
    if (n < 3) {
      return 1;
    } else {
      return fibFunc(n - 2) + fibFunc(n - 1);
    }
  }

  const fibValue = useMemo(() => {
    return fibFunc(fibCount);
  }, [fibCount]);

  const dispatch = useDispatch();

  const handleClickInc = () => {
    dispatch(inc());
  };
  const handleClickDes = () => {
    dispatch(des());
  };
  const handleClickSet = () => {
    dispatch(set(10));
  };

  const handleSetDelay = () => {
    dispatch(setWithDelay(10));
  };
  return (
    <div>
      <div>{fibValue}</div>
      <button onClick={handleClickInc}>inc</button>
      <button onClick={handleClickDes}>des</button>
      <button onClick={handleClickSet}>set10</button>
      <button onClick={handleSetDelay}>set10 delay</button>
    </div>
  );
}

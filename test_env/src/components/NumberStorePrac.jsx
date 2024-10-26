import { useDispatch, useSelector } from "react-redux";
import {
  increament,
  descreament,
  setvalue,
} from "../store_prac/modules/numberStore";
import { fetchArticles } from "../store_prac/modules/articleStore";

export default function NumberStorePrac() {
  const { number } = useSelector((state) => state.number);
  const { article } = useSelector((state) => state.article);

  const dispatch = useDispatch();

  const handleClickInc = () => {
    dispatch(increament());
  };
  const handleClickDes = () => {
    dispatch(descreament());
  };
  const handleClickSet = () => {
    dispatch(setvalue(10));
  };

  const handleGetArticle = () => {
    dispatch(fetchArticles());
  };
  return (
    <div>
      <div>{number}</div>
      <button onClick={handleClickInc}>inc</button>
      <button onClick={handleClickDes}>des</button>
      <button onClick={handleClickSet}>set10</button>
      <button onClick={handleGetArticle}>get button</button>
    </div>
  );
}

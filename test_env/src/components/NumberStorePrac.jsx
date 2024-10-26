import { useDispatch, useSelector } from "react-redux";
import {
  increament,
  descreament,
  setvalue,
} from "../store_prac/modules/numberStore";

export default function NumberStorePrac() {
  const { number } = useSelector((state) => state.number);

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

  return (
    <div>
      <div>{number}</div>
      <button onClick={handleClickInc}>inc</button>
      <button onClick={handleClickDes}>des</button>
      <button onClick={handleClickSet}>set10</button>
    </div>
  );
}

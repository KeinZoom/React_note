import { useSelector, useDispatch } from "react-redux";
import { increment, descrement } from "../store/modules/counterStore";
import { fetchChannels } from "../store/modules/channelStore";

function StoreUsage() {
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(descrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(fetchChannels())}>Load async data</button>
    </div>
  );
}

export default StoreUsage;

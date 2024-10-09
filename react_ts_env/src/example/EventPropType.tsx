interface Prop {
  title: string;
  onGetMsg?: (msg: string) => void;
}

function SonComponent(props: Prop) {
  const { title, onGetMsg } = props;

  const handleMsg = () => {
    onGetMsg?.("hello. this is Son.");
  };

  return (
    <div>
      <button onClick={handleMsg}>{title}</button>
    </div>
  );
}

function EventPropType() {
  const onGetMsg = (msg: string) => {
    console.log(msg);
  };

  return (
    <div>
      <SonComponent title="p2s" onGetMsg={onGetMsg} />
    </div>
  );
}

export default EventPropType;

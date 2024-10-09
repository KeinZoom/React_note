// type Prop = {
//   name: string;
// };

interface Prop {
  name: string;
}

function Son(props: Prop) {
  const { name } = props;
  return <div>{name}</div>;
}

function PropType() {
  return (
    <div>
      <Son name={"hello"} />
    </div>
  );
}

export default PropType;

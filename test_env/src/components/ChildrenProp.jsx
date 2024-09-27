function Children({ children }) {
  console.log(children);
}

function ChildrenProp() {
  return (
    <div>
      <Children>
        <button>ok</button>
      </Children>
    </div>
  );
}

export default ChildrenProp;

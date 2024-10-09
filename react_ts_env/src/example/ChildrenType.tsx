import React from "react";

interface Prop {
  className: string;
  children: React.ReactNode;
}

function Button(props: Prop) {
  const { className, children } = props;

  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  );
}

function ChildrenType() {
  return (
    <Button className="btn">
      <div>hello</div>
    </Button>
  );
}

export default ChildrenType;

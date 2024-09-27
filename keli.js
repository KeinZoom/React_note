function f(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

console.log(f(1)(2)(3));

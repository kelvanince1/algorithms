function build() {
  const arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    })
  }
  return arr;
}

var fs = build();

fs[0]();
fs[1]();
fs[2]();

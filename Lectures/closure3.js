function base(n) {
  return function(num) {
    return n + num;
  }
}

let addFive = base(5);
addFive(10);
addFive(15);

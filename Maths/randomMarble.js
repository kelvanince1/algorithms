const marbles = [
    { color: 'yellow', number: 50 },
    { color: 'blue', number: 50 }
  ];
  
  // requested method
  function randomSample (marbles) {
    // [0..1) * sum of weight
    let sumOfMarbles =
      Math.random() *
      marbles.reduce((sum, { number }) => sum + number, 0);
  
    // first marble n where sum of all marbles for [0..n] > random number
    const { color } = marbles.find(
      ({ number }) => (sumOfMarbles -= number) < 0
    );
  
    return color;
  }
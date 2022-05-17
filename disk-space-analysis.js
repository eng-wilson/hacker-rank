function segment(x, space) {
  let minimum = space[0];
  let maxValue = 0;

  for (let i = 0; i < space.length - (x - 1); i++) {
    minimum = space[i];
    for (let j = 0; j < x; j++) {
      if (space[j] < minimum) {
        minimum = space[j];
      }
    }
    if (minimum > maxValue) {
      maxValue = minimum;
    }
  }

  console.log(maxValue);
  // return maxValue;
}

segment(3, [2, 5, 4, 6, 8]);

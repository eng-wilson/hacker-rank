function countingValleys(steps, path) {
  let valleys = 0;
  let height = 0;

  for (let step = 0; step < steps; step++) {
    if (path[step] === "D") {
      height--;
    } else {
      if (height === -1) {
        valleys++;
      }
      height++;
    }
  }

  return valleys;
}

countingValleys(8, "UDDDUDUU");

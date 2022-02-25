function jumpingOnClouds(c) {
  let steps = 0;

  for (let cloud = 0; cloud < c.length; cloud++) {
    if (cloud > 0) {
      steps++;
    }
    if (cloud < c.length - 1 && c[cloud + 2] === 0) {
      cloud++;
    }

    if (c[cloud + 1] === 1) {
      cloud++;
    }
  }

  return steps;
}

jumpingOnClouds([0, 0, 0, 0, 1, 0]);

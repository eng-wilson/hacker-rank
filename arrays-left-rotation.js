function rotLeft(a, d) {
  let result = a;

  for (let index = 0; index < d; index++) {
    result.push(result[0]);
    result.shift();
  }

  return result;
}

rotLeft(5, 4);

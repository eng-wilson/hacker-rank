function hourglassSum(arr) {
  let result = 0;

  for (let row = 0; row < arr.length - 2; row++) {
    for (let column = 0; column < arr[0].length - 2; column++) {
      let sum =
        arr[row][column] +
        arr[row][column + 1] +
        arr[row][column + 2] +
        arr[row + 1][column + 1] +
        arr[row + 2][column] +
        arr[row + 2][column + 1] +
        arr[row + 2][column + 2];

      if (row === 0 && column === 0) {
        result = sum;
      } else if (sum > result) {
        result = sum;
      }
    }
  }

  return result;
}

hourglassSum([
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]);

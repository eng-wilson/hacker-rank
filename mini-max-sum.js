function miniMaxSum(arr) {
  const sortedArr = arr.sort();
  let maxSum = 0;
  let minSum = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (i < sortedArr.length - 1) {
      minSum += arr[i];
    }
    if (i > 0) {
      maxSum += arr[i];
    }
  }

  console.log(`${minSum} ${maxSum}`);
}

miniMaxSum([1, 2, 3, 4, 5]);

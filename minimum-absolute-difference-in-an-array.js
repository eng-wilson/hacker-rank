function minimumAbsoluteDifference(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  let minDiff = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    if (i === 0) {
      minDiff = Math.abs(sortedArray[i] - sortedArray[i + 1]);
    } else if (Math.abs(sortedArray[i - 1] - sortedArray[i]) < minDiff) {
      minDiff = Math.abs(sortedArray[i - 1] - sortedArray[i]);
    }
  }

  return minDiff;
}

minimumAbsoluteDifference([3, -7, 0]);

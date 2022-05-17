function luckBalance(k, contests) {
  let sortedArray = contests.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });
  let importantContests = 0;
  let loses = 0;
  let luck = 0;

  sortedArray.forEach((contest) => {
    if (contest[1] === 1) {
      importantContests++;
    }
  });

  loses = importantContests - k;

  // console.log(sortedArray);

  for (let i = 0; i < sortedArray.length; i++) {
    if (loses > 0) {
      luck = luck - sortedArray[i][0];
      loses--;
    } else {
      luck = luck + sortedArray[i][0];
    }
  }

  // console.log(luck);

  return luck;
}

luckBalance(1, [
  [90, 1],
  [77, 0],
  [68, 0],
  [57, 0],
  [83, 1],
  [49, 0],
  [73, 0],
  [63, 0],
  [61, 0],
  [66, 1],
]);

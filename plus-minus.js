function plusMinus(arr) {
  let positiveCounter = 0;
  let negativeCounter = 0;
  let zeroCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCounter++;
    }
    if (arr[i] < 0) {
      negativeCounter++;
    }
    if (arr[i] === 0) {
      zeroCounter++;
    }
  }

  console.log((positiveCounter / arr.length).toPrecision(6));
  console.log((negativeCounter / arr.length).toPrecision(6));
  console.log((zeroCounter / arr.length).toPrecision(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);

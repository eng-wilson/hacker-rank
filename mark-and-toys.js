function compararNumeros(a, b) {
  return a - b;
}

function maximumToys(prices, k) {
  let toys = prices.sort(compararNumeros);
  let total = k;
  let count = 0;

  toys.forEach((toy) => {
    if (total - toy >= 0) {
      total = total - toy;
      count++;
    }
  });

  return count;
}

maximumToys([1, 12, 5, 111, 200, 1000, 10], 50);

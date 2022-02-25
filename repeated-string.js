function repeatedString(s, n) {
  let counter = 0;

  for (let index = 0; index < s.length; index++) {
    if (s[index] === "a") {
      counter++;
    }
  }

  counter = counter * Math.floor(n / s.length);

  for (let index = 0; index < n % s.length; index++) {
    if (s[index] === "a") {
      counter++;
    }
  }

  return counter;
}

repeatedString("a", 1000000000000);

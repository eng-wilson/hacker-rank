function makeAnagram(a, b) {
  let firstHash = {};
  let secondHash = {};
  let deletions = 0;

  a.split("").forEach((letter) => {
    if (b.includes(letter)) {
      if (firstHash[letter]) {
        firstHash[letter]++;
      } else {
        firstHash[letter] = 1;
      }
    } else {
      deletions++;
    }
  });

  b.split("").forEach((letter) => {
    if (a.includes(letter)) {
      if (secondHash[letter]) {
        secondHash[letter]++;
      } else {
        secondHash[letter] = 1;
      }
    } else {
      deletions++;
    }
  });

  Object.keys(firstHash).forEach((letter) => {
    if (firstHash[letter] !== secondHash[letter]) {
      deletions = deletions + Math.abs(firstHash[letter] - secondHash[letter]);
    }
  });

  return deletions;
}

makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke");

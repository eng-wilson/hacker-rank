function checkMagazine(magazine, note) {
  let answer = "";
  let hash = {};

  magazine.forEach((word) => {
    if (hash[word]) {
      hash[word]++;
    } else {
      hash[word] = 1;
    }
  });

  note.every((word) => {
    if (magazine.includes(word) && hash[word] > 0) {
      hash[word]--;
      return true;
    } else {
      answer = "No";
      return false;
    }
  });

  if (answer === "No") {
    console.log(answer);
  } else {
    console.log("Yes");
  }
}

checkMagazine(
  ["two", "two", "times", "three", "is", "not", "four"],
  ["two", "times", "two", "is", "four"]
);

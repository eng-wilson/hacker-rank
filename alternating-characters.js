function alternatingCharacters(s) {
  let deletions = 0;

  for (let index = 0; index < s.length; index++) {
    if (s[index] === "A" && s[index + 1] === "A") {
      deletions++;
    }
    if (s[index] === "B" && s[index + 1] === "B") {
      deletions++;
    }
  }

  return deletions;
}

alternatingCharacters("AAAA");

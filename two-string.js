// function twoStrings(s1, s2) {
//   let answer = "";

//   s2.split("").forEach((letter) => {
//     if (s1.includes(letter)) {
//       answer = "YES";
//     }
//   });

//   if (answer === "YES") {
//     return answer;
//   }
//   {
//     return "NO";
//   }
// }

function twoStrings(s1, s2) {
  let answer = "";
  let hash = {};

  s1.split("").forEach((letter) => {
    if (!hash[letter]) {
      hash[letter] = true;
    }
  });

  s2.split("").forEach((letter) => {
    if (hash[letter]) {
      answer = "YES";
    }
  });

  if (answer === "YES") {
    return answer;
  } else {
    return "NO";
  }
}

twoStrings("hello", "world");

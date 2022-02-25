function compareTriplets(a, b) {
  const alice = a.split(" ");
  let alicePoints = 0;

  const bob = b.split(" ");
  let bobPoints = 0;

  for (let i = 0; i < alice.length; i++) {
    if (Number(alice[i]) > Number(bob[i])) {
      console.log(alice[i]);
      console.log(bob[i]);
      alicePoints++;
    }
    if (Number(alice[i]) < Number(bob[i])) {
      console.log(alice[i]);
      console.log(bob[i]);
      bobPoints++;
    }
  }

  console.log(`${alicePoints} ${bobPoints}`);
}

compareTriplets("5 6 7", "3 6 10");

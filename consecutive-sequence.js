function consecutiveCombo(a1, a2) {
  const combinedArray = [...a1, ...a2].sort((a, b) => a - b)

  for (let i = 0; i < combinedArray.length - 1; i++) {
    if (combinedArray[i] !== combinedArray[i + 1] - 1) {
      console.log(false)
      return false
    }
  }
  
  return true
}

consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10])

/*
  Step 1: join a1 and a2 into the same array

  Step 2: sort combined array

  Step 3: traverse array and check if a[n] = a[n + 1] - 1
*/
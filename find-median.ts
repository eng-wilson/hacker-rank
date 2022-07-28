
function findMedian(arr: number[]): number {
  const sortedArray = arr.sort((a, b) => a-b)

  return sortedArray[Math.floor(sortedArray.length / 2)]
}

function sortArray(arr: number[]) {
  const sortedArray = arr.sort()

  console.log(sortedArray)
}


sortArray([3,20,1])
// console.log(findMedian([1,2,3]))
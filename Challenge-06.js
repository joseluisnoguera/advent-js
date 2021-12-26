export default function sumPairs(numbers, result) {
  let solutionFound = false, i = 0, resultNumbers = []
  while (!solutionFound && i < numbers.length) {
    let j = i + 1
    resultNumbers[0] = numbers[i]
    while(!solutionFound && j < numbers.length){
      resultNumbers[1] = numbers[j]
      solutionFound = result === resultNumbers[0] + resultNumbers[1]
      j++
    }
    i++
  }
  return solutionFound ? resultNumbers : null
}
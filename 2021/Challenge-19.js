export default function learn(time, courses) {
  let result = [], maxSumResult = 0
  for(let i = 0; i < courses.length - 1; i++)
    for(let j = i+1; j < courses.length; j++){
      const partial = [i, j]
      const sumPartial = partial.reduce((total, value) => total + courses[value], 0)
      if (sumPartial <= time && maxSumResult < sumPartial){
          result = partial
          maxSumResult = sumPartial
      }
    }
  return maxSumResult === 0 ? null : result
}
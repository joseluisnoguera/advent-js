export default function checkSledJump(heights) {
  let gotMaxHeigth = false, i = 1, isValid = true
  while(isValid && i < heights.length) {
    const currHeigth = heights[i], prevHeigth = heights[i-1]
    const isAscending = currHeigth > prevHeigth
    const isDescending = currHeigth < prevHeigth
    const isLastPos = i === heights.length - 1
    gotMaxHeigth ||= !isAscending
    isValid &&= currHeigth !== prevHeigth && (gotMaxHeigth && isDescending) || (!gotMaxHeigth && isAscending && !isLastPos)
    i++
  }
  return isValid
}
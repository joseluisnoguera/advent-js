export default function missingReindeer(ids) {
  const maxValue = ids.length
  const missingOne = ids.sort((a,b) => a - b).find((value, i) => value != i)
  return missingOne ? missingOne - 1 : maxValue
}
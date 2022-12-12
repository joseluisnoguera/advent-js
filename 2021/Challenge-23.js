export default function canReconfigure(from, to) {
  if (from.length !== to.length) return false
  let map = {}, reverseMap = {}, index = 0
  while (index < from.length) {
    const keyF = from.charAt(index),
      keyT = to.charAt(index),
      validTo = keyF in map && map[keyF] !== keyT,
      validFrom = keyT in reverseMap && reverseMap[keyT] !== keyF
    if ( validTo || validFrom)
        return false
    else {
      map[keyF] = keyT
      reverseMap[keyT] = keyF
    }
    index++
  }
  return true
}
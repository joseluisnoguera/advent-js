const MILL_PER_SEC = 1000, SEC_PER_MIN = 60, MIN_PER_HOUR = 60, HOUR_PER_DAY = 24

const millSecToFloorDays = (millSec) => Math.floor(millSec / (MILL_PER_SEC * SEC_PER_MIN * MIN_PER_HOUR * HOUR_PER_DAY))

export default function daysToXmas(date) {
  const xmasDate = new Date('Dec 25, 2021')
  date.setHours(0,0,0)
  const millSecDiff = xmasDate.getTime() - date.getTime()
  return millSecToFloorDays(millSecDiff)
}
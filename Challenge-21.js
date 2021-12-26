export default function canCarry(capacity, trip) {
  const states = trip.reduce((state, [gifts, pick, deliver]) => {
    state[pick] = (state[pick] || 0) + gifts
    state[deliver] = (state[deliver] || 0) - gifts
    return state
  }, []).filter(el => el !== undefined)
  let canCarry = true, jump = 0, bag = 0
  while(canCarry && jump < states.length){
    const giftFlow = states[jump]
    if (giftFlow)
      bag += giftFlow
    canCarry &&= bag <= capacity && bag >= 0
    jump++
  }
  return canCarry
}
const LAST_POSITION = 10

export default function getMinJump(obstacles) {
  let found = false, minJump = 1
  while (!found && minJump <= LAST_POSITION){
    let i = 0
    found = true
    while (i <= LAST_POSITION){
      i = i + minJump
      found = found && !obstacles.includes(i)
    }
    if (!found) minJump++
  }
  return minJump
}